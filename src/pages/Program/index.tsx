import { formatDate } from "../../utils/date";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import type { Verse } from "./components/BibleReading";
import type { Paragraph } from "./components/Offering";
import BibleReading from "./components/BibleReading";
import ProgramItem from "./components/ProgramItem";
import Song from "./components/Song";
import Offering from "./components/Offering";
import Doxology from "./components/Doxology";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import Miscellaneous from "./components/Miscellaneous";
import { songs } from "./translation";

const Program = () => {
    useDocumentTitle("Programa - Orden del Culto");
    const { t, i18n } = useTranslation("program");

    const has = (key: string) => i18n.exists(key, { ns: "program" });

    let count = 0;
    const next = () => String(++count).padStart(2, "0");

    const verses = t("reading.verses", { returnObjects: true }) as Verse[];
    const paragraphs = t("reflection.paragraphs", {
        returnObjects: true,
    }) as Paragraph[];

    return (
        <S.BulletinContainer className="reveal reveal-up">
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
                        <span>{formatDate(i18n.language)}</span>
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
                    <ProgramItem
                        dot="primary"
                        number={next()}
                        category="apertura / welcome"
                        title={t("welcome.title")}
                        text={t("welcome.subtitle")}
                    />

                    {/* Bible Reading */}
                    <BibleReading
                        number={next()}
                        title={t("reading.title")}
                        reference={t("reading.reference")}
                        verses={verses}
                    />

                    {/* Coros de Alabanza */}
                    <Song
                        number={next()}
                        label={t("worship.title1")}
                        titles={songs.first}
                        note={t("greeting")}
                    />

                    {/* Testimonials */}
                    <ProgramItem
                        number={next()}
                        category="Comunión / Testimonies"
                        title={t("testimony.title")}
                        text={t("testimony.subtitle")}
                    />

                    {/* Pastoral Prayer */}
                    <ProgramItem
                        dot="secondary"
                        number={next()}
                        badge={t("prayer.intercession")}
                        title={t("prayer.title")}
                        text={t("prayer.subtitle")}
                    />

                    {/* Offerings & Tithes */}
                    <Offering
                        number={next()}
                        title={t("offering.title")}
                        reference={t("offering.subtitle")}
                        verses={t("offering.verses")}
                        reflectionTitle={t("reflection.title")}
                        paragraphs={paragraphs}
                    />

                    {/* Song */}
                    <Song
                        number={next()}
                        label={t("worship.title1")}
                        titles={songs.second}
                    />

                    {/* Doxology and pastoral blessing */}
                    <Doxology
                        number={next()}
                        badgeVariant="primary"
                        badge="mensaje / sermon"
                        title={t("doxology.title")}
                        subtitle={t("doxology.subtitle")}
                        textTitle={t("doxology.titleText")}
                        text={t("doxology.text")}
                    />

                    {has("announcements.title") && (
                        <Miscellaneous
                            dot="primary"
                            number={next()}
                            category="actualizaciones / updates"
                            icon="campaign"
                            title={t("announcements.title")}
                            text={t("announcements.text")}
                        />
                    )}
                </S.TimelineContainer>
            </S.SectionWrapper>
        </S.BulletinContainer>
    );
};

export default Program;
