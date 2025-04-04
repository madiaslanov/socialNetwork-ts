export interface Artist {
    id: number;
    name: string;
    genres?: string[];
    images?: { url: string }[];
    followers?: { total: number };
}

export interface Track {
    id: string;
    name: string;
    duration_ms: number;
    preview_url: string | null;
}

export interface Album {
    id: string;
    name: string;
    release_date: string;
    images: { url: string }[];
}

export interface MusicState {
    artistData: Artist | null;
    error: string | null;
    artistsData: Artist[];
    tracks: Track[] | null;
    trackId: string | null;
    currentPage: number;
    pageSize: number;
    artistsTotalCount: number | null;
    albums: Album[] | null;
    albumId: string | null;
}


export const GET_ARTIST_SUCCESS = 'GET_ARTIST_SUCCESS';
export const GET_MUSIC_FAILURE = 'GET_MUSIC_FAILURE';
export const GET_ARTISTS_SUCCESS = 'GET_ARTISTS_SUCCESS';
export const GET_TRACK_SUCCESS = 'GET_TRACK_SUCCESS';
export const GET_ARTIST_TOP_TRACKS = 'GET_ARTIST_TOP_TRACKS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_ARTIST_PAGE_SIZE = 'SET_ARTIST_PAGE_SIZE';
export const SET_ARTISTS_TOTAL_COUNT = 'SET_ARTISTS_TOTAL_COUNT';
export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS';
export const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS';


type GetArtistSuccessAction = { type: typeof GET_ARTIST_SUCCESS, payload: Artist };
type GetArtistsSuccessAction = { type: typeof GET_ARTISTS_SUCCESS, payload: Artist[] };
type GetArtistTopTracksAction = { type: typeof GET_ARTIST_TOP_TRACKS, payload: Track[] };
type GetTrackSuccessAction = { type: typeof GET_TRACK_SUCCESS, payload: string };
type GetAlbumsSuccessAction = { type: typeof GET_ALBUMS_SUCCESS, payload: Album[] };
type GetAlbumSuccessAction = { type: typeof GET_ALBUM_SUCCESS, payload: string };
type GetMusicFailureAction = { type: typeof GET_MUSIC_FAILURE, payload: string };
type SetCurrentPageAction = { type: typeof SET_CURRENT_PAGE, payload: number };
type SetArtistPageSizeAction = { type: typeof SET_ARTIST_PAGE_SIZE, payload: number };
type SetArtistsTotalCountAction = { type: typeof SET_ARTISTS_TOTAL_COUNT, payload: number };

export type MusicActionTypes =
    | GetArtistSuccessAction
    | GetArtistsSuccessAction
    | GetArtistTopTracksAction
    | GetTrackSuccessAction
    | GetAlbumsSuccessAction
    | GetAlbumSuccessAction
    | GetMusicFailureAction
    | SetCurrentPageAction
    | SetArtistPageSizeAction
    | SetArtistsTotalCountAction;
