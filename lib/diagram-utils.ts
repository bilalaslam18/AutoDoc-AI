/**
 * Extracts Mermaid diagrams from markdown content
 */
export function extractDiagramsFromMarkdown(markdownContent: string) {
  const diagrams: { content: string; id: string }[] = [];
  let diagramCounter = 0;
  
  // Replace Mermaid code blocks with placeholders
  const markdown = markdownContent.replace(
    /```mermaid\n([\s\S]*?)```/g,
    (match, diagramCode) => {
      const id = `mermaid-diagram-${diagramCounter++}`;
      diagrams.push({
        content: diagramCode.trim(),
        id,
      });
      return `<div class="mermaid-placeholder" data-id="${id}"></div>`;
    }
  );
  
  return { diagrams, markdown };
}