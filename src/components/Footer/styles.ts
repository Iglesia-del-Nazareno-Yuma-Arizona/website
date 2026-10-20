import styled from "styled-components";
import { color } from "../../styles/theme";

export const Footer = styled.footer`
    margin-top: auto;
    padding: 1rem;
    text-align: center;
    border-top: 1px solid rgba(199, 198, 202, 0.2);
`;

export const Address = styled.address`
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
`;

export const FooterTitle = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: ${color("onSurface")};
    margin: 0;
`;

export const FooterSubtitle = styled.p`
    font-size: 12px;
    color: ${color("onPrimaryContainer")};
    maring: 0.125rem 0 0 0;

    span {
        font-style: italic;
    }
`;

export const Copyright = styled.small`
    display: block;
    font-size: 10px;
    color: ${color("outlineVariant")};
    margin-top: 0.5rem;
`;
