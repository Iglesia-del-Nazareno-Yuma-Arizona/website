import * as S from "../styles";
import LiturgyItem from "./LiturgyItem";

export type Verse = { n: number; text: string };

type BibleReadingProps = {
    number: string;
    title: string;
    reference: string;
    verses: Verse[];
};

const BibleReading = ({
    number,
    title,
    reference,
    verses,
}: BibleReadingProps) => (
    <LiturgyItem number={number} category="Palabra / Scripture">
        <S.CardTitleRow>
            <S.LiturgyTitle>{title}</S.LiturgyTitle>
            <S.ScriptureReference>{reference}</S.ScriptureReference>
        </S.CardTitleRow>

        <S.ScriptureBox>
            {Array.isArray(verses) &&
                verses.map(({ n, text }) => (
                    <p key={n}>
                        <strong>{n}</strong> {text}
                    </p>
                ))}
        </S.ScriptureBox>
    </LiturgyItem>
);

export default BibleReading;
