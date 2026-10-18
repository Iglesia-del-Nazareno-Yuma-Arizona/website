export const LANGS = ["es", "en"] as const;
export type Lang = (typeof LANGS)[number];

export const isLang = (v: string | undefined): v is Lang =>
    LANGS.includes(v as Lang);
