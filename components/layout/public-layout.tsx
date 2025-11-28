import { Header } from "./header";
import { Footer } from "./footer";

import { NavItem } from "@/types/navigation";

const navItems = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
] satisfies NavItem[];

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header navItems={navItems} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
