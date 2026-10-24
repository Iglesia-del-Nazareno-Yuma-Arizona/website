import styled from "styled-components";
import { color } from "../../styles/theme";

export const Footer = styled.footer`
    margin-top: auto;
    padding: 1rem 1rem 2rem;
    text-align: center;
    border-top: 1px solid ${color("borderOutline")};
`;

export const Address = styled.address`
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
`;

export const FooterTitle = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${color("onSurface")};
    margin: 0;
`;

export const FooterSubtitle = styled.p`
    font-size: 14px;
    color: ${color("onPrimaryContainer")};
    maring: 0.125rem 0 0 0;

    span {
        font-style: italic;
    }
`;

export const Divider = styled.div`
    margin: 1.5em auto;
    max-width: 288px;
    border-top: 1px solid ${color("borderOutline")};
    display: flex;
`;

export const Copyright = styled.small`
    display: block;
    font-size: 11px;
    color: ${color("outlineVariant")};
    margin-top: 0.5rem;
`;
