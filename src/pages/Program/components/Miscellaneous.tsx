import * as S from "../styles";
import LiturgyItem from "./LiturgyItem";
import type { Dot } from "./LiturgyItem";

type MiscellaneousProps = {
    dot?: Dot; // Fot the timeline dot
    number?: string;
    category?: string;
    icon?: string;
    title: string;
    text: string;
};

const Miscellaneous = ({
    dot,
    number,
    category,
    icon,
    title,
    text,
}: MiscellaneousProps) => (
    <LiturgyItem dot={dot} number={number} category={category}>
        <S.LiturgyTitle>{title}</S.LiturgyTitle>
        <S.DivRow>
            <span
                className="material-symbols-outlined meta-icon"
                translate="no"
            >
                {icon}
            </span>

            <S.LiturgyText>{text}</S.LiturgyText>
        </S.DivRow>
    </LiturgyItem>
);

export default Miscellaneous;
