"use client";

import ReactMarkdown from "react-markdown";

import "@/app/markdown.css";
import Image from "next/image";

type MarkdownContentProps = {
  markdown_body: string;
};

export default function MarkdownContent({
  markdown_body,
}: MarkdownContentProps) {
  const MarkDownComponents: object = {
    h1: ({ node, ...props }: any) => <h1 {...props} className="mb-4 mt-0" />,
    h2: ({ node, ...props }: any) => <h2 {...props} className="mb-4 mt-0" />,
    h3: ({ node, ...props }: any) => <h3 {...props} className="mt-4 mb-0" />,
    h4: ({ node, ...props }: any) => <h4 {...props} className="mt-4 mb-0" />,
    li: ({ node, ...props }: any) => <li {...props} className="mt-1 mb-0" />,
    p: (paragraph: { children?: boolean; node?: any }) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const metastring = image.properties.alt;
        const alt = metastring?.replace(/ *\{[^)]*\} */g, "");
        const metaWidth = metastring.match(/{([^}]+)x/);
        const metaHeight = metastring.match(/x([^}]+)}/);
        const width = metaWidth ? metaWidth[1] : "200";
        const height = metaHeight ? metaHeight[1] : "200";

        return (
          <Image
            src={image.properties.src}
            width={width}
            height={height}
            className="float-right ml-4 mb-2 rounded-full"
            alt={alt}
          />
        );
      }
      return <>{paragraph.children}</>;
    },
  };

  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown children={markdown_body} components={MarkDownComponents} />
    </div>
  );
}
