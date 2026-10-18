import styled from "styled-components";
import { borderRadius, color } from "../../styles/theme";

// --- Layout & Container ---

export const BulletinContainer = styled.article`
    width: 100%;
    max-width: 28rem;
    margin: 0 auto;
    padding: 1rem 1.25rem 6rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

// --- Header Badge & Service Metada ---

export const MetadataSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const ScanBadgePill = styled.div``;

export const MetadataHeader = styled.header`
    border-bottom: 1px solid rgba(199, 198, 202, 0.3);
    padding-bottom: 1rem;
`;

export const MainTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    color: ${color("onSurface")};
    line-height: 1.25;
`;

export const PastorMetaRow = styled.p`
    font-size: 0.75rem;
    color: ${color("onSurfaceVariant")};
    margin: 0.375rem 0 0 0;
    display: flex;
    align-items: center;
    gap: 0.375rem;

    strong {
        font-weight: 500;
        color: ${color("onSurface")};
    }

    .meta-icon {
        font-size: 0.875rem;
        color: ${color("secondary")};
    }
`;

export const DateMetaRow = styled.p`
    font-size: 0.75rem;
    color: ${color("onSurfaceVariant")};
    margin: 0.375rem 0 0 0;
    display: flex;
    align-items: center;
    gap: 0.375rem;

    .meta-icon {
        font-size: 0.875rem;
        color: ${color("outline")};
    }
`;

// --- Liturgy Section ---

export const SectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 0.25rem;
`;

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SectionHeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SectionSubLabel = styled.span`
    font-size: 11px;
    font-weigth: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${color("secondary")};
`;

export const SectionMainTtitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    color: ${color("onSurface")};
    margin: 0;
`;

export const DateBadge = styled.span`
    font-size: 0.75rem;
    color: ${color("outline")};
    padding: 0.125rem 0.625rem;
    border-radius: ${borderRadius("full")};
    background-color: ${color("surfaceContainerHigh")};
`;

export const TimelineContainer = styled.ol`
    position: relative;
    padding-left: 1.5rem;
    border-left: 1px solid rgba(199, 198, 202, 0.4);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0.5rem 0;
`;

export const TimelineItem = styled.li`
    position: relative;
`;

export const TimelineDot = styled.div<{
    variant?: "default" | "secondary" | "primary";
}>`
    position: absolute;
    left: -31px;
    top: 0.5rem;
    width: 0.875rem;
    height: 0.875rem;
    border-radius: ${borderRadius("full")};
    background-color: ${({ variant, theme }) =>
        variant === "primary"
            ? theme.colors.primary
            : variant === "secondary"
              ? theme.colors.secondary
              : theme.colors.surfaceContainerHigh};
    border: 2px solit ${color("surface")};

    ${({ variant, theme }) =>
        variant === "secondary" &&
        `box-shadow: 0 0 0 2px ${theme.colors.secondaryContainer};`}

    ${({ variant, theme }) =>
        variant === "primary" &&
        `box-shadow: 0 0 0 2px ${theme.colors.primaryFixed};`}
`;

export const LiturgyCard = styled.article<{ isHighlighted?: boolean }>`
    background-color: ${color("surfaceContainerLowest")};
    padding: 1rem;
    border-radius: ${borderRadius("card")};
    border: ${({ isHighlighted, theme }) =>
        isHighlighted
            ? `2px solid rgba(113, 91, 38, 0.4)`
            : `1px solid rgba(199, 198, 202, 0.3)`};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const LiturgyMeta = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
    color: ${color("secondary")};
    font-weight: 600;
`;

export const LiturgyCategory = styled.span`
    color: ${color("outline")};
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 0.05rem;
`;

export const HighLightBadge = styled.span<{
    variant?: "secondary" | "primary";
}>`
    pading: 0.125rem 0.5rem;
    background-color: ${({ variant, theme }) =>
        variant === "primary"
            ? theme.colors.primary
            : "rgba(113, 91, 38, 0.15)"};
    color: ${({ variant, theme }) =>
        variant === "primary"
            ? theme.colors.onPrimary
            : theme.colors.secondary};
    border-radius: ${borderRadius("full")};
    font-size: 10px;
    letter-spacing: 0.05em;
    font-weight: 600;
    text-tansform: uppercase;
`;

export const CardTitleRow = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`;

export const ScriptureReference = styled.span`
    font-size: 0.75rem;
    font-weight: 600;
    color: ${color("secondary")};
`;

export const LiturgyTitle = styled.h3`
    font-size: 0.875rem;
    font-weight: 600;
    color: ${color("onSurface")};
`;

export const LiturgyText = styled.p`
    font-size: 0.75rem;
    color: ${color("onSurfaceVariant")};
    margin: 0;
    line-height: 1.5;
`;

export const PastorSubText = styled(LiturgyText)`
    margin-top: 0.125rem;
`;

export const ScriptureBox = styled.div`
    padding: 0.75rem;
    background-color: ${color("surfaceContainerLow")};
    border-radius: ${borderRadius("card")};
    border: 1px solid rgba(199, 198, 202, 0.2);
    font-size: 0.75rem;
    color: ${color("onSurface")};
    font-style: italic;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    gap: 0.375rem;

    p {
        margin: 0;
    }

    strong {
        font-style: normal;
        color: ${color("secondary")};
    }
`;

export const SongListGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
`;

export const SongRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;

    .music-icon {
        font-size: 0.875rem;
        color: ${color("secondary")};
    }

    strong {
        font-weight: 800;
        color: ${color("onSurface")};
    }

    span.divider {
        color: ${color("outline")};
    }
`;

export const GreetingTimeTag = styled.p`
    margin: 0;
    font-size: 11px;
    color: ${color("secondary")};
    font-style: italic;
    font-weight: 500;
`;

export const ReflectionBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    font-size: 0.75rem;
    color: ${color("onSurfaceVariant")};

    p {
        margin: 0;
    }
`;

export const ReflectionTitle = styled.span`
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${color("secondary")};
`;

export const NoteBanner = styled.div`
    padding: 0.625rem;
    border-radius: 0.5rem;
    background-color: ${color("surfaceContainer")};
    font-size: 0.75rem;
    color: ${color("onSurfaceVariant")};
    font-weight: 500;
    font-style: italic;
    border: 1px solid rgba(199, 198, 202, 0.3);
    display: flex;
    align-items: center;
    gap: 0.375rem;

    span.material-symbols-outlined {
        font-size: 0.875rem;
        color: ${color("secondary")};
        font-style: normal;
    }
`;

export const DoxologyBox = styled.div`
    padding: 0.875rem;
    background-color: ${color("surfaceContainerLow")};
    border-radius: ${borderRadius("card")};
    border: 1px solid rgba(199, 198, 202, 0.2);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    blockquote {
        margin: 0;
        font-size: 0.75rem;
        font-style: italic;
        color: ${color("onSurface")};
        line-height: 1.6;
    }
`;

export const DoxologyTitle = styled.span`
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${color("secondary")};
    display: block;
`;
