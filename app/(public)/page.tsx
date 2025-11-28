// import { AboutSection } from "@/components/sections/public/about-section";
// import { ExperienceSection } from "@/components/sections/public/experience-section";
// import { SkillsSection } from "@/components/sections/public/skills-section";
// import { ProjectsSection } from "@/components/sections/public/projects-section";

import { Container } from "@/components/layout/container";
import HeroSection from "@/components/sections/public/hero-section";

export default function PublicHomePage() {
  return (
    <Container>
      <HeroSection />
      {/* <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />  */}
    </Container>
  );
}
