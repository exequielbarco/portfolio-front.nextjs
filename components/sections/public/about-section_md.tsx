import Image from "next/image";

import { getAboutPage } from "@/lib/api/aboutpage";

import AboutActions from "./about-actions";
import MarkdownContent from "../markdown-content";

const AboutSection = async () => {
  const about = await getAboutPage();

  if (!about) {
    return <section className="max-w-4xl mx-auto px-4">Sin contenido.</section>;
  }

  return (
    <section className="max-w-4xl mx-auto px-4 leading-relaxed">
      <MarkdownContent markdown_body={about.markdown_body} />

      <AboutActions />
    </section>
  );
};

export default AboutSection;
