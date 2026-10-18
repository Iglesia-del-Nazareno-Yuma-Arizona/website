export function formatDate(lang: string, date: Date = new Date()): string {
    const text = date.toLocaleDateString(lang, {
        weekday: "long",
        day: "numeric",
        month: "short",
    });

    return text.charAt(0).toLocaleUpperCase(lang) + text.slice(1);
}
