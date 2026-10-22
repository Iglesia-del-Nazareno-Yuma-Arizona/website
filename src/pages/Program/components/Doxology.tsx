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
    <LiturgyItem dot={dot} number={number} badgeVariant={dot} badge={badge}>
        <S.DoxologyHeadingContainer>
            <S.LiturgyTitle>{title}</S.LiturgyTitle>

            <S.PastorSubText>{subtitle}</S.PastorSubText>
        </S.DoxologyHeadingContainer>

        <S.DoxologyBox>
            <S.DoxologyTitle>{textTitle}</S.DoxologyTitle>
            <blockquote>{text}</blockquote>
        </S.DoxologyBox>
    </LiturgyItem>
);

export default Doxology;
