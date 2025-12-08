// import { ExperienceSection } from "@/components/sections/public/experience-section";
// import { SkillsSection } from "@/components/sections/public/skills-section";
// import { ProjectsSection } from "@/components/sections/public/projects-section";

import { Container } from "@/components/layout/container";
import AboutSection from "@/components/sections/public/about-section_md";
import { PageSection } from "@/components/layout/section";

export default function PublicHomePage() {
  return (
    <Container>
      <PageSection>
        <AboutSection />
      </PageSection>
    </Container>
  );
}
