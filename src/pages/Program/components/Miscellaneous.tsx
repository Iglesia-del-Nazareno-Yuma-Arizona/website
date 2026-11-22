import * as S from "../styles";
import LiturgyItem from "./LiturgyItem";
import type { Dot } from "./LiturgyItem";

// Icons for announcements
import celebration from "../../../assets/celebration.svg";
import groups1 from "../../../assets/groups(men).svg";
import groups2 from "../../../assets/groups(women).svg";

const ICONS: Record<string, string> = {
    celebration,
    groups1,
    groups2,
};

export type Announcement = {
    id: number;
    icon: string;
    leadBold: string;
    leadText: string;
    details: string;
};

type MiscellaneousProps = {
    dot?: Dot; // For the timeline dot
    number?: string;
    category?: string;
    icon?: string;
    title?: string;
    subtext?: string;
    items?: Announcement[];
};

const Miscellaneous = ({
    dot,
    number,
    category,
    icon,
    title,
    subtext,
    items,
}: MiscellaneousProps) => (
    <LiturgyItem dot={dot} number={number} category={category}>
        <S.LiturgyTitle>{title}</S.LiturgyTitle>
        <S.DivRow>
            <span
                className="material-symbols-outlined meta-icon"
                translate="no"
            >
                {icon}
            </span>

            <S.MiscellaneousSubheader>{subtext}</S.MiscellaneousSubheader>
        </S.DivRow>
        {items && (
            <S.AnnouncementsList>
                {items.map((item, i) => (
                    <S.AnnouncementsRow key={item.id} $hasDivider={i > 0}>
                        <S.AnnouncementIcon
                            src={ICONS[item.icon] ?? celebration}
                            alt=""
                        />
                        <S.AnnouncementBody>
                            <S.AnnouncementLead>
                                <strong>{item.leadBold}</strong> {item.leadText}
                            </S.AnnouncementLead>
                            <S.AnnouncementDetails>
                                {item.details}
                            </S.AnnouncementDetails>
                        </S.AnnouncementBody>
                    </S.AnnouncementsRow>
                ))}
            </S.AnnouncementsList>
        )}
    </LiturgyItem>
);

export default Miscellaneous;

/* And this can be used in the following way o
 *
 * 
    <Miscellaneous
     icon="movie"
     title="Video"
     text={t("video")}
    />
*/
