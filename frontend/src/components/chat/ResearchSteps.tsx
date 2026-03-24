import { useState, useEffect, useCallback } from "react";
import { Search, Brain, Globe, Loader2, CheckCircle, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: string; // Using a unique string (node + index) to allow duplicates in the list
  nodeType: string; 
  icon: "search" | "globe" | "brain" | "loader";
  title: string;
  description: string;
  status: "pending" | "active" | "complete";
}

interface ResearchStepsProps {
  isActive: boolean;
  isCompleted?: boolean;
  onComplete: () => void;
}

// Initial state starts with the very first node
const initialSteps: Step[] = [
  { id: "gen_0", nodeType: "generate_query", icon: "search", title: "Generating Search Queries", description: "Analyzing your question...", status: "active" },
];

export function ResearchSteps({ isActive, isCompleted, onComplete }: ResearchStepsProps) {
  const [steps, setSteps] = useState<Step[]>(isCompleted ? [] : initialSteps);
  const [isExpanded, setIsExpanded] = useState(!isCompleted);
  const [isComplete, setIsComplete] = useState(isCompleted || false);

  const getIcon = (icon: Step["icon"], status: Step["status"]) => {
    const baseClass = "h-4 w-4 transition-all duration-300";
    if (status === "complete") return <CheckCircle className={cn(baseClass, "text-green-400")} />;
    if (status === "active") return <Loader2 className={cn(baseClass, "animate-spin text-foreground")} />;
    
    switch (icon) {
      case "search": return <Search className={cn(baseClass, "text-muted-foreground")} />;
      case "globe": return <Globe className={cn(baseClass, "text-muted-foreground")} />;
      case "brain": return <Brain className={cn(baseClass, "text-muted-foreground")} />;
      case "loader": return <Loader2 className={cn(baseClass, "text-muted-foreground")} />;
    }
  };

  useEffect(() => {
    if (isCompleted || !isActive || isComplete) return;

    const handleNodeUpdate = (event: any) => {
      const nodeName = event.detail;

      if (nodeName === 'complete') {
        setSteps(prev => prev.map(s => ({ ...s, status: "complete" })));
        setIsComplete(true);
        setTimeout(() => {
          setIsExpanded(false);
          onComplete();
        }, 1000);
        return;
      }

      setSteps((prev) => {
        const lastStep = prev[prev.length - 1];
        
        // If the backend is repeating the same node, just keep it active
        if (lastStep.nodeType === nodeName && lastStep.status === "active") {
          return prev;
        }

        // 1. Mark the previous step as complete
        const updatedPrev = prev.map((s, idx) => 
          idx === prev.length - 1 ? { ...s, status: "complete" as const } : s
        );

        // 2. Define the new step based on the node name
        let newStep: Step | null = null;
        const newId = `${nodeName}_${prev.length}`;

        switch (nodeName) {
          case "web_research":
            newStep = {
              id: newId,
              nodeType: nodeName,
              icon: "globe",
              title: prev.some(s => s.nodeType === "web_research") ? "Additional Web Research" : "Web Research",
              description: "Gathering sources...",
              status: "active"
            };
            break;
          case "reflection":
            newStep = {
              id: newId,
              nodeType: nodeName,
              icon: "brain",
              title: "Reflection",
              description: "Checking information sufficiency...",
              status: "active"
            };
            break;
          case "finalize_answer":
            newStep = {
              id: newId,
              nodeType: nodeName,
              icon: "loader",
              title: "Finalizing Answer",
              description: "Synthesizing results...",
              status: "active"
            };
            break;
        }

        return newStep ? [...updatedPrev, newStep] : updatedPrev;
      });
    };

    window.addEventListener('agent-node-step', handleNodeUpdate);
    return () => window.removeEventListener('agent-node-step', handleNodeUpdate);
  }, [isActive, isComplete, isCompleted, onComplete]);

  if (!isCompleted && !isActive && !isComplete) return null;

  return (
    <div className={cn("bg-accent/30 border border-border rounded-xl overflow-hidden transition-all duration-500 ease-out mb-4", isComplete && !isExpanded && "bg-accent/20")}>
      <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-2 w-full text-left p-4 hover:bg-accent/20 transition-colors duration-200">
        <Brain className="h-4 w-4 text-muted-foreground" />
        <span className="cursive-heading text-sm font-medium flex-1">
            {isComplete ? "Research Synthesized" : "Research Timeline"}
        </span>
        <ChevronUp className={cn("h-4 w-4 text-muted-foreground transition-transform duration-300 ease-out", !isExpanded && "rotate-180")} />
      </button>

      <div className={cn("transition-all duration-500 ease-out overflow-hidden", isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0")}>
        <div className="px-4 pb-4 ml-2 overflow-y-auto">
          {steps.map((step, index) => (
            <div key={step.id} className={cn("relative pl-6 pb-4 last:pb-0 transition-all duration-500 ease-out animate-fade-in")}>
              {index < steps.length - 1 && (
                <div className="absolute left-[7px] top-6 w-[2px] h-[calc(100%-12px)] bg-border">
                  <div className={cn("w-full transition-all duration-500", step.status === "complete" ? "h-full bg-green-400/60" : "h-0")} />
                </div>
              )}
              <div className="absolute left-0 top-0.5">{getIcon(step.icon, step.status)}</div>
              <div>
                <p className={cn("text-sm font-medium transition-colors", step.status === "active" ? "text-foreground" : "text-muted-foreground")}>
                    {/* Logic to rename Synthesizing when final response appears */}
                    {step.nodeType === "finalize_answer" && isComplete ? "Synthesized Answer" : step.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}