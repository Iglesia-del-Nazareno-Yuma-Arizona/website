import { formatDate } from "../../utils/date";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

const Program = () => {
    type Verse = { n: number; text: string };
    const { t, i18n } = useTranslation("program");

    const verses = t("reading.verses", { returnObjects: true }) as Verse[];

    return (
        <S.BulletinContainer>
            {/* Heading and metadata */}
            <S.MetadataSection>
                <S.BackBadgeLink to="/program">
                    <S.BackBadgeContent>
                        <S.BackIcon>arrow_back</S.BackIcon>
                        <S.BackText>{t("backButton")}</S.BackText>
                    </S.BackBadgeContent>
                </S.BackBadgeLink>

                <S.MetadataHeader>
                    <S.MainTitle>{t("mainHeading")}</S.MainTitle>

                    <S.PastorMetaRow>
                        <span
                            className="material-symbols-outlined meta-icon"
                            translate="no"
                        >
                            person
                        </span>
                        <strong>{t("pastor")}</strong>
                    </S.PastorMetaRow>

                    <S.DateMetaRow>
                        <span
                            className="material-symbols-outlined meta-icon"
                            translate="no"
                        >
                            calendar_today
                        </span>
                        <span>{formatDate(t(i18n.language))}</span>
                    </S.DateMetaRow>
                </S.MetadataHeader>
            </S.MetadataSection>

            {/* Section: Order of Worship */}
            <S.SectionWrapper>
                <S.SectionHeader>
                    <S.SectionHeaderTitle>
                        <S.SectionSubLabel>{t("liturgy")}</S.SectionSubLabel>
                        <S.SectionMainTitle>
                            {t("mainTitle")}
                        </S.SectionMainTitle>
                    </S.SectionHeaderTitle>
                </S.SectionHeader>

                <S.TimelineContainer>
                    {/* Bienvenida */}
                    <S.TimelineItem>
                        <S.TimelineDot variant="primary" />
                        <S.LiturgyCard>
                            <S.LiturgyMeta>
                                <span>01</span>
                                <S.LiturgyCategory>
                                    Apertura / Welcome
                                </S.LiturgyCategory>
                            </S.LiturgyMeta>
                            <S.LiturgyTitle>
                                {t("welcome.title")}
                            </S.LiturgyTitle>
                            <S.LiturgyText>
                                {t("welcome.subtitle")}
                            </S.LiturgyText>
                        </S.LiturgyCard>
                    </S.TimelineItem>

                    {/* Lectura bíblica */}
                    <S.TimelineItem>
                        <S.TimelineDot />
                        <S.LiturgyCard>
                            <S.LiturgyMeta>
                                <span>02</span>
                                <S.LiturgyCategory>
                                    Palabra / Scripture
                                </S.LiturgyCategory>
                            </S.LiturgyMeta>
                            <S.CardTitleRow>
                                <S.LiturgyTitle>
                                    {t("reading.title")}
                                </S.LiturgyTitle>
                                <S.ScriptureReference>
                                    {t("reading.reference")}
                                </S.ScriptureReference>
                            </S.CardTitleRow>

                            <S.ScriptureBox>
                                {Array.isArray(verses) &&
                                    verses.map(({ n, text }) => (
                                        <p key={n}>
                                            <strong>{n}</strong> {text}
                                        </p>
                                    ))}
                            </S.ScriptureBox>
                        </S.LiturgyCard>
                    </S.TimelineItem>

                    {/* Coros de Alabanza */}
                    <S.TimelineItem>
                        <S.TimelineDot />
                        <S.LiturgyCard>
                            <S.LiturgyMeta>
                                <span>03</span>
                                <S.LiturgyCategory>
                                    Adoración / Praise
                                </S.LiturgyCategory>
                            </S.LiturgyMeta>

                            <S.LiturgyTitle>
                                {t("worship.title1")}
                            </S.LiturgyTitle>

                            <S.SongListGroup>
                                <S.SongRow>
                                    <span
                                        className="material-symbols-outlined meta-icon"
                                        translate="no"
                                    >
                                        music_note
                                    </span>
                                    <strong>«Por Siempre»</strong>
                                    <span className="divider">&amp;</span>
                                    <strong>«Por Fe»</strong>
                                </S.SongRow>
                                <S.GreetingTimeTag>
                                    {t("greeting")}
                                </S.GreetingTimeTag>
                            </S.SongListGroup>
                        </S.LiturgyCard>
                    </S.TimelineItem>

                    {/* Testimonials */}
                    <S.TimelineItem>
                        <S.TimelineDot />
                        <S.LiturgyCard>
                            <S.LiturgyMeta>
                                <span>04</span>
                                <S.LiturgyCategory>
                                    Comunión / Testimonies
                                </S.LiturgyCategory>
                            </S.LiturgyMeta>

                            <S.LiturgyTitle>
                                {t("testimony.title")}
                            </S.LiturgyTitle>
                            <S.LiturgyText>
                                {t("testimony.subtitle")}
                            </S.LiturgyText>
                        </S.LiturgyCard>
                    </S.TimelineItem>

                    {/* Pastoral Prayer */}
                    <S.TimelineItem>
                        <S.TimelineDot variant="secondary" />
                        <S.LiturgyCard>
                            <S.LiturgyMeta>
                                <span>05</span>
                                <S.HighlightBadge>
                                    {t("prayer.intercession")}
                                </S.HighlightBadge>
                            </S.LiturgyMeta>

                            <div>
                                <S.LiturgyTitle>
                                    {t("prayer.title")}
                                </S.LiturgyTitle>
                                <S.LiturgyText style={{ marginTop: "0.25rem" }}>
                                    {t("prayer.subtitle")}
                                </S.LiturgyText>
                            </div>
                        </S.LiturgyCard>
                    </S.TimelineItem>

                    {/* Video */}
                    <S.TimelineItem>
                        <S.TimelineDot />
                        <S.LiturgyCard>
                            <S.LiturgyTitle>Video</S.LiturgyTitle>

                            <S.SongRow>
                                <span
                                    className="material-symbols-outlined meta-icon"
                                    translate="no"
                                >
                                    movie
                                </span>
                                <strong>{t("video")}</strong>
                            </S.SongRow>
                        </S.LiturgyCard>
                    </S.TimelineItem>

                    {/* Coro */}
                    <S.TimelineItem>
                        <S.TimelineDot />
                        <S.LiturgyCard>
                            <S.LiturgyMeta>
                                <span>06</span>
                                <S.LiturgyCategory>
                                    Adoración / Choir
                                </S.LiturgyCategory>
                            </S.LiturgyMeta>

                            <S.LiturgyTitle>
                                {t("worship.title2")}
                            </S.LiturgyTitle>

                            <S.SongRow>
                                <span
                                    className="material-symbols-outlined music-icon"
                                    translate="no"
                                >
                                    music_note
                                </span>
                                <strong>«Señor Mi Redentor y Roca»</strong>
                            </S.SongRow>
                        </S.LiturgyCard>
                    </S.TimelineItem>

                    {/* Offerings & Tithes */}
                    <S.TimelineItem>
                        <S.TimelineDot />
                        <S.LiturgyCard>
                            <S.LiturgyMeta>
                                <span>07</span>
                                <S.LiturgyCategory>
                                    Generosidad / Offering
                                </S.LiturgyCategory>
                            </S.LiturgyMeta>

                            <div>
                                <S.LiturgyTitle>
                                    {t("offering.title")}
                                </S.LiturgyTitle>
                                <S.ScriptureReference
                                    style={{
                                        display: "block",
                                        marginTop: "0.125rem",
                                    }}
                                >
                                    {t("offering.subtitle")}
                                </S.ScriptureReference>
                            </div>

                            <S.ScriptureBox>
                                <p>{t("offering.verses")}</p>
                            </S.ScriptureBox>

                            <S.ReflectionBox>
                                <S.ReflectionTitle>
                                    {t("reflection.title")}
                                </S.ReflectionTitle>

                                <p>{t("reflection.text")}</p>
                            </S.ReflectionBox>

                            <S.NoteBanner>
                                <span
                                    className="material-symbols-outlined"
                                    translate="no"
                                >
                                    info
                                </span>
                                <span>({t("offering.parishioner")})</span>
                            </S.NoteBanner>
                        </S.LiturgyCard>
                    </S.TimelineItem>

                    {/* Song */}
                    <S.TimelineItem>
                        <S.TimelineDot />
                        <S.LiturgyCard>
                            <S.LiturgyMeta>
                                <span>08</span>
                                <S.LiturgyCategory>
                                    Adoración / Choir
                                </S.LiturgyCategory>
                            </S.LiturgyMeta>

                            <S.LiturgyTitle>
                                {t("worship.title2")}
                            </S.LiturgyTitle>

                            <S.SongRow>
                                <span
                                    className="material-symbols-outlined music-icon"
                                    translate="no"
                                >
                                    music_note
                                </span>
                                <strong>«Corre a Cristo»</strong>
                            </S.SongRow>
                        </S.LiturgyCard>
                    </S.TimelineItem>

                    {/* Doxology and pastoral blessing */}
                    <S.TimelineItem>
                        <S.TimelineDot variant="primary" />
                        <S.LiturgyCard>
                            <S.LiturgyMeta>
                                <span>09</span>
                                <S.HighlightBadge variant="primary">
                                    {t("doxology.tag")}
                                </S.HighlightBadge>
                            </S.LiturgyMeta>

                            <div>
                                <S.LiturgyTitle>
                                    {t("doxology.title")}
                                </S.LiturgyTitle>
                                <S.PastorSubText>
                                    {t("doxology.subtitle")}
                                </S.PastorSubText>
                            </div>

                            <S.DoxologyBox>
                                <S.DoxologyTitle>
                                    {t("doxology.titleText")}
                                </S.DoxologyTitle>
                                <blockquote>{t("doxology.text")}</blockquote>
                            </S.DoxologyBox>
                        </S.LiturgyCard>
                    </S.TimelineItem>
                </S.TimelineContainer>
            </S.SectionWrapper>
        </S.BulletinContainer>
    );
};

export default Program;
