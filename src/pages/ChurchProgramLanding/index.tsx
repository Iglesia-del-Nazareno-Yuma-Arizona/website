import * as S from "./styles";

const ChurchProgramLanding = () => {
    // Get date for now
    const date = new Date("2026-10-11T12:00:00");

    /* Format date to Spanish, weekday, day, and month */
    const formattedDate = date.toLocaleDateString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "short",
    });

    /* Capitalize the first letter (spanish has lowercase for months by default) */
    // Result Domingo, 11 oct
    const dateString =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};

export default ChurchProgramLanding;
