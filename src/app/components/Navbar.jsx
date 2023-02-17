import React, { useState } from 'react'
import { AppBar, Avatar, Box, Button, Container, Divider, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { AccountCircle, ArrowDropDown, ArrowDropUp, Logout, LogoutOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export const Navbar = ({ display_name, photoURL }) => {
    const [openMenu, setOpenMenu] = useState(null);

    const onOpenMenu = (event) => setOpenMenu(event.currentTarget);
    const onCloseMenu = () => setOpenMenu(null);
    const open = Boolean(openMenu);

    return (
        <AppBar
            position='sticky'
            sx={{
                width: 'calc(100% - 240px)',
                marginLeft: '240px',
            }}
        >
            <Container maxWidth='xxl' sx={{ backgroundColor: 'background.main' }}>
                <Toolbar
                    disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        backgroundColor: 'background.main',
                    }}
                variant='dense'
                >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: 3,
                    }}
                >
                    <Button
                        variant='outlined'
                        sx={{
                            textTransform: 'none',
                            padding: 0,
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 1,
                            borderRadius: 40,
                            borderColor: 'text.main',
                            color: 'text.main'
                        }}
                        onClick={onOpenMenu}
                    >
                        <Avatar alt={display_name} src={photoURL} sx={{ width: 32, height: 32 }} />
                        {display_name}
                        {open
                            ? <ArrowDropUp sx={{ '&:hover': { color: 'primary.main' } }} />
                            : <ArrowDropDown sx={{ '&:hover': { color: 'primary.main' } }} />
                        }
                    </Button>
                    <Menu
                        anchorEl={openMenu}
                        open={open}
                        onClose={onCloseMenu}
                        onClick={onCloseMenu}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'primary.main',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                                backgroundColor: 'primary.main',
                                color: 'text.main'
                            },
                        }}
                        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                    >
                        <MenuItem sx={{ display: 'flex', gap: 3 }}>
                            <AccountCircle /> Cuenta
                        </MenuItem>
                        <Divider sx={{ backgroundColor: 'text.main' }} variant='middle' />
                        <MenuItem sx={{ display: 'flex', gap: 3 }}>
                            <LogoutOutlined /> Salir
                        </MenuItem>

                    </Menu>
                </Box>
            </Toolbar>
        </Container>
        </AppBar >
    )
}
