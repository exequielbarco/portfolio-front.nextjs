"use client";

import MarkdownContent from "../markdown-content";
import AboutActions from "./about-actions";
import type { AboutPage } from "@/types/aboutpage";

export default function AboutSectionClient({
  initialAbout,
}: {
  initialAbout: AboutPage | null;
}) {
  if (!initialAbout) {
    return <section className="max-w-4xl mx-auto px-4">Sin contenido.</section>;
  }

  const { markdown_body, image_url } = initialAbout;
  const replaced_image_url = `![ProfilePicture](${image_url})`;
  const markdown_replaced = markdown_body.replace(
    "{{PROFILE_IMAGE}}",
    replaced_image_url
  );

  return (
    <section className="max-w-4xl mx-auto px-4">
      <MarkdownContent markdown_body={markdown_replaced} />
      <AboutActions />
    </section>
  );
}
