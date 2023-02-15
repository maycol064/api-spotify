import { AppBar, Avatar, Box, Typography } from '@mui/material'
import React from 'react'

export const Navbar = ({ display_name, photoURL }) => {
    return (
        <AppBar position='sticky'>
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: 'secondary.main',
                    padding: 2,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Typography
                    variant='h4'
                    component='div'
                    sx={{
                        color: 'text.main'
                    }}
                >
                    The Spotify API
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: 3
                    }}
                >
                    <Typography
                        variant='h5'
                        component='div'
                        sx={{
                            color: 'text.main'
                        }}
                    >
                        {display_name}
                    </Typography>
                    <Avatar alt={display_name} src={photoURL} />
                </Box>
            </Box>
        </AppBar>
    )
}
