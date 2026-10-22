import { css } from "styled-components";

export const divRow = css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: calc(1rem - (sibling-count() * 0.1rem));
`;
