import en from "@/messages/en.json";
import tr from "@/messages/tr.json";

export type Locale = "en" | "tr";

export const messages = { en, tr } as const;

export type Messages = typeof en;
