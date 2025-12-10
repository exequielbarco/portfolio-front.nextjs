import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("mx-auto w-full max-w-2xl px-4", className)}>
      {children}
    </div>
  );
}
