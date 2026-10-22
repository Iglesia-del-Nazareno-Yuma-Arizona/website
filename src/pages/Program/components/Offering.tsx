import LiturgyItem from "./LiturgyItem";
import * as S from "../styles";

type OfferingProps = {
    number: string;
    title: string;
    reference: string;
    verses: string;
    reflectionTitle: string;
    text: string;
    note?: string;
};

const Offering = ({
    number,
    title,
    reference,
    verses,
    reflectionTitle,
    text,
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

            <p>{text}</p>
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
