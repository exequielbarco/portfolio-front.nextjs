import { apiFetch } from "./client";
import type { AboutPage } from "@/types/aboutpage";

export async function getAboutPage() {
  return apiFetch<AboutPage>("/aboutpages");
}
