import { useLayoutEffect, type PropsWithChildren } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProgramLanding from "./pages/ProgramLanding";
import Program from "./pages/Program";
import Home from "./pages/Home";
import { useReveal } from "./hooks/useReveal";

const Wrapper = ({ children }: PropsWithChildren) => {
    const location = useLocation();

    useLayoutEffect(() => {
        // Scroll to top of page
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location.pathname]);

    return children;
};

function App() {
    useReveal();
    return (
        <Wrapper>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/program" element={<ProgramLanding />} />
                    <Route path="/program/service" element={<Program />} />
                </Routes>
            </main>
            <Footer />
        </Wrapper>
    );
}

export default App;
