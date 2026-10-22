import * as S from "../styles";

type TributeSectionProps = {
    badgeText: string;
    imageSrc: string;
    imageAlt: string;
    caption: string;
};

const TributeSection = ({
    badgeText,
    imageSrc,
    imageAlt,
    caption,
}: TributeSectionProps) => (
    <S.TributeCard>
        <S.Badge>
            <span className="material-symbols-outlined badge-icon">
                favorite
            </span>
            <span> {badgeText}</span>
        </S.Badge>

        <S.ImageWrapper>
            <S.TributeImage src={imageSrc} alt={imageAlt} />
        </S.ImageWrapper>

        <S.TributeCaption>{caption}</S.TributeCaption>
    </S.TributeCard>
);

export default TributeSection;
