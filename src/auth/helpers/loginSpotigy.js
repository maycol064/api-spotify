import SpotifyWebApi from 'spotify-web-api-js';

export const loginSpotify = () => {
    const spotifyApi = new SpotifyWebApi();
    const clientId = '8ecd0091796a4b82af44e2a81d625cb3';
    const clientSecret = '0e9c928dc7744224988e6a1f043011ff';
    console.log({ clientId, clientSecret });

    const exchangeCodeForToken = () => {

    }
}