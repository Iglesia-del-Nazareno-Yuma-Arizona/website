import styled from "styled-components";

// --- Work In Progress Screen Styles ---

export const WorkInProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 28rem;
    margin: 0 auto;
    min-height: 80vh;
    padding: 2rem 1.25rem;
    text-align: center;
`;

export const GraphicWrapper = styled.div`
    width: 100%;
    max-width: 280px;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5rem;
    transition: transform 0.3s ease;

    @media (min-width: 640px) {
        max-width: 340px;
    }

    @media (min-width: 768px) {
        max-width: 380px;
    }
`;

export const GraphicImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05));
    user-select: none;
`;

export const CaptionsCluster = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`;

export const CaptionGroup = styled.div<{ $subtle?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: ${({ $subtle }) => ($subtle ? "0.125rem" : "0.25rem")};
`;

export const PrimaryHeading = styled.h1`
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.025em;
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;

    @media (min-width: 640px) {
        font-size: 1.5rem;
    }
`;

export const PrimaryDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
    margin: 0;
`;

export const Separator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 6rem;
`;

export const SeparatorLine = styled.span`
    height: 1px;
    width: 2rem;
    background-color: rgba(199, 198, 202, 0.6);
`;

export const SeparatorDot = styled.span`
    width: 0.375rem;
    height: 0.375rem;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const SecondaryHeading = styled.h2`
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;

    @media (min-width: 640px) {
        font-size: 1.125rem;
    }
`;

export const SecondaryDescription = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.outline};
    margin: 0;
`;

export const FooterNote = styled.footer`
    width: 100%;
    padding: 1.5rem 0;
    text-align: center;
    margin-top: auto;
`;

export const FooterText = styled.p`
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    color: rgba(119, 118, 123, 0.8);
    text-transform: uppercase;
    margin: 0;
`;
