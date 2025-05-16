"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { Card } from "@/components/ui/card";
import { MarkdownPreview } from "@/components/markdown-preview";
import { extractDiagramsFromMarkdown } from "@/lib/diagram-utils";

interface DiagramDisplayProps {
  markdownWithDiagram: string;
}

export function DiagramDisplay({ markdownWithDiagram }: DiagramDisplayProps) {
  const [diagrams, setDiagrams] = useState<{ content: string; id: string }[]>([]);
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const diagramRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: document.documentElement.classList.contains("dark") ? "dark" : "default",
      securityLevel: "loose",
    });
    
    const { diagrams: extractedDiagrams, markdown } = extractDiagramsFromMarkdown(markdownWithDiagram);
    setDiagrams(extractedDiagrams);
    setMarkdownContent(markdown);
  }, [markdownWithDiagram]);

  useEffect(() => {
    async function renderDiagrams() {
      for (let i = 0; i < diagrams.length; i++) {
        const diagram = diagrams[i];
        const element = diagramRefs.current[i];
        
        if (element) {
          try {
            const { svg } = await mermaid.render(diagram.id, diagram.content);
            element.innerHTML = svg;
          } catch (error) {
            console.error("Error rendering diagram:", error);
            element.innerHTML = `<div class="text-red-500 p-4">Error rendering diagram</div>`;
          }
        }
      }
    }
    
    if (diagrams.length > 0) {
      renderDiagrams();
    }
  }, [diagrams]);

  return (
    <div className="space-y-6">
      <MarkdownPreview content={markdownContent} />
      
      {diagrams.map((diagram, index) => (
        <Card key={diagram.id} className="p-4 overflow-x-auto">
          <div
            ref={(el) => (diagramRefs.current[index] = el)}
            className="flex justify-center"
          >
            <div className="animate-pulse text-center py-8">
              <div className="h-4 w-32 bg-muted rounded mx-auto"></div>
              <div className="mt-2 text-sm text-muted-foreground">Loading diagram...</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}