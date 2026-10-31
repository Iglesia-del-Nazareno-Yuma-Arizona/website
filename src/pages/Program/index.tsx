import { formatDate } from "../../utils/date";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import type { Verse } from "./components/BibleReading";
import BibleReading from "./components/BibleReading";
import ProgramItem from "./components/ProgramItem";
import Song from "./components/Song";
import Offering from "./components/Offering";
import Doxology from "./components/Doxology";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import Special from "./components/Special";
import Miscellaneous from "./components/Miscellaneous";

const Program = () => {
    useDocumentTitle("Programa - Orden del Culto");
    const { t, i18n } = useTranslation("program");

    const verses = t("reading.verses", { returnObjects: true }) as Verse[];

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
                    <ProgramItem
                        dot="primary"
                        number="01"
                        category="apertura / welcome"
                        title={t("welcome.title")}
                        text={t("welcome.subtitle")}
                    />

                    {/* Bible Reading */}
                    <BibleReading
                        number="02"
                        title={t("reading.title")}
                        reference={t("reading.reference")}
                        verses={verses}
                    />

                    {/* Coros de Alabanza */}
                    <Song
                        number="03"
                        label={t("worship.title1")}
                        titles={["Hay Libertad", "Hay Poder"]}
                        note={t("greeting")}
                    />

                    {/* Testimonials */}
                    <ProgramItem
                        number="04"
                        category="Comunión / Testimonies"
                        title={t("testimony.title")}
                        text={t("testimony.subtitle")}
                    />

                    {/* Pastoral Prayer */}
                    <ProgramItem
                        dot="secondary"
                        number="05"
                        badge={t("prayer.intercession")}
                        title={t("prayer.title")}
                        text={t("prayer.subtitle")}
                    />

                    {/* Offerings & Tithes */}
                    <Offering
                        number="06"
                        title={t("offering.title")}
                        reference={t("offering.subtitle")}
                        verses={t("offering.verses")}
                        reflectionTitle={t("reflection.title")}
                        text={t("reflection.text")}
                    />

                    {/* Song */}
                    <Song
                        number="07"
                        label={t("worship.title1")}
                        titles={[
                            "Castillo fuerte  es nuestro Dios",
                            "Dame a Cristo",
                        ]}
                    />

                    {/* Doxology and pastoral blessing */}
                    <Doxology
                        number="08"
                        badgeVariant="primary"
                        badge="mensaje / sermon"
                        title={t("doxology.title")}
                        subtitle={t("doxology.subtitle")}
                    />

                    <Special
                        number="9"
                        title={t("communion.title")}
                        doxologySubtitle={t("communion.scriptureReference")}
                        verses={t("communion.verses")}
                    />

                    <Miscellaneous
                        dot="primary"
                        number="10"
                        category="actualizaciones / updates"
                        icon="campaign"
                        title={t("announcements.title")}
                        text={t("announcements.text")}
                    />
                </S.TimelineContainer>
            </S.SectionWrapper>
        </S.BulletinContainer>
    );
};

export default Program;
