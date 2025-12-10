"use client";

import ReactMarkdown from "react-markdown";

import Image from "next/image";

type MarkdownContentProps = {
  markdown_body: string;
};

export default function MarkdownContent({
  markdown_body,
}: MarkdownContentProps) {
  const MarkDownComponents: object = {
    h1: ({ node, ...props }: any) => <h1 {...props} className="mt-2 mb-4" />,
    h2: ({ node, ...props }: any) => <h2 {...props} className="mt-4 mb-4" />,
    h3: ({ node, ...props }: any) => <h3 {...props} className="mt-4 mb-4" />,
    h4: ({ node, ...props }: any) => <h4 {...props} className="mt-3 mb-0" />,
    li: ({ node, ...props }: any) => <li {...props} className="mt-2 mb-0" />,
    p: (paragraph: { children?: boolean; node?: any }) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const metastring = image.properties.alt;
        const alt = metastring?.replace(/ *\{[^)]*\} */g, "");
        const metaWidth = metastring.match(/{([^}]+)x/);
        const metaHeight = metastring.match(/x([^}]+)}/);
        const width = metaWidth ? metaWidth[1] : "150";
        const height = metaHeight ? metaHeight[1] : "150";

        return (
          <div className="sm:float-right float-none flex justify-center p-4 pr-0">
            <Image
              src={image.properties.src}
              width={width}
              height={height}
              className="mt-0 mb-0 rounded-full"
              alt={alt}
              unoptimized
            />
          </div>
        );
      }
      return <>{paragraph.children}</>;
    },
  };

  return (
    <div className="prose max-w-none dark:prose-invert">
      <ReactMarkdown children={markdown_body} components={MarkDownComponents} />
    </div>
  );
}
