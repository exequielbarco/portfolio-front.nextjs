"use client";

import { ThemeButton } from "./theme-button";

export function ThemeToggler() {
  return (
    <div className="invisible md:visible absolute bottom-10 lg:bottom-5 right-5 z-100">
      <ThemeButton />
    </div>
  );
}
