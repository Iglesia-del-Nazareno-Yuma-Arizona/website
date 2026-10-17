import { useLayoutEffect, type PropsWithChildren } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";

const Wrapper = ({ children }: PropsWithChildren) => {
    const location = useLocation();

    useLayoutEffect(() => {
        // Scroll to top of page
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location.pathname]);

    return children;
};

function App() {
    return (
        <main>
            <Wrapper>
                <Header />
                <Routes></Routes>
            </Wrapper>
        </main>
    );
}

export default App;
