import axios from "axios";

export const musicApi = {
    getSpotifyToken: async () => {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            params: {
                grant_type: 'client_credentials',
                client_id: '54c1b7b68cef4dd4ba889c14ef4c4e8c',
                client_secret: '7403a04689ac46389007e7a0a3575d6a',
            }
        });
        return response.data.access_token;
    },

    getArtist: async (artistId: string, token: string) => {
        const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    },
    getArtists: async (token: string) => {
        const response = await axios.get('https://api.spotify.com/v1/search', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                q: 'artist',
                type: 'artist',
                limit: 50,
                offset: 50
            }
        });
        return response.data.artists.items;
    },
    getArtistTopTracks: async (artistId: string, token: string) => {
        const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    },
    getTrack: async (trackId: string, token: string) => {
        const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    },
    getAlbums: async (token: string) => {
        const response = await axios.get(`https://api.spotify.com/v1/search`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                q: 'album',
                type: 'album',
                limit: 20,
            }
        })
        return response.data;
    },
    getAlbum: async (albumId: string, token: string) => {
        const response = await axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        return response.data;
    }
};