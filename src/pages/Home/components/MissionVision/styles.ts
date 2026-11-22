import styled from "styled-components";
import { borderRadius, color } from "../../../../styles/theme";

export const SectionContainer = styled.section`
    padding: 3rem 1.5rem 2rem 1.5rem;
    max-width: 28rem;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    transition: max-width 0.3s ease;

    @media (width >= 768px) {
        max-width: 64rem;
        padding: 4rem 2rem 3rem 2rem;
    }
`;

export const SectionHeader = styled.div`
    text-align: center;
`;

export const SectionSubtitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: ${color("outline")};
`;

export const SectionTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    color: ${color("onSurface")};
    margin-top: 0.25rem;
    margin-bottom: 0;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;

    @media (width >= 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        align-items: stretch;
    }
`;

export const Card = styled.div`
    background-color: ${color("surfaceContainerLow")};
    border-radius: ${borderRadius("lg")};
    padding: 1.5rem;
    border: 1px solid rgba(199, 198, 202, 0.3);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const CardIcon = styled.img`
width: 1.25rem
height: 1.25rem;
display: block;
`;

export const CardLabel = styled.span`
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 700;
    color: ${color("onSurface")};
`;

export const CardStatement = styled.p`
    font-size: 0.9rem;
    font-weight: 400;
    color: ${color("onSurface")};
    line-height: 1.625;
    margin: 0;
`;
