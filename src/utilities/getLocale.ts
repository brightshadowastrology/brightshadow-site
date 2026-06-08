import { cookies } from "next/headers";

export type SupportedLocale = "en" | "fr";

export async function getLocale(): Promise<SupportedLocale> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("payload-locale")?.value;
  return locale === "fr" ? "fr" : "en";
}
