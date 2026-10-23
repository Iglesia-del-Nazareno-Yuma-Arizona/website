import styled from "styled-components";
import { borderRadius, color } from "../../styles/theme";

export const Header = styled.header`
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: ${color("surfaceContainerLowest")};
    border-bottom: 1px solid ${color("borderOutline")};
    padding: 0 1.25rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition:
        background-color 0.2s ease,
        border-color 0.2x ease;
`;

export const HeaderBrandGroup = styled.div`
    display: flex;
    align-items: center;
`;

export const BrandLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.625rem;
    color: inherit;

    @media (hover: hover) {
        &:hover span.brand-icon-wrapper {
            border-color: ${color("primary")};
        }
    }
`;

// material icons church icon
export const IconWrapper = styled.span`
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
    border-radius: ${borderRadius("full")};
    border: 1px solid ${color("primary")};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color("primary")};
    transition: border-color 0.15s ease;
`;

export const ChurchIcon = styled.span`
    font-size: 20px;
`;

// Church of the Nazarene Logo

export const Logo = styled.svg`
    width: 2rem;
`;

export const BrandText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1;
`;

export const TitleText = styled.span`
    font-size: 22px;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${color("primary")};
`;

export const SubtitleText = styled.span`
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${color("outline")};
    margin-top: 1px;
`;

export const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;
