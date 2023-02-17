import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, LinearProgress, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import Cookies from 'js-cookie';
import { getInfoAccount } from '../helpers/getInfoAccount';
import { Navbar } from '../components/Navbar';
import { getFollowArtists } from '../helpers/getFollowArtists';
import { CardArtist } from '../components/CardArtist';
import { getTopTracks } from '../helpers/getTopTrack';
import { DrawerBar } from '../components/DrawerBar';

export const MainPage = () => {
    const token = Cookies.get('spotifyAuthToken');
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const infoAccount = await getInfoAccount(token);
            setUserInfo(infoAccount);
            setLoading(false);
        }
        getData();
    }, [])


    return (
        <>
            {
                !loading && (
                    <Box
                        sx={{
                            width: '100%',
                            height: '100vh',
                            backgroundColor: 'background.main'
                        }}
                    >
                        <Navbar display_name={userInfo.display_name} photoURL={userInfo.photoURL} />
                        <DrawerBar />
                    </Box>
                )
            }
        </>
    )
}
