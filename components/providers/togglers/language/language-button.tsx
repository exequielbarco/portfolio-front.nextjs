"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../../language-provider";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check, Flag } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  {
    label: "Español",
    value: "es",
    flag: "🇦🇷",
  },
  {
    label: "English",
    value: "en",
    flag: "🇺🇸",
  },
] as const;

export function LanguageButton() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" aria-label="Cambiar idioma">
        <Flag className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Cambiar idioma">
          <Flag className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-0">
        <Command>
          <CommandList>
            <CommandGroup heading="Idioma">
              {languages.map((lang) => (
                <CommandItem
                  key={lang.value}
                  value={lang.value}
                  onSelect={(currentValue) => {
                    setLanguage(currentValue as "es" | "en");
                    setOpen(false);
                  }}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      language === lang.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
