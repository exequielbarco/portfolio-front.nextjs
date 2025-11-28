import Link from "next/link";

type FooterProps = {
  id?: string;
} & React.PropsWithChildren;

export function Footer({ id }: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
        <span>© {currentYear} Exequiel A. Barco - KielDev</span>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-foreground">
            GitHub
          </Link>
          <Link href="#" className="hover:text-foreground">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
