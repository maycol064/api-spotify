import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { themeAPISpotify } from './theme'

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={themeAPISpotify}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}