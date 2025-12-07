import { PublicLayout } from "@/components/layout/public-layout";
import { LanguageToggler } from "@/components/providers/togglers/language/language-toggler";
import { ThemeToggler } from "@/components/providers/togglers/theme/theme-toogler";

export default function PublicRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PublicLayout>
      <ThemeToggler />
      <LanguageToggler />
      {children}
    </PublicLayout>
  );
}
