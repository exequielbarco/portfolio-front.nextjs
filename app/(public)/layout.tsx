import { PublicLayout } from "@/components/layout/public-layout";
import { ThemeToggler } from "@/components/theme-toogler";

export default function PublicRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PublicLayout>
      <ThemeToggler />
      {children}
    </PublicLayout>
  );
}
