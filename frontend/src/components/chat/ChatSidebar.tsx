import { Plus, MessageSquare, Trash2, PanelLeftClose, PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface Chat {
  id: string;
  title: string;
  createdAt: Date;
}

interface ChatSidebarProps {
  chats: Chat[];
  activeChat: string | null;
  isCollapsed: boolean;
  onNewChat: () => void;
  onSelectChat: (id: string) => void;
  onDeleteChat: (id: string) => void;
  onToggleCollapse: () => void;
}

export function ChatSidebar({
  chats,
  activeChat,
  isCollapsed,
  onNewChat,
  onSelectChat,
  onDeleteChat,
  onToggleCollapse,
}: ChatSidebarProps) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    onNewChat();
    navigate("/");
  };

  return (
    <aside 
      className={cn(
        "flex h-full flex-col border-r border-border bg-sidebar transition-all duration-300 ease-in-out",
        isCollapsed ? "w-14" : "w-64"
      )}
    >
      {/* Header */}
      <div className={cn(
        "flex items-center border-b border-border transition-all duration-300",
        isCollapsed ? "justify-center p-3" : "justify-between p-4"
      )}>
        {!isCollapsed && (
          <button 
            onClick={handleLogoClick}
            className="cursive-heading text-2xl text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Noir AI
          </button>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleCollapse}
          className="h-8 w-8 transition-transform duration-300"
        >
          {isCollapsed ? <PanelLeft className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </Button>
      </div>

      {/* New Chat Button */}
      <div className={cn("transition-all duration-300", isCollapsed ? "p-2" : "p-3")}>
        <Button
          onClick={onNewChat}
          variant={isCollapsed ? "ghost" : "outline"}
          size={isCollapsed ? "icon" : "default"}
          className={cn(
            "transition-all duration-300",
            isCollapsed 
              ? "w-full h-10" 
              : "w-full justify-start gap-2 border-border bg-transparent hover:bg-accent"
          )}
        >
          <Plus className="h-4 w-4" />
          <span className={cn(
            "font-body text-sm transition-all duration-300",
            isCollapsed ? "hidden" : "block"
          )}>New Chat</span>
        </Button>
      </div>

      {/* Chat List */}
      <div className={cn("flex-1 overflow-y-auto scrollbar-thin", isCollapsed ? "px-2" : "px-2")}>
        <div className="space-y-1">
          {chats.map((chat, index) => (
            <div
              key={chat.id}
              className={cn(
                "group flex items-center gap-2 rounded-lg cursor-pointer transition-all duration-200 animate-slide-in",
                isCollapsed ? "justify-center px-0 py-2" : "px-3 py-2",
                activeChat === chat.id
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => onSelectChat(chat.id)}
            >
              <MessageSquare className="h-4 w-4 shrink-0" />
              {!isCollapsed && (
                <>
                  <span className="flex-1 truncate text-sm font-body">
                    {chat.title}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteChat(chat.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-secondary rounded"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-border transition-all duration-300">
          <p className="cursive-heading text-sm text-muted-foreground text-center">
            Elegance in simplicity
          </p>
        </div>
      )}
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <button 
          onClick={handleLogoClick}
          className="cursive-heading text-2xl text-foreground hover:text-primary transition-colors cursor-pointer"
        >
          Noir AI
        </button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleCollapse}
          className="h-8 w-8"
        >
          <PanelLeftClose className="h-4 w-4" />
        </Button>
      </div>

      {/* New Chat Button */}
      <div className="p-3">
        <Button
          onClick={onNewChat}
          variant="outline"
          className="w-full justify-start gap-2 border-border bg-transparent hover:bg-accent"
        >
          <Plus className="h-4 w-4" />
          <span className="font-body text-sm">New Chat</span>
        </Button>
      </div>

    </aside>
  );
}
