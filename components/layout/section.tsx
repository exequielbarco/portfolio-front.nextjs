import { cn } from "@/lib/utils";

type PageSectionProps = {
  id?: string;
  className?: string;
} & React.PropsWithChildren;

export function PageSection({ id, className, children }: PageSectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-8 sm:py-12", className)}>
      {children}
    </section>
  );
}
