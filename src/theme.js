import { createTheme } from "@mui/material/styles";

export const shades = {
    blue: {
        100: "#cce0ef",
        200: "#99c2e0",
        300: "#66a3d0",
        400: "#3385c1",
        500: "#0066b1",
        600: "#00528e",
        700: "#003d6a",
        800: "#002947",
        900: "#001423"
    }, 
    black: {
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000"
    }, 
    lilac: {
        100: "#e8ccff",
        200: "#d199ff",
        300: "#b966ff",
        400: "#a233ff",
        500: "#8b00ff",
        600: "#6f00cc",
        700: "#530099",
        800: "#380066",
        900: "#1c0033"
    },
    neutral: {
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#ffffff",
        600: "#cccccc",
        700: "#999999",
        800: "#666666",
        900: "#333333"
    },
};

export const theme = createTheme({
    palette: {
      primary: {
        main: shades.blue[500],
      },
      secondary: {
        main: shades.lilac[500],
      },
      neutral: {
        dark: shades.neutral[900],
        main: shades.neutral[600],
        light: shades.neutral[100],
      },
    },
    typography: {
      fontFamily: ["Atenea", "sans-serif"].join(","),
      fontSize: 11,
      h1: {
        fontFamily: ["Atenea", "sans-serif"].join(","),
        fontSize: 48,
      },
      h2: {
        fontFamily: ["Atenea", "sans-serif"].join(","),
        fontSize: 36,
      },
      h3: {
        fontFamily: ["Atenea", "sans-serif"].join(","),
        fontSize: 20,
      },
      h4: {
        fontFamily: ["Atenea", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  });