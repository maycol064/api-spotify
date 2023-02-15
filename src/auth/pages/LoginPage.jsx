import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import SpotifyWebApi from 'spotify-web-api-js';
// import { loginSpotify } from '../helpers/loginSpotigy';

export const LoginPage = () => {
    const spotifyApi = new SpotifyWebApi();
    const clientId = '8ecd0091796a4b82af44e2a81d625cb3';
    const clientSecret = '0e9c928dc7744224988e6a1f043011ff';
    const redirectUri = 'http://localhost:5173/';
    const scopes = [
        'user-read-private',
        'user-read-email',
        'playlist-read-private',
        'playlist-read-collaborative',
        'user-follow-read',
        'user-top-read'
    ];

    const clickButton = () => {
        const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(" ")}&response_type=token&show_dialog=true`;
        window.location.href = url;
    }

    return (
        <Box
            sx={{
                backgroundColor: 'secondary.main',
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <Typography
                sx={{ color: 'text.main' }}
                variant='h4'
                component='div'
            >
                The Spotify API
            </Typography>
            <Button
                variant='contained'
                sx={{
                    mt: 5,
                    textTransform: 'none',
                    width: '30%'
                }}
                onClick={clickButton}
            >
                Iniciar sesión con Spotify
            </Button>
        </Box>
    );
}