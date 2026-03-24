import { Sparkles, Search, Lightbulb, Code } from "lucide-react";

const suggestions = [
  {
    icon: Search,
    title: "Research",
    description: "Find information on any topic",
  },
  {
    icon: Lightbulb,
    title: "Brainstorm",
    description: "Generate creative ideas",
  },
  {
    icon: Code,
    title: "Code",
    description: "Write and explain code",
  },
];

interface WelcomeScreenProps {
  onSuggestionClick: (text: string) => void;
}

export function WelcomeScreen({ onSuggestionClick }: WelcomeScreenProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 animate-fade-in">
      {/* Logo */}
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-border bg-accent glow-effect">
        <Sparkles className="h-10 w-10 text-foreground animate-pulse-subtle" />
      </div>

      {/* Heading */}
      <h1 className="cursive-heading text-5xl text-foreground mb-3">
        Noir AI
      </h1>
      <p className="font-cursive text-lg text-muted-foreground italic mb-12">
        Your elegant assistant for any question
      </p>

      {/* Suggestion Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl w-full">
        {suggestions.map((suggestion, index) => (
          <button
            key={suggestion.title}
            onClick={() => onSuggestionClick(`Help me with ${suggestion.title.toLowerCase()}`)}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:bg-accent hover:border-muted-foreground card-shadow animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent border border-border group-hover:bg-secondary transition-colors">
              <suggestion.icon className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="cursive-heading text-xl text-foreground">
              {suggestion.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground text-center">
              {suggestion.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
