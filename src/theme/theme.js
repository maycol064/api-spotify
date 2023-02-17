import { createTheme } from "@mui/material";

export const themeAPISpotify = createTheme({
    palette: {
        primary: {
            main: '#2EBD59',
        },
        background: {
            main: '#121212'
        },
        text: {
            main: '#F0F0F0F0'
        },
        backgroundSecondary: {
            main: '#000000'
        }
    },
    typography: {
        h4: {
            fontFamily: 'Ubuntu',
        },
        button: {
            fontFamily: 'Quicksand',
        },
        body1: {
            fontFamily: 'Quicksand'
        }
    },
});