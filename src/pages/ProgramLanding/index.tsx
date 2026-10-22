import * as S from "./styles";
import { formatDate } from "../../utils/date";
import { useTranslation } from "react-i18next";
import church from "../../assets/IDN-front.webp";

const ProgramLanding = () => {
    const { i18n } = useTranslation();

    return (
        <S.PageWrapper className="reveal reveal-up">
            <S.MainContainer>
                <S.DateBadge>
                    <S.DateBadgeContent>
                        <S.DateText>{formatDate("es-US")}</S.DateText>
                    </S.DateBadgeContent>
                </S.DateBadge>

                {/* Hero image card*/}
                <S.HeroFigure>
                    <S.HeroImage src={church} />
                    <S.HeroCaption>
                        <S.HeroTag>Comunidad de Fe &amp; Esperanza</S.HeroTag>
                        <S.HeroTitle translate="no">
                            Bienvenido a Casa <span>/ Welcome Home</span>
                        </S.HeroTitle>
                    </S.HeroCaption>
                </S.HeroFigure>

                {/* Header and pastoral intro */}
                <S.IntroSection>
                    <S.MainHeading>Programa Dominical Digital</S.MainHeading>
                    <S.SubHeading>
                        Yuma, AZ • Pastor Roberto Rodríguez Albavera
                    </S.SubHeading>

                    <S.BodyDescription>
                        Nos alegra recibirte hoy en nuestro culto. Selecciona tu
                        idioma para acceder a la guía de adoración en vivo.
                    </S.BodyDescription>

                    <S.ItalicDescription translate="no">
                        We're glad to have you join us for our service today.
                        Select your language to access the live worship guide.
                    </S.ItalicDescription>
                </S.IntroSection>

                {/* Language Selector Navigation */}
                <S.LanguageNav
                    id="language-selection"
                    aria-label="Selección de idioma / Language Selection"
                >
                    {/* Option A: Español */}
                    <S.LanguageLink
                        to="/program/service"
                        onClick={() => i18n.changeLanguage("es")}
                    >
                        <S.CardHeader>
                            <S.LanguageInfo>
                                <S.LangAvatar>ES</S.LangAvatar>
                                <div>
                                    <S.LangTitle>
                                        Español
                                        <S.TagBadge $isSecondary={true}>
                                            Culto Principal
                                        </S.TagBadge>
                                    </S.LangTitle>
                                    <S.LangDescription>
                                        Ver la orden del culto dominical
                                        completo
                                    </S.LangDescription>
                                </div>
                            </S.LanguageInfo>
                            <S.ArrowIcon
                                className="material-symbols-outlined"
                                translate="no"
                            >
                                arrow_forward
                            </S.ArrowIcon>
                        </S.CardHeader>
                        <S.CardFooter>
                            <span>
                                Lecturas bíblicas, alabanza, peticiones y notas
                            </span>
                            <span className="action">Ingresar</span>
                        </S.CardFooter>
                    </S.LanguageLink>

                    <S.LanguageLink
                        to="/program/service"
                        onClick={() => i18n.changeLanguage("en")}
                    >
                        <S.CardHeader>
                            <S.LanguageInfo>
                                <S.LangAvatar>EN</S.LangAvatar>
                                <div>
                                    <S.LangTitle translate="no">
                                        English
                                        <S.TagBadge translate="no">
                                            Main service
                                        </S.TagBadge>
                                    </S.LangTitle>
                                    <S.LangDescription translate="no">
                                        See order of worship &amp; notes
                                    </S.LangDescription>
                                </div>
                            </S.LanguageInfo>
                            <S.ArrowIcon
                                className="material-symbols-outlined"
                                translate="no"
                            >
                                arrow_forward
                            </S.ArrowIcon>
                        </S.CardHeader>
                        <S.CardFooter>
                            <span translate="no">
                                Scripture passages, hymns, prayer list &amp;
                                notes
                            </span>
                            <span className="action" translate="no">
                                Continue
                            </span>
                        </S.CardFooter>
                    </S.LanguageLink>
                </S.LanguageNav>
            </S.MainContainer>
        </S.PageWrapper>
    );
};

export default ProgramLanding;
