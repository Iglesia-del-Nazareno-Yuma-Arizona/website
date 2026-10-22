import LiturgyItem, { type Dot } from "./LiturgyItem";
import * as S from "../styles";

type DoxologyProps = {
    number: string;
    dot?: Dot;
    badge: string;
    title: string;
    subtitle: string;
    textTitle: string;
    text: string;
};

const Doxology = ({
    dot,
    number,
    badge,
    title,
    subtitle,
    textTitle,
    text,
}: DoxologyProps) => (
    <LiturgyItem number={number} badgeVariant={dot} badge={badge}>
        <div>
            <S.LiturgyTitle>{title}</S.LiturgyTitle>

            <S.PastorSubText>{subtitle}</S.PastorSubText>
        </div>

        <S.DoxologyBox>
            <S.DoxologyTitle>{textTitle}</S.DoxologyTitle>
            <blockquote>{text}</blockquote>
        </S.DoxologyBox>
    </LiturgyItem>
);

export default Doxology;
