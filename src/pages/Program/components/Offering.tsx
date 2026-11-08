import LiturgyItem from "./LiturgyItem";
import * as S from "../styles";

export type Paragraph = { id: number; paragraph: string };

type OfferingProps = {
    number: string;
    title: string;
    reference: string;
    verses: string;
    reflectionTitle: string;
    paragraphs: Paragraph[];
    note?: string;
};

const Offering = ({
    number,
    title,
    reference,
    verses,
    reflectionTitle,
    paragraphs,
    note,
}: OfferingProps) => (
    <LiturgyItem number={number} category="Generosidad / Offering">
        <div>
            <S.LiturgyTitle>{title}</S.LiturgyTitle>

            <S.ScriptureReference>{reference}</S.ScriptureReference>
        </div>

        <S.ScriptureBox>
            <p>{verses}</p>
        </S.ScriptureBox>

        <S.ReflectionBox>
            <S.ReflectionTitle>{reflectionTitle}</S.ReflectionTitle>

            {Array.isArray(paragraphs) &&
                paragraphs.map(({ id, paragraph }) => (
                    <p key={id}>{paragraph}</p>
                ))}
        </S.ReflectionBox>

        {note && (
            <S.NoteBanner>
                <span className="material-symbols-outlined" translate="no">
                    info
                </span>
                <span>{note}</span>
            </S.NoteBanner>
        )}
    </LiturgyItem>
);

export default Offering;
