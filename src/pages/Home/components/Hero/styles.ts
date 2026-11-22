import styled from "styled-components";
import { color } from "../../../../styles/theme";

export const HeroContainer = styled.section`
    position: relative;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    overflow: hidden;
`;

export const HeroBanner = styled.div`
    position: relative;
    overflow: hidden;
    min-height: 460px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    color: ${color("surfaceContainerLowest")};
    width: 100%;

    @media (width >= 768px) {
        min-height: 560px;
        padding: 4rem 2rem;
    }
`;

export const HeroVideo = styled.video`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;
    pointer-events: none;
`;

export const HeroScrim = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to top,
        rgba(1, 2, 0, 0.95) 0%,
        rgba(1, 1, 2, 0.5) 50%,
        rgba(1, 1, 2, 0.25) 100%
    );
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    max-width: 36rem;
    margin: 0 auto;
    width: 100%;
`;

export const HeroTagLine = styled.p`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.12rem;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
`;

export const HeroTitleGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
`;

export const HeroPrimaryTitle = styled.h1`
    font-size: 1.875rem;
    font-weight: 700;
    letter-spacing: -0.025rem;
    color: ${color("surfaceContainerLowest")};
    line-height: 1.25;
    margin: 0;
`;

export const HeroSecondaryTitle = styled.p`
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: -0.025rem;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
`;

export const HeroDescription = styled.p`
    font-size: 0.75rem;
    font-weight: 300;
    line-height: 1.625;
    color: rgba(255, 255, 255, 0.7);
    max-width: 24rem;
    padding-top: 0.25rem;
    margin: 0;

    @media (width >= 768px) {
        font-size: 1rem;
    }
`;
