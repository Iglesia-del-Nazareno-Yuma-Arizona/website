import * as S from "./styles";

const Header = () => {
    return (
        <S.Header>
            <S.HeaderBrandGroup>
                <S.BrandLink href="#">
                    <S.IconWrapper className="brand-icon-wrapper">
                        <S.ChurchIcon className="material-symbols-outlined">
                            church
                        </S.ChurchIcon>
                    </S.IconWrapper>
                    <S.BrandText>
                        <S.TitleText>Yuma</S.TitleText>
                        <S.SubtitleText>Iglesia del Nazareno</S.SubtitleText>
                    </S.BrandText>
                </S.BrandLink>
            </S.HeaderBrandGroup>
        </S.Header>
    );
};

export default Header;
