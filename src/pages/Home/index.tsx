{
    /* import * as S from "./styles"; */
}
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import HeroSection from "./components/Hero";
import MissionVisionStatements from "./components/MissionVision";

const Home = () => {
    useDocumentTitle("Inicio");

    return (
        <>
            <HeroSection />
            <MissionVisionStatements />
        </>
    );
};

export default Home;
