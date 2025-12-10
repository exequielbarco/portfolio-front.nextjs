import type { Metadata } from "next";
import type { ReactNode } from "react";
import { cookies } from "next/headers";

import { Geist, Roboto } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/components/providers/language-provider";

export const metadata: Metadata = {
  title: "Porfolio Web Developer - Barco Exequiel Alejandro",
  description: "Front-End: Next.JS Porfolio based. Back-End: Django REST API.",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("language")?.value;
  const initialLanguage = lang === "es" || lang === "en" ? lang : "en";

  return (
    <html
      lang={initialLanguage}
      suppressHydrationWarning
      className={`${geist.variable} ${roboto.variable}`}
    >
      <body
        className={`min-h-screen bg-background text-foreground
        antialiased overflow-x-hidden font-roboto
        selection:bg-primary/20 selection:text-primary`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider initialLanguage={initialLanguage}>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
