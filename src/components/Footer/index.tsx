import * as S from "./styles";

const Footer = () => {
    return (
        <S.Footer>
            <S.Address>
                <S.FooterTitle>Iglesia Del Nazareno</S.FooterTitle>
                <S.FooterSubtitle>
                    210 W 9th St • Yuma, AZ 85364
                </S.FooterSubtitle>
            </S.Address>

            <S.Copyright>
                {new Date().getFullYear()} Church of the Nazarene
            </S.Copyright>
        </S.Footer>
    );
};

export default Footer;
