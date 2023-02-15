import SpotifyWebApi from 'spotify-web-api-js';

const apiSpotify = new SpotifyWebApi();

export const getInfoAccount = async (token) => {
    apiSpotify.setAccessToken(token);
    const { display_name, images  } = await apiSpotify.getMe();
    return {
        display_name,
        photoURL: images[0].url
    }
}