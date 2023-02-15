import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const CardArtist = ({ data }) => {
    return (
        <Card sx={{ maxWidth: 120 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={data.album.images[2].height}
                    image={data.album.images[2].url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        { data.name } - { data.artists[0].name }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
