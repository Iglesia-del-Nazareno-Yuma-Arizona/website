import LiturgyItem, { type Dot } from "./LiturgyItem";
import * as S from "../styles";

type SpecialProps = {
    dot?: Dot;
    number: string;
    title: string;
    doxologySubtitle: string;
    verses: string;
};

const Special = ({
    dot,
    number,
    title,
    doxologySubtitle,
    verses,
}: SpecialProps) => (
    <LiturgyItem dot={dot} number={number} category="Comunión / Communion">
        <S.DoxologyHeadingContainer>
            <S.LiturgyTitle style={{ marginBottom: ".5rem" }}>
                {title}
            </S.LiturgyTitle>
            <S.ScriptureReference style={{ marginBottom: ".5rem" }}>
                {doxologySubtitle}
            </S.ScriptureReference>

            <S.DoxologyBox>
                <blockquote cite="">{verses}</blockquote>
            </S.DoxologyBox>
        </S.DoxologyHeadingContainer>
    </LiturgyItem>
);

export default Special;
