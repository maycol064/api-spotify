import { createTheme } from "@mui/material";

export const themeAPISpotify = createTheme({
    palette: {
        primary: {
            main: '#81b71a',
        },
        secondary: {
            main: '#121212'
        },
        text: {
            main: '#F0F0F0F0'
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