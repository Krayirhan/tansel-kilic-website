export const LINKEDIN_URL = "https://www.linkedin.com/in/tanselkilic/";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tanselkilic.com";

// Base64 obfuscated email string for tanselkilic@gmail.com
const OBFUSCATED_EMAIL = "dGFuc2Vsa2lsaWNAZ21haWwuY29t";
export const EMAIL = typeof window !== "undefined" ? atob(OBFUSCATED_EMAIL) : "tanselkilic[at]gmail.com";
