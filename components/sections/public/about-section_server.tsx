import { cookies } from "next/headers";
import AboutSectionClient from "./about-section_client";
import { getAboutPage } from "@/lib/api/aboutpage";

const AboutSection = async () => {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("language")?.value;
  const languageFromCookie =
    langCookie === "es" || langCookie === "en" ? langCookie : undefined;

  const about = await getAboutPage(languageFromCookie);

  return <AboutSectionClient initialAbout={about} />;
};

export default AboutSection;
