import * as S from "./styles";

// Icons
import person from "../../../../assets/person_celebrating.svg";
import vision from "../../../../assets/vision.svg";

const MissionVisionStatements = () => (
    <S.SectionContainer>
        <S.SectionHeader>
            <S.SectionSubtitle>Propósito y Dirección</S.SectionSubtitle>
            <S.SectionTitle>Misión y Visión</S.SectionTitle>
        </S.SectionHeader>

        <S.CardContainer>
            {/* Mission Card */}
            <S.Card>
                <S.CardHeader>
                    <S.CardIcon src={person} alt="" aria-hidden="true" />
                    <S.CardLabel>Misión</S.CardLabel>
                </S.CardHeader>

                <S.CardStatement>
                    "Existimos para proclamar las Buenas Nuevas de Jesucristo,
                    enseñar fielmente las Escrituras y hacer discípulos
                    semejantes a Cristo que vivan para la gloria de Dios."
                </S.CardStatement>
            </S.Card>

            <S.Card>
                <S.CardHeader>
                    <S.CardIcon src={vision} alt="" aria-hidden="true" />
                    <S.CardLabel>Visión</S.CardLabel>
                </S.CardHeader>

                <S.CardStatement>
                    "Ser una iglesia bíblicamente sana, donde cada creyente
                    refleja activamente el carácter de Cristo en su vida
                    cotidiana, y se compromete con la gran comisión con el
                    propósito de ver nuestra comunidad alcanzada por el poder
                    del Evangelio para la gloria de Dios y bendición de Yuma."
                </S.CardStatement>
            </S.Card>
        </S.CardContainer>
    </S.SectionContainer>
);

export default MissionVisionStatements;
