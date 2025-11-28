"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeButton } from "./theme-button";

export function ThemeToggler() {
  return (
    <div className="absolute top-4 right-10 z-100">
      <ThemeButton />
    </div>
  );
}
