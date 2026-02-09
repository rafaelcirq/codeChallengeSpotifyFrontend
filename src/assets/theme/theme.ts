import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Palette {
        custom: Palette['primary'];
    }
    interface PaletteOptions {
        custom?: PaletteOptions['primary'];
    }
}

const theme = createTheme({
    palette: {
        background: {
            default: "#290a50",
            paper: "#1e073c",
        },
        primary: {
            main: "#CBF55C",
            contrastText: "#20260e",
        },
        text: {
            primary: "#d8a3ff",
            secondary: "#d8a3ff",
            disabled: "#25113c",
        },
        divider: "#738a36",
        action: {
            disabled: "#1f0a39",
            disabledBackground: "#5a5154",
        },
    },
});

export default theme;