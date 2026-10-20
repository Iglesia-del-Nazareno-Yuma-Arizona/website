import styled from "styled-components";
import { borderRadius, color } from "../../styles/theme";
import { Link } from "react-router-dom";

// --- Components ---

export const PageWrapper = styled.div`
    min-height: max(884px, 100dvh);
    background-color: ${color("background")};
    color: ${color("onBackground")};
    displaly: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const MainContainer = styled.article`
    width: 100%;
    max-width: 28rem;
    margin: 0 auto;
    padding: 0.75rem 1.25rem 3rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const DateBadge = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.75rem;
    border-radius: ${borderRadius("full")};
    background-color: ${color("surfaceContainerLow")};
    margin-bottom: 1.25rem;
    font-size: 0.75rem;
    color: ${color("onSurfaceVariant")};
    transition: all 0.15s ease;
    align-self: flex-start;
`;

export const DateBadgeContent = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const DateText = styled.span`
    font-weight: 500;
    letter-spacing: 0.025rem;
    color: ${color("onSurface")};
`;

export const HeroFigure = styled.figure`
    position: relative;
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;
    margin: 0 0 1.5rem 0;
    aspect-ratio: 16 / 10;
    background-color: ${color("surfaceContainer")};
    box-shadow: 0 0 0 1px ${color("surfaceVariant")};
`;

export const HeroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const HeroCaption = styled.figcaption`
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to top,
        rgba(1, 1, 2, 0.8) 0%,
        rgba(1, 1, 2, 0.2) 50%,
        transparent 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.25rem;
    color: ${color("onPrimary")};
`;

export const HeroTag = styled.p`
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
    color: ${color("secondaryContainer")};
    margin: 0 0 0.25rem 0;
`;

export const HeroTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.25;
    margin: 0;

    span {
        font-weight: 300;
        opacity: 0.9;
    }
`;

export const IntroSection = styled.section`
    text-align: center;
    margin-bottom: 1.75rem;
    padding: 0 0 0.25rem;
`;

export const MainHeading = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.025rem;
    color: ${color("onSurface")};
    margin: 0 0 0.375rem 0;
`;

export const SubHeading = styled.p`
    font-size: 0.75rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    font-weight: 600;
    color: ${color("secondary")};
    margin: 0 0 0.75rem 0;
`;

export const BodyDescription = styled.p`
    font-size: 1rem;
    color: ${color("onSurfaceVariant")};
    line-height: 1.625;
    margin: 0;
`;

export const ItalicDescription = styled.p`
    font-size: 1rem;
    color: ${color("outline")};
    margin: 1.375rem 0 0 0;
    font-style: italic;
    font-weight: 300;
`;

export const LanguageNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    margin-bottom: 1.75rem;
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`;

export const LanguageInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.625rem;
`;

export const LangAvatar = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: ${borderRadius("full")};
    background-color: ${color("surfaceContainer")};
    font-weight: 600;
    font-size: 1.2rem;
    color: ${color("primary")};
`;

export const LangTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${color("onSurface")};
    display: flex;
    align-items: center;
    gap: 0.375rem;
    margin: 0;
`;

export const TagBadge = styled.mark<{ $isSecondary?: boolean }>`
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0.125rem 0.5rem;
    border-radius: ${borderRadius("full")};
    background-color: ${({ $isSecondary, theme }) =>
        $isSecondary
            ? theme.colors.secondaryContainer
            : theme.colors.surfaceContainerHigh};
    color: ${({ $isSecondary, theme }) =>
        $isSecondary
            ? theme.colors.onSecondaryContainer
            : theme.colors.onSurfaceVariant};
    letter-spacing: 0.05rem;
`;

export const LangDescription = styled.p`
    font-size: 0.9rem;
    color: ${color("onSurfaceVariant")};
    font-weight: 550;
    margin: 5px 0 0;
`;

export const ArrowIcon = styled.span`
    color: ${color("outline")};
    font-size: 1.25rem;
    transition: color 0.15s ease;
`;

export const CardFooter = styled.div`
    padding-top: 0.5rem;
    border-top: 1px solid rgba(229, 226, 225, 0.6);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: ${color("outline")};

    span.action {
        font-weight: 500;
        color: ${color("primary")};
    }
`;

export const LanguageLink = styled(Link)`
    display: block;
    padding: 1rem;
    background-color: ${color("surfaceContainerLowest")};
    border-radius: ${borderRadius("default")};
    border: 1px solid rgba(199, 198, 202, 0.4);
    transition: all 0.2s ease-in-out;
    position: relative;

    ${ArrowIcon} {
        transition: transform 0.3s ease;
    }

    @media (hover: hover) {
        &:hover {
            border-color: ${color("primary")};

            ${LangTitle} {
                color: ${color("primary")};
            }

            ${ArrowIcon} {
                transform: translateX(8px);
                color: ${color("primary")};
            }
        }

        &:active {
            transform: scale(0.98);
        }
    }

    @media (max-width: 768px) {
        border: 2px solid ${color("primary")};

        @media (hover: hover) {
            &:hover {
                border-color: ${color("secondaryFixedDim")};
            }
        }
    }
`;
