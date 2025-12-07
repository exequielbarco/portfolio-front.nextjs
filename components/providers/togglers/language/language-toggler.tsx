"use client";

import { LanguageButton } from "./language-button";

export function LanguageToggler() {
  return (
    <div className="invisible md:visible absolute bottom-20 right-5 z-100">
      <LanguageButton />
    </div>
  );
}
