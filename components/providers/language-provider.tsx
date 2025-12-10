"use client";

import { useRouter } from "next/navigation";

import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "es" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage: Language;
}) {
  const router = useRouter();
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    document.cookie = `language=${lang}; path=/; max-age=31536000`;
    router.refresh();
  };

  const toggleLanguage = () => {
    changeLanguage(language === "es" ? "en" : "es");
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe estar dentro del LanguageProvider");
  }
  return ctx;
}
