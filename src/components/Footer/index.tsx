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

            <S.Divider />

            <S.Copyright>
                Texto bíblico: Reina-Valera 1960 © Sociedades Bíblicas en
                América Latina, 1960. Derechos renovados 1988, Sociedades
                Bíblicas Unidas. Utilizado con permiso.
            </S.Copyright>

            <S.Copyright>
                Scripture quotations are from The ESV® Bible (The Holy Bible,
                English Standard Version®), © 2001 by Crossway, a publishing
                ministry of Good News Publishers. Used by permission. All rights
                reserved.
            </S.Copyright>
        </S.Footer>
    );
};

export default Footer;
