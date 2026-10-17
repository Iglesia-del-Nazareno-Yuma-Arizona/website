export const theme = {
    colors: {
        surface: "#fdf8f8",
        surfaceDim: "#ddd9d9",
        surfaceBright: "#fdf8f8",
        surfaceContainerLowest: "#ffffff",
        surfaceContainerLow: "#f7f3f2",
        surfaceContainer: "#f1edec",
        surfaceContainerHigh: "#ebe7e7",
        surfaceContainerHighest: "#e5e2e1",
        onSurface: "#1c1b1b",
        onSurfaceVariant: "#46464a",
        inverseSurface: "#313030",
        inverseOnSurface: "#f4f0ef",
        outline: "#77767b",
        outlineVariant: "#c7c6ca",
        surfaceTint: "#5f5e60",
        primary: "#010102",
        onPrimary: "#ffffff",
        primaryContainer: "#1c1c1e",
        onPrimaryContainer: "#858486",
        inversePrimary: "#c8c6c8",
        secondary: "#715b26",
        onSecondary: "#ffffff",
        secondaryContainer: "#fbdc9a",
        onSecondaryContainer: "#76602a",
        tertiary: "#010100",
        onTertiary: "#ffffff",
        tertiaryContainer: "#1f1b1a",
        onTertiaryContainer: "#8a8381",
        error: "#ba1a1a",
        onError: "#ffffff",
        errorContainer: "#ffdad6",
        onErrorContainer: "#93000a",
        primaryFixed: "#e4e2e4",
        primaryFixedDim: "#c8c6c8",
        onPrimaryFixed: "#1b1b1d",
        onPrimaryFixedVariant: "#474649",
        secondaryFixed: "#fedf9d",
        secondaryFixedDim: "#e0c383",
        onSecondaryFixed: "#251a00",
        onSecondaryFixedVariant: "#584410",
        tertiaryFixed: "#eae0de",
        tertiaryFixedDim: "#cdc5c3",
        onTertiaryFixed: "#1f1b1a",
        onTertiaryFixedVariant: "#4b4644",
        background: "#fdf8f8",
        onBackground: "#1c1b1b",
        surfaceVariant: "#e5e2e1",
        canvasPure: "#FFFFFF",
        canvasStone: "#FBFBF9",
        surfaceMuted: "#F4F4F2",
        textPrimary: "#1C1C1E",
        textMuted: "#6E6E73",
        borderHairline: "#E5E5EA",
        goldWarm: "#AA9055",
        goldSoft: "#F6F3EB",
    },

    borderRadius: {
        default: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
    },

    font: {
        inter: "'Inter', sans-serif",
    },
};

export type ThemeType = typeof theme;

/* Helper functions to keep DRY: avoid writing ${( theme ) => theme.bla.bla}; */

/*
  Use it like this:

  max-width: ${borderRadius("default")};
 */

// Colors:

export const color =
    (key: keyof ThemeType["colors"], alpha: string = "") =>
    ({ theme }: { theme: ThemeType }) =>
        `${theme.colors[key]}${alpha}`;

// Border Radius:

export const borderRadius =
    (key: keyof ThemeType["borderRadius"]) =>
    ({ theme }: { theme: ThemeType }) =>
        theme.borderRadius[key];

// Fonts:

export const font =
    (key: keyof ThemeType["font"]) =>
    ({ theme }: { theme: ThemeType }) =>
        theme.font[key];
