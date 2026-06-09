import en from "@/messages/en.json";
import tr from "@/messages/tr.json";

export type Locale = "en" | "tr";

export const messages = { en, tr } as const;

export type Messages = typeof en;

type DeepKeysMatch<A, B> =
  A extends readonly unknown[]
    ? B extends readonly unknown[]
      ? true
      : never
    : A extends object
      ? B extends object
        ? Exclude<keyof A, keyof B> extends never
          ? Exclude<keyof B, keyof A> extends never
            ? { [K in keyof A]: K extends keyof B ? DeepKeysMatch<A[K], B[K]> : never }[keyof A]
            : never
          : never
        : never
      : true;

const _messagesCheck: DeepKeysMatch<typeof en, typeof tr> = true;
void _messagesCheck;
