import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ChatSidebar } from "@/components/chat/ChatSidebar";
import { ChatContainer } from "@/components/chat/ChatContainer";
import { ChatInput } from "@/components/chat/ChatInput";
import { useChat } from "@/hooks/useChat";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const {
    chats,
    activeChat,
    messages,
    isTyping,
    isResearching,
    pendingMessageId,
    newMessageId,
    createNewChat,
    selectChat,
    deleteChat,
    sendMessage,
    onResearchComplete,
    generateResponse,
  } = useChat();

  // // Generate response after research completes
  // useEffect(() => {
  //   if (isTyping && !isResearching) {
  //     generateResponse();
  //   }
  // }, [isTyping, isResearching, generateResponse]);

  const handleSuggestionClick = (text: string) => {
    sendMessage(text);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile Sidebar Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-50 md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 transform transition-all duration-300 md:relative md:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <ChatSidebar
          chats={chats}
          activeChat={activeChat}
          isCollapsed={sidebarCollapsed}
          onNewChat={createNewChat}
          onSelectChat={(id) => {
            selectChat(id);
            if (window.innerWidth < 768) {
              setSidebarOpen(false);
            }
          }}
          onDeleteChat={deleteChat}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Chat Area */}
      <main className="flex flex-1 flex-col chat-gradient">
        <ChatContainer
          messages={messages}
          isTyping={isTyping}
          isResearching={isResearching}
          pendingMessageId={pendingMessageId}
          newMessageId={newMessageId}
          onResearchComplete={onResearchComplete}
          onSuggestionClick={handleSuggestionClick}
        />
        <ChatInput onSend={sendMessage} disabled={isTyping || isResearching} />
      </main>
    </div>
  );
};

export default Index;
