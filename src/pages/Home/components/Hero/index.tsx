import * as S from "./styles";

interface HeroSectionProps {
    videoUrl?: string;
    posterUrl?: string;
}

const HeroSection = ({
    videoUrl = "/video/heroExample-3better.mp4",
    posterUrl = "../../../../assets/IDN-front-webp.webp",
}: HeroSectionProps) => (
    <S.HeroContainer>
        <S.HeroBanner>
            <S.HeroVideo autoPlay loop muted playsInline poster={posterUrl}>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </S.HeroVideo>

            <S.HeroScrim />

            <S.HeroContent>
                <S.HeroTagLine>Bienvenido • Welcome</S.HeroTagLine>

                <S.HeroTitleGroup>
                    <S.HeroPrimaryTitle>
                        Una familia de fe en Yuma
                    </S.HeroPrimaryTitle>
                    <S.HeroSecondaryTitle>
                        A family of faith in Yuma
                    </S.HeroSecondaryTitle>
                </S.HeroTitleGroup>

                <S.HeroDescription>
                    Una comunidad con un corazón grande para Dios y nuestro
                    prójimo. Te damos la bienvenida tal como eres.
                </S.HeroDescription>
            </S.HeroContent>
        </S.HeroBanner>
    </S.HeroContainer>
);

export default HeroSection;
