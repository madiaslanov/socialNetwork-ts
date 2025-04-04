import {
    GET_ALBUM_SUCCESS,
    GET_ALBUMS_SUCCESS,
    GET_ARTIST_SUCCESS, GET_ARTIST_TOP_TRACKS,
    GET_ARTISTS_SUCCESS,
    GET_MUSIC_FAILURE, GET_TRACK_SUCCESS,
    MusicActionTypes, MusicState, SET_ARTIST_PAGE_SIZE, SET_ARTISTS_TOTAL_COUNT, SET_CURRENT_PAGE
} from "./musicTypes.ts";

const initialState: MusicState = {
    artistData: null,
    error: null,
    artistsData: [],
    tracks: [],
    trackId: null,
    currentPage: 1,
    pageSize: 0,
    artistsTotalCount: null,
    albums: [],
    albumId: null,
};


const musicReducer = (state = initialState, action: MusicActionTypes): MusicState => {
    switch (action.type) {
        case GET_ARTIST_SUCCESS:
            return {
                ...state,
                artistData: action.payload,
                error: null,
            };
        case GET_MUSIC_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case GET_ARTISTS_SUCCESS:
            return {
                ...state,
                artistsData: action.payload,
            };
        case GET_ARTIST_TOP_TRACKS:
            return {
                ...state,
                tracks: action.payload,
            };
        case GET_TRACK_SUCCESS:
            return {
                ...state,
                trackId: action.payload,
            };
        case SET_ARTIST_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.payload,
            };
        case SET_ARTISTS_TOTAL_COUNT:
            return {
                ...state,
                artistsTotalCount: action.payload,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            }
        case GET_ALBUMS_SUCCESS:
            return {
                ...state,
                albums: action.payload,
            }
        case GET_ALBUM_SUCCESS:
            return {
                ...state,
                albumId: action.payload,
            }
        default:
            return state;
    }
};

export default musicReducer;
