import * as S from "./styles";

const Home = () => {
    return (
        <S.WorkInProgressContainer className="reveal reveal-up">
            {/* Large Worker Graphic */}
            <S.GraphicWrapper>
                <S.GraphicImage
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyPfL2vw2khPzgcyDkHD1JtuZLuCqtmcAOGXYAIQYox3L9-_wDQXS-UMr1Lxki-I-uYcR946AytRHSoY3Y3XzQpenT0YqQ_iP9k1E__yWfmoTGvQXnqydpdF6Ze5i31gImz-8wOEDoEloL3SBCTuPSnoiAbWxxXcg1SclICarirG0hOT69LrKxasguLn-CmXdHzVIjWdrlmNrUWasfpH_DCaYNTtlMWVbnftLbD6zZi9PGIGdgOyV2OViROBhWmJziCA"
                    alt="En construcción"
                />
            </S.GraphicWrapper>

            {/* Bilingual Captions Cluster */}
            <S.CaptionsCluster>
                {/* Primary Spanish Caption */}
                <S.CaptionGroup>
                    <S.PrimaryHeading>Trabajo en progreso.</S.PrimaryHeading>
                    <S.PrimaryDescription>
                        Vuelve a visitarnos más tarde.
                    </S.PrimaryDescription>
                </S.CaptionGroup>

                {/* Subtle Hairline Separator with Ochre Accent */}
                <S.Separator>
                    <S.SeparatorLine />
                    <S.SeparatorDot />
                    <S.SeparatorLine />
                </S.Separator>

                {/* English Caption */}
                <S.CaptionGroup $subtle>
                    <S.SecondaryHeading>Work in progress.</S.SecondaryHeading>
                    <S.SecondaryDescription>
                        Check it out later.
                    </S.SecondaryDescription>
                </S.CaptionGroup>
            </S.CaptionsCluster>

            {/* Clean Subtle Minimalist Footer Note */}
            <S.FooterNote>
                <S.FooterText>
                    Construyendo Comunidad • Building Fellowship
                </S.FooterText>
            </S.FooterNote>
        </S.WorkInProgressContainer>
    );
};

export default Home;
