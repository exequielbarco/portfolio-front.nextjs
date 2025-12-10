import { apiFetch } from "./client";
import type { AboutPage } from "@/types/aboutpage";

export async function getAboutPage(language: string | undefined) {
  console.log(language);
  let path = "";

  if (language !== undefined) {
    path = `/aboutpage?language=${language}`;
  } else {
    path = `/aboutpage`;
  }
  console.log(path);

  const { results } = await apiFetch<{ results: AboutPage[] }>(path);
  return results[0] ?? null;
}
