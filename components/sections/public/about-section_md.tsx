import Image from "next/image";

import { getAboutPage } from "@/lib/api/aboutpage";

import AboutActions from "./about-actions";
import MarkdownContent from "../markdown-content";

const AboutSection = async () => {
  const about = await getAboutPage();

  const { markdown_body, image_url } = about;

  const replaced_image_url = `![ProfilePicture](${image_url})`;
  
  const markdown_replaced = markdown_body.replace(
    "{{PROFILE_IMAGE}}",
    replaced_image_url
  );

  if (!about) {
    return <section className="max-w-4xl mx-auto px-4">Sin contenido.</section>;
  }

  return (
    <section className="max-w-4xl mx-auto px-4 leading-relaxed">
      <MarkdownContent markdown_body={markdown_replaced} />
      <AboutActions />
    </section>
  );
};

export default AboutSection;
