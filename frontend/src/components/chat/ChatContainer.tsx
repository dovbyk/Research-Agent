import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { WelcomeScreen } from "./WelcomeScreen";
import { ResearchSteps } from "./ResearchSteps";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  hasResearch?: boolean;
  isNew?: boolean;
}

interface ChatContainerProps {
  messages: Message[];
  isTyping: boolean;
  isResearching: boolean;
  pendingMessageId: string | null;
  newMessageId: string | null;
  onResearchComplete: () => void;
  onSuggestionClick: (text: string) => void;
}

export function ChatContainer({ 
  messages, 
  isTyping, 
  isResearching,
  pendingMessageId,
  newMessageId,
  onResearchComplete,
  onSuggestionClick 
}: ChatContainerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isResearching]);

  if (messages.length === 0 && !isResearching) {
    return <WelcomeScreen onSuggestionClick={onSuggestionClick} />;
  }

  // Group messages with their research steps
  const renderMessages = () => {
    const elements: JSX.Element[] = [];
    
    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];
      const nextMessage = messages[i + 1];
      
      // Render message
      elements.push(
        <ChatMessage
          key={message.id}
          role={message.role}
          content={message.content}
          isNew={message.id === newMessageId}
        />
      );
      
      // If this is a user message with research, show research steps
      if (message.role === "user" && message.hasResearch) {
        const isThisMessagePending = message.id === pendingMessageId;
        const hasAssistantResponse = nextMessage?.role === "assistant";
        
        // Show research steps if:
        // 1. This is the pending message (currently researching)
        // 2. OR there's already an assistant response (completed research)
        if (isThisMessagePending || hasAssistantResponse) {
          elements.push(
            <div key={`research-${message.id}`} className="px-4 py-2 animate-fade-in">
              <ResearchSteps 
                isActive={isThisMessagePending && isResearching}
                isCompleted={hasAssistantResponse}
                onComplete={onResearchComplete}
              />
            </div>
          );
        }
      }
    }
    
    return elements;
  };

  return (
    <ScrollArea className="flex-1" ref={scrollRef}>
      <div className="mx-auto max-w-3xl">
        {renderMessages()}
        
        {/* Show typing indicator after research completes */}
        {isTyping && !isResearching && (
          <ChatMessage role="assistant" content="" isTyping />
        )}
        
        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
}
