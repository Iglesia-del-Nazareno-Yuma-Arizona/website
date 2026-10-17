import * as S from "./styles";
import { formatDate } from "../../utils/date";

const ChurchProgramLanding = () => {
    return (
        <S.PageWrapper>
            <S.MainContainer>
                <S.BackBadgeLink href="#language-selection">
                    <S.BackBadgeContent>
                        {/* <S.BackIcon>arrow_back</S.BackIcon> */}
                        <S.BackText>{formatDate("es-US")}</S.BackText>
                    </S.BackBadgeContent>
                </S.BackBadgeLink>

                {/* Hero image card*/}
                <S.HeroFigure>
                    <S.HeroImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbKWEF2Q8Y8wZzSrxoXWE9OB_MIh4XAb-wfVN63g0sk1wznvkr6OZKb5Bl8KnOUUlPrh_JBiDQ4RICIiU1bO5_WYTNdi4JuukUcYwjWabFSRTQGoNyJ6YHxDnlM51Mdu3BVfHKO6dH6U_1--mDcJhZemDuheWYh684GRVJ-Z0MKUVTDvLUKj-7nRcTMTxlU1kDF4dH5fbhSs1pY2h84V_59Gn60oRCawD4nMbayhAsP9WdRiQ1PrBy" />
                    <S.HeroCaption>
                        <S.HeroTag>Comunidad de Fe &amp; Esperanza</S.HeroTag>
                        <S.HeroTitle>
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

                    <S.ItalicDescription>
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
                    <S.LanguageLink href="#orden-es">
                        <S.CardHeader>
                            <S.LanguageInfo>
                                <S.LangAvatar>ES</S.LangAvatar>
                                <div>
                                    <S.LangTitle>
                                        Español
                                        <S.TagBadge isSecondary>
                                            Culto Principal
                                        </S.TagBadge>
                                    </S.LangTitle>
                                    <S.LangDescription>
                                        Ver la orden del culto dominical
                                        completo
                                    </S.LangDescription>
                                </div>
                            </S.LanguageInfo>
                            <S.ArrowIcon className="material-symbols-outlined">
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

                    <S.LanguageLink href="#order-es">
                        <S.CardHeader>
                            <S.LanguageInfo>
                                <S.LangAvatar>EN</S.LangAvatar>
                                <div>
                                    <S.LangTitle>
                                        English
                                        <S.TagBadge>Main service</S.TagBadge>
                                    </S.LangTitle>
                                    <S.LangDescription>
                                        Digital Order of Worship &amp; notes.
                                    </S.LangDescription>
                                </div>
                            </S.LanguageInfo>
                            <S.ArrowIcon className="material-symbols-outlined">
                                arrow_forward
                            </S.ArrowIcon>
                        </S.CardHeader>
                        <S.CardFooter>
                            <span>
                                Scripture passages, hymns, prayer list &amp;
                                notes
                            </span>
                            <span className="action">Continue</span>
                        </S.CardFooter>
                    </S.LanguageLink>
                </S.LanguageNav>
            </S.MainContainer>
        </S.PageWrapper>
    );
};

export default ChurchProgramLanding;
