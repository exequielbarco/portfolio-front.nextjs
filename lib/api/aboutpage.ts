import { apiFetch } from "./client";
import type { AboutPage } from "@/types/aboutpage";

export async function getAboutPage() {
  const { results } = await apiFetch<{ results: AboutPage[] }>("/aboutpage");

  return results[0] ?? null;
}

export const dynamic = "force-dynamic";
