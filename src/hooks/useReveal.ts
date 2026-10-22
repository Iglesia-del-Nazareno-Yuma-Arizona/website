import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useReveal = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>(".reveal");

        let inner = 0;
        const outer = requestAnimationFrame(() => {
            inner = requestAnimationFrame(() => {
                elements.forEach((el) => el.classList.add("active"));
            });
        });

        return () => {
            cancelAnimationFrame(outer);
            cancelAnimationFrame(inner);
        };
    }, [pathname]);
};
