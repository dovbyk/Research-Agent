import { useState, useCallback } from "react";
import { Client } from "@langchain/langgraph-sdk";

// --- TYPES & INTERFACES ---

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  hasResearch?: boolean; 
  isNew?: boolean; 
}

interface Chat {
  id: string;
  threadId: string;
  title: string;
  messages: Message[];
  createdAt: Date;
}

/**
 * Updated to match graph.py finalize_answer return structure
 */
interface FinalizeAnswerUpdate {
  finalize_answer: {
    messages: { content: string }[];
    sources_gathered: any[];
  };
}

const DEPLOYMENT_URL = "http://127.0.0.1:2024";
const client = new Client({ apiUrl: DEPLOYMENT_URL });
const generateId = () => Math.random().toString(36).substring(2, 15);

export function useChat() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isResearching, setIsResearching] = useState(false);
  const [pendingMessageId, setPendingMessageId] = useState<string | null>(null);
  const [newMessageId, setNewMessageId] = useState<string | null>(null);

  const currentChat = chats.find((c) => c.id === activeChat);
  const messages = currentChat?.messages || [];

const sendMessage = useCallback(async (content: string) => {
  const messageId = generateId();
  setPendingMessageId(messageId);
  let threadId = currentChat?.threadId;

  if (!activeChat || !threadId) {
    try {
      const thread = await client.threads.create();
      threadId = thread.thread_id;
      
      const newChat: Chat = {
        id: generateId(),
        threadId: threadId,
        title: content.slice(0, 30) + (content.length > 30 ? "..." : ""),
        messages: [],
        createdAt: new Date(),
      };
      setChats((prev) => [newChat, ...prev]);
      setActiveChat(newChat.id);
    } catch (err) {
      console.error("Failed to create thread:", err);
      return;
    }
  }

  const userMessage: Message = { id: messageId, role: "user", content, hasResearch: true };
  setChats((prev) => prev.map((chat) => 
    chat.threadId === threadId ? { ...chat, messages: [...chat.messages, userMessage] } : chat
  ));

  setIsResearching(true);

  try {
    const assistants = await client.assistants.search();
    if (!assistants || assistants.length === 0) {
      throw new Error("The LangGraph server is running but has no registered graphs.");
    }

    const assistant = assistants.find(a => a.graph_id === "agent") || assistants[0];
    const assistantId = assistant.assistant_id;
    
    const stream = client.runs.stream(threadId, assistantId, {
      input: { 
        messages: [{ role: "user", content: content }],
        search_query: [],
        web_research_result: [],
        sources_gathered: [],
        initial_search_query_count: 3, 
        max_research_loops: 2, 
        research_loop_count: 0,
        reasoning_model: "deepseek/deepseek-chat"
      },
      streamMode: ["updates"],
    });

    for await (const chunk of stream) {
      if (chunk.event === "updates") {
        const nodeName = Object.keys(chunk.data)[0];
        window.dispatchEvent(new CustomEvent('agent-node-step', { detail: nodeName }));

        if ("finalize_answer" in chunk.data) {
          // 1. Signal ResearchSteps to finish
          window.dispatchEvent(new CustomEvent('agent-node-step', { detail: 'complete' }));

          const update = chunk.data as any;
          const finalContent = update.finalize_answer.messages[0].content;

          const aiMessageId = generateId();
          const aiMessage: Message = {
            id: aiMessageId,
            role: "assistant",
            content: finalContent,
            isNew: true,
          };

          // 2. Set the message and trigger typewriter
          setNewMessageId(aiMessageId);
          setChats((prev) => prev.map((chat) => 
            chat.threadId === threadId ? { ...chat, messages: [...chat.messages, aiMessage] } : chat
          ));
          
          // Switch from research spinner to typing mode
          setIsResearching(false);
          setIsTyping(true);
        }
      }
    }
  } catch (error) {
    console.error("Agent Error:", error);
  } finally {
  // Turn off researching immediately to stop that spinner
  setIsResearching(false);
  
  // We wait for the typewriter to finish (or at least start) before unlocking
  // Based on your speed of 30ms per word, 3-4 seconds is usually safe for most AI responses
  setTimeout(() => {
    setIsTyping(false);
    setPendingMessageId(null);
    console.log("DEBUG: Chat unlocked and loading sign removed.");
  }, 1000); 
}
}, [activeChat, currentChat]);


  return {
    chats: chats.map(({ id, title, createdAt }) => ({ id, title, createdAt })),
    activeChat,
    messages,
    isTyping,
    isResearching,
    pendingMessageId,
    newMessageId,
    createNewChat: () => setActiveChat(null),
    selectChat: (id: string) => setActiveChat(id),
    deleteChat: (id: string) => {
      setChats((prev) => prev.filter((c) => c.id !== id));
      if (activeChat === id) setActiveChat(null);
    },
    sendMessage,
    onResearchComplete: () => {
      setIsResearching(false);
      setIsTyping(true);
    },
    generateResponse: useCallback(async () => {}, []),
  };
}