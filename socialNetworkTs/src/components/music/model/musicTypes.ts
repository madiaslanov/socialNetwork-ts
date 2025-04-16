export interface Artist {
    id: number;
    name: string;
    type: string;
    genres?: string[];
    images?: { url: string }[];
    followers?: { total: number };
    external_urls: {
        spotify: string;
    };
}

export interface Track {
    id: string;
    name: string;
    duration_ms: number;
    preview_url: string | null;
    album: Album | null;
}

export interface Album {
    id: string;
    name: string;
    release_date: string;
    images: { url: string }[] | null;
    external_urls: {
        spotify: string;
    };
    popularity: number | null;
    total_tracks: number | null;
    artists: {
        name: string | null;
    }[];
    copyrights: {
        text: string | null;
    }[];
    tracks: {
        items: Track[] | null;
    };
}

export interface MusicState {
    artistData: Artist | null;
    error: string | null;
    artistsData: Artist[];
    tracks: Track[] | null;
    trackId: TrackType | null;
    albums: Album[] | null;
    albumId: Album | null;
    token: string | null;
}

export type UseParamType = {
    id: string | undefined;
    userID: string | undefined;
}

export interface TrackType {
    id: string;
    name: string;
    popularity: number;
    album: {
        id: string;
        name: string;
        images: { url: string }[];
    };
    external_urls: {
        spotify: string;
    };
    duration_ms?: number;
    preview_url?: string | null;
}
