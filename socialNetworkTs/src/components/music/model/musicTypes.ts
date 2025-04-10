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
    albums: Album[] | null;
    albumId: string | null;
    token: string | null;
}
