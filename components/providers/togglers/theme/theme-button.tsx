"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeButton() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Solo después de montar usamos el valor real del theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const handleClick = () => {
    if (!currentTheme) return;
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  // Mientras no montó, renderizamos algo "neutral" que no dependa de theme
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" aria-label="Cambiar tema">
        <Moon className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleClick}
      aria-label="Cambiar tema"
    >
      {currentTheme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  );
}
