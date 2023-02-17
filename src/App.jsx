import React, { useState } from 'react';
import { MainRouter } from "./router/MainRouter"
import { AppTheme } from "./theme/AppTheme"
import { SpotifyApiContext } from 'react-spotify-api';
import Cookies from 'js-cookie';
import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import 'react-spotify-auth/dist/index.css';
import { themeAPISpotify } from './theme/theme';

const App = () => {
    const [token, setToken] = useState(Cookies.get('spotifyAuthToken'));
    return (
        <div>
            {token ? (
                <SpotifyApiContext.Provider token={token} value={token}>
                    <AppTheme theme={themeAPISpotify}>
                        <MainRouter />
                    </AppTheme>
                </SpotifyApiContext.Provider>
            ) : (
                <SpotifyAuth
                    redirectUri="http://localhost:5173"
                    clientID="8ecd0091796a4b82af44e2a81d625cb3"
                    scopes={[
                        'user-read-private',
                        'user-read-email',
                        'playlist-read-private',
                        'playlist-read-collaborative',
                        'user-follow-read',
                        'user-top-read',
                    ]}
                    onAccessToken={(token) => setToken(token)}
                />
            )}
        </div>
    )
}

export default App
