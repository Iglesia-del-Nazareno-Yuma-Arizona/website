import { useEffect } from "react";

export function useDocumentTitle(title: string) {
    useEffect(() => {
        document.title = `${title} | Yuma | Iglesia del Nazareno`;
    }, [title]);
}
