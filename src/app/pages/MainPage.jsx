import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, LinearProgress, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { getInfoAccount } from '../helpers/getInfoAccount';
import { Navbar } from '../components/Navbar';
import { getFollowArtists } from '../helpers/getFollowArtists';
import { CardArtist } from '../components/CardArtist';
import { getTopTracks } from '../helpers/getTopTrack';

export const MainPage = () => {
    const { hash } = useLocation();
    const token = hash.split('=')[1]

    const [userInfo, setUserInfo] = useState(null);
    const [artistsFollow, setArtistsFollow] = useState(null);
    const [topTracks, setTopTracks] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const infoAccount = await getInfoAccount(token);
            setUserInfo(infoAccount);
            const infoArtists = await getFollowArtists(token);
            setArtistsFollow(infoArtists);
            const topTracks = await getTopTracks(token);
            console.log(topTracks);
            setTopTracks(topTracks);
            setLoading(false);
        }
        getData();
    }, [])


    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh'
            }}
        >
            {
                loading ? (
                    <LinearProgress />
                ) : (
                    <>
                        <Navbar display_name={userInfo.display_name} photoURL={userInfo.photoURL} />
                        <Grid
                            container
                            spacing={2}
                        >
                            {topTracks.map(track => (
                                <Grid
                                    item
                                    key={track.id}
                                >
                                    <CardArtist data={track} />
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )
            }
        </Box>
    )
}
