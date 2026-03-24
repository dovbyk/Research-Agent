import { cn } from "@/lib/utils";
import { User, Sparkles, ExternalLink } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/ui/badge";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isTyping?: boolean;
  isNew?: boolean;
}

/**
 * Custom components for ReactMarkdown
 * This handles the conversion of Markdown tags into styled React components.
 */
const mdComponents = {
  // Headings: Forced to font-sans and specific sizes to override cursive defaults
  h1: (props: any) => <h1 className="text-2xl font-bold mt-6 mb-4 text-foreground font-sans tracking-tight" {...props} />,
  h2: (props: any) => <h2 className="text-xl font-bold mt-5 mb-3 text-foreground font-sans border-b border-border/50 pb-1 tracking-tight" {...props} />,
  h3: (props: any) => <h3 className="text-lg font-bold mt-4 mb-2 text-foreground font-sans" {...props} />,
  
  // Body text
  p: (props: any) => <p className="mb-4 leading-7 text-foreground/90 font-sans" {...props} />,
  
  // Lists
  ul: (props: any) => <ul className="list-disc pl-6 mb-4 space-y-2 font-sans" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-4 space-y-2 font-sans" {...props} />,
  li: (props: any) => <li className="mb-1 font-sans" {...props} />,
  
  // Styling tags
  strong: (props: any) => <strong className="font-bold text-foreground" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-primary/30 pl-4 italic my-4 text-muted-foreground" {...props} />,

  // CITATION LINKS: This ignores the text and shows ONLY the small icon badge
  a: ({ href }: any) => (
    <Badge 
      variant="outline" 
      className="inline-flex items-center justify-center p-0 mx-0.5 h-5 w-6 bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 transition-colors align-middle"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full h-full text-blue-400"
        title="View Source"
      >
        <ExternalLink size={12} strokeWidth={2.5} />
      </a>
    </Badge>
  ),
};

export function ChatMessage({
  role,
  content,
  isTyping,
  isNew = false,
}: ChatMessageProps) {
  const isUser = role === "user";
  const shouldAnimate = !isUser && isNew && content.length > 0;

  const { displayedText } = useTypewriter({
    text: content,
    speed: 30,
    enabled: shouldAnimate,
  });

  const textToShow = shouldAnimate ? displayedText : content;

  /**
   * Cleans raw LLM/Search output into valid Markdown.
   * Handles Vertex AI links, naked URLs, and auto-headings.
   */
  const formatMarkdown = (text: string) => {
    if (!text) return "";

    return text
      // 1. Fix the double-URL quirk: (url)(url) -> (url)
      .replace(/\((https?:\/\/[^)]+)\)\((https?:\/\/[^)]+)\)/g, "($1)")

      // 2. Vertex AI/Google Search Link Cleaner
      // Specifically targets vertexaisearch links and wraps them in [src](url)
      .replace(/https:\/\/vertexaisearch\.cloud\.google\.com\/[^\s)]+/g, (url) => {
        const cleanUrl = url.split('?')[0].replace(/[()]/g, ""); 
        return `[src](${cleanUrl})`;
      })

      // 3. Handle any other raw URLs in the text
      // Uses a negative lookbehind to avoid double-processing already formatted links
      .replace(/(?<!\]\()https?:\/\/[^\s)]+/g, (url) => {
        const cleanUrl = url.endsWith(')') ? url.slice(0, -1) : url;
        return `[src](${cleanUrl})`;
      })

      // 4. Promote standalone Title Lines to Headings (###)
      .replace(/^(?!#)([A-Z][A-Za-z\s:]{3,})$/gm, "### $1")

      // 5. Clean up "[[source]]" or "[Source]" text leftovers
      .replace(/\[\[source\]\]/g, "[src]")
      .replace(/\[source\]/g, "[src]")

      // 6. Ensure blank line before headings so ReactMarkdown parses them correctly
      .replace(/^#{1,6}\s/gm, "\n$&");
  };

  return (
    <div className={cn(
      "flex gap-4 px-4 py-6 animate-fade-in transition-colors", 
      isUser ? "bg-transparent" : "message-ai"
    )}>
      {/* Avatar Icon */}
      <div className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border", 
        isUser 
          ? "bg-primary text-primary-foreground border-primary" 
          : "bg-accent border-border"
      )}>
        {isUser ? <User className="h-4 w-4" /> : <Sparkles className="h-4 w-4 text-blue-400" />}
      </div>

      {/* Message Content Area */}
      <div className="flex-1 space-y-2 overflow-hidden">
        {/* User/AI Label */}
        <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70 mb-1">
          {isUser ? "USER REQUEST" : "NOIR INTELLIGENCE"}
        </p>

        {isTyping && !shouldAnimate ? (
          <div className="flex gap-1.5 py-3">
            {[0, 200, 400].map((delay) => (
              <span
                key={delay}
                className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-typing"
                style={{ animationDelay: `${delay}ms` }}
              />
            ))}
          </div>
        ) : (
          <div className="prose prose-invert prose-sm max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} 
              components={mdComponents}
            >
              {formatMarkdown(textToShow)}
            </ReactMarkdown>
            
            {/* Animated Cursor during typewriter effect */}
            {shouldAnimate && textToShow !== content && (
              <span className="inline-block w-1.5 h-4 bg-blue-500/60 ml-1 animate-pulse align-middle" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}