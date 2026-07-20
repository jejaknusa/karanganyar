import { marked } from "marked";

interface MarkdownProps {
  content: string;
}
export default function Markdown({ content }: MarkdownProps) {
  const html = marked.parse(content);
  return (
    <div
      className="prose prose-h2:mt-2 first:prose-h2:mt-0 prose-h3:mt-2 first:prose-h3:mt-0 prose-h2:font-geist prose-h3:font-geist w-full max-w-none relative"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
