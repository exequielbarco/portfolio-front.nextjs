"use client";

import ReactMarkdown from "react-markdown";

type MarkdownContentProps = {
  markdown_body: string;
};

export default function MarkdownContent({
  markdown_body,
}: MarkdownContentProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown>{markdown_body}</ReactMarkdown>
    </div>
  );
}
