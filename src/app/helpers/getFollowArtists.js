import SpotifyWebApi from 'spotify-web-api-js';

const apiSpotify = new SpotifyWebApi();

export const getFollowArtists = async (token) => {
    apiSpotify.setAccessToken(token);
    const { artists } = await apiSpotify.getFollowedArtists();
    return artists;
}