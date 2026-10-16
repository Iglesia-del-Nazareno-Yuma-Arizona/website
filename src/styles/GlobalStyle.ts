import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
    scroll-behavior: smooth;
}

#root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

main {
    width: 100%;
    overflow-x: hidden;
    flex: 1;
}

a {
    text-decoration: none;
}

body {
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    min-width: 100vw;
    min-height: 100vh;
}
`;
