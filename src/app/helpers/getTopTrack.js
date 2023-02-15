import SpotifyWebApi from 'spotify-web-api-js';

const apiSpotify = new SpotifyWebApi();

export const getTopTracks = async (token) => {
    apiSpotify.setAccessToken(token);
    const { items } = await apiSpotify.getMyTopTracks();
    return items;
}