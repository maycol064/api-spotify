import React from 'react'
import { Drawer, ImageListItem, List, ListItem, ListItemButton, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'
import LogoSpotify from '../../assets/spotify-1.svg'
import { DonutLargeRounded, Home, HomeRounded, TrendingUpRounded } from '@mui/icons-material'

export const DrawerBar = () => {
    const theme = useTheme()
    const match = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = useState(match);

    const onClose = () => setOpen(!open);

    return (
        <Drawer
            sx={{
                width: '240px',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '240px',
                    boxSizing: 'border-box',
                    backgroundColor: 'backgroundSecondary.main'
                },
                backgroundColor: 'backgroundSecondary.main',
                display: 'flex',
                flexDirection: 'column'
            }}
            variant="permanent"
            anchor="left"
        >

            <ImageListItem
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 3
                }}
            >
                <img src={LogoSpotify} style={{ width: '70%' }} />
            </ImageListItem>
            <List
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    mt: 3
                }}
            >
                <ListItemButton
                    sx={{
                        color: 'text.main',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 3,
                        fontSize: '1.2rem'
                    }}
                >
                    <HomeRounded /> Inicio
                </ListItemButton>
                <ListItemButton
                    sx={{
                        color: 'text.main',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 3,
                        fontSize: '1.2rem'
                    }}
                >
                    <TrendingUpRounded /> Top
                </ListItemButton>
                <ListItemButton
                    sx={{
                        color: 'text.main',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 3,
                        fontSize: '1.2rem'
                    }}
                >
                    <DonutLargeRounded /> Estadísticas
                </ListItemButton>
            </List>
        </Drawer>
    )
}
