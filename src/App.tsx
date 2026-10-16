import { useLayoutEffect, type PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";

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
                <p>Placeholder</p>
            </Wrapper>
        </main>
    );
}

export default App;
