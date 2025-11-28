import { Header } from "./header";
import { Footer } from "./footer";

import { NavItem } from "@/types/navigation";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
] satisfies NavItem[]; // Optional but extra safe

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header navItems={navItems} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
