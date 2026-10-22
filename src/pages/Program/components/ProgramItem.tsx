import LiturgyItem from "./LiturgyItem";
import type { Dot } from "./LiturgyItem";
import * as S from "../styles";

type ProgramProps = {
    dot?: Dot;
    number?: string;
    category?: string;
    badge?: string;
    badgeVariant?: Dot;
    title: string;
    text: string;
};

const ProgramItem = ({
    dot,
    number,
    category,
    badge,
    badgeVariant,
    title,
    text,
}: ProgramProps) => (
    <LiturgyItem
        dot={dot}
        number={number}
        category={category}
        badge={badge}
        badgeVariant={badgeVariant}
    >
        <S.LiturgyTitle>{title}</S.LiturgyTitle>
        <S.LiturgyText>{text}</S.LiturgyText>
    </LiturgyItem>
);

export default ProgramItem;
