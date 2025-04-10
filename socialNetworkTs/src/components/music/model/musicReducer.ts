import {
    Album,
    Artist, MusicState, Track
} from "./musicTypes.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {musicApi} from "../api";

const initialState: MusicState = {
    artistData: null,
    error: null,
    artistsData: [],
    tracks: [],
    trackId: null,
    albums: [],
    albumId: null,
    token: null
};


export const getArtist = createAsyncThunk<
    Artist,
    string,
    { rejectValue: string }
>(
    "music/getArtist",
    async (artistId, {rejectWithValue}) => {
        try {
            const token = await musicApi.getSpotifyToken();
            const data = await musicApi.getArtist(artistId, token);
            return data;
        } catch (err: any) {
            console.error("Error fetching artist:", err);
            return rejectWithValue("Failed to fetch artist");
        }
    }
);

export const getArtists = createAsyncThunk<
    Artist[],
    undefined,
    { rejectValue: string }
>(
    "music/getArtists",
    async (_, {rejectWithValue}) => {
        try {
            const token = await musicApi.getSpotifyToken();
            const data = await musicApi.getArtists(token);
            return data;
        } catch (err: any) {
            return rejectWithValue("Failed to fetch artists");
        }
    }
);
export const getArtistTopTracks = createAsyncThunk<Track[], string, { rejectValue: string }>(
    "music/getArtistTopTracks",
    async (artistId, {rejectWithValue}) => {
        try {
            const token = await musicApi.getSpotifyToken();
            const data = await musicApi.getArtistTopTracks(artistId, token);
            return data;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }

    }
);
export const getTrack = createAsyncThunk<Track, string, { rejectValue: string }>(
    "music/getTrack",
    async (trackId, {rejectWithValue}) => {
        try {
            const token = await musicApi.getSpotifyToken();
            const data = await musicApi.getTrack(trackId, token);
            return data;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
)

export const getAlbums = createAsyncThunk<Album[], undefined, { rejectValue: string }>(
    "music/getAlbums",
    async (_, {rejectWithValue}) => {
        try {
            const token = await musicApi.getSpotifyToken()
            const data = await musicApi.getAlbums(token);
            return data;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
)
export const getAlbum = createAsyncThunk<Album, string, { rejectValue: string }>(
    "music/getAlbum",
    async (albumId, {rejectWithValue}) => {
        try {
            const token = await musicApi.getSpotifyToken();
            const data = await musicApi.getAlbum(albumId, token);
            return data;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
)

const musicSlice = createSlice({
    name: "music",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArtist.fulfilled, (state, action) => {
                state.artistData = action.payload;
            })
            .addCase(getArtists.fulfilled, (state, action) => {
                state.artistsData = action.payload;
            })
            .addCase(getTrack.fulfilled, (state, action) => {
                state.trackId = action.payload.id;
            })
            .addCase(getAlbums.fulfilled, (state, action) => {
                state.albums = action.payload;
            })
            .addCase(getArtistTopTracks.fulfilled, (state, action) => {
                state.tracks = action.payload;
            })
            .addCase(getAlbum.fulfilled, (state, action) => {
                state.albumId = action.payload.id;
            })
            .addMatcher(
                (action) => action.type.startsWith('music/') && action.type.endsWith('/rejected'),
                (state, action: any) => {
                    state.error = action.payload ?? "Unknown error";
                }
            );
    }


})

export default musicSlice.reducer;