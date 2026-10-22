import * as S from "../styles";
import type { ReactNode } from "react";

export type Dot = "primary" | "secondary";

type LiturgyItemProps = {
    number?: string;
    category?: string;
    badge?: string;
    badgeVariant?: Dot;
    dot?: Dot;
    children: ReactNode;
};

const LiturgyItem = ({
    number,
    category,
    dot,
    children,
    badge,
    badgeVariant,
}: LiturgyItemProps) => (
    <S.TimelineItem>
        <S.TimelineDot $variant={dot} />
        <S.LiturgyCard>
            {(number || category) && (
                <S.LiturgyMeta>
                    {number && <span>{number}</span>}
                    {category && (
                        <S.LiturgyCategory>{category}</S.LiturgyCategory>
                    )}
                    {badge && (
                        <S.HighlightBadge $variant={badgeVariant}>
                            {badge}
                        </S.HighlightBadge>
                    )}
                </S.LiturgyMeta>
            )}

            {children}
        </S.LiturgyCard>
    </S.TimelineItem>
);

export default LiturgyItem;
