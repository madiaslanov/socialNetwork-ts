import {
    Album,
    Artist, GET_ALBUM_SUCCESS, GET_ALBUMS_SUCCESS,
    GET_ARTIST_SUCCESS,
    GET_ARTIST_TOP_TRACKS,
    GET_ARTISTS_SUCCESS, GET_MUSIC_FAILURE,
    GET_TRACK_SUCCESS, SET_ARTIST_PAGE_SIZE, SET_ARTISTS_TOTAL_COUNT, SET_CURRENT_PAGE,
    Track
} from "./musicTypes.ts";

export interface GetArtistSuccessAction {
    type: typeof GET_ARTIST_SUCCESS;
    payload: Artist;
}

export interface GetArtistsSuccessAction {
    type: typeof GET_ARTISTS_SUCCESS;
    payload: Artist[];
}

export interface GetArtistTopTracksAction {
    type: typeof GET_ARTIST_TOP_TRACKS;
    payload: Track[];
}

export interface GetTrackSuccessAction {
    type: typeof GET_TRACK_SUCCESS;
    payload: string;
}

export interface GetAlbumsSuccessAction {
    type: typeof GET_ALBUMS_SUCCESS;
    payload: Album[];
}

export interface GetAlbumSuccessAction {
    type: typeof GET_ALBUM_SUCCESS;
    payload: string;
}

export interface GetMusicFailureAction {
    type: typeof GET_MUSIC_FAILURE;
    payload: string;
}

export interface SetCurrentPageAction {
    type: typeof SET_CURRENT_PAGE;
    payload: number;
}

export interface SetArtistPageSizeAction {
    type: typeof SET_ARTIST_PAGE_SIZE;
    payload: number;
}

export interface SetArtistsTotalCountAction {
    type: typeof SET_ARTISTS_TOTAL_COUNT;
    payload: number;
}
