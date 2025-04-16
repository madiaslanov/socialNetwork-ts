import  { useEffect } from "react";
import styles from "./artist.module.css";
import { NavLink, useParams } from "react-router-dom";
import ArtistNotFound from "../artistNotFound.js";
import {UseAppDispatch, UseAppSelector} from "../../../../../services/reactHooks/reactHooks.ts";
import {UseParamType} from "../../../model/musicTypes.ts";
import {getArtist, getArtistTopTracks} from "../../../model/musicReducer.ts";
import Preloader from "../../../../../features/preloader/preloader.tsx";

const Artist = () => {
    const dispatch = UseAppDispatch();
    const artistData = UseAppSelector((state) => state.musicPages.artistData);
    const { id } = useParams<UseParamType>();
    const tracksData = UseAppSelector((state) => state.musicPages.tracks);

    useEffect(() => {
        if (id != null) {
            dispatch(getArtist(id));
            dispatch(getArtistTopTracks(id));
        }
    }, [dispatch, id]);

    const handleClick = () => {
        if (artistData?.external_urls?.spotify) {
            window.open(artistData.external_urls.spotify);
        } else {
            alert('Spotify link not available.');
        }
    };

    if (!artistData || !tracksData) {
        return <Preloader />;
    }

    if (!artistData.images || artistData.images.length === 0) {
        return <ArtistNotFound />;
    }

    const formatDuration = (ms: number | null) => {
        if (ms == null) {
            return '00:00';
        }
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };


    return (
        <div>
            <div className={styles.titleHolder}>
                <img src={artistData.images[1].url} alt={artistData.name} />

                <div className={styles.description}>
                    <h1>{artistData.name}</h1>
                    <h3>{artistData.type}</h3>
                    <p>Subscribers: {artistData.followers?.total}</p>
                    <NavLink to={artistData.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                        Spotify link
                    </NavLink>
                </div>
            </div>

            <div className={styles.tracksList}>
                {tracksData && Array.isArray(tracksData) && tracksData.map((track, index) => (
                    <div key={track.id} className={styles.trackItems}>
                        <div className={styles.leftSideList}>
                            <div className={styles.listElement}>
                                <p>{index + 1}</p>
                            </div>
                            <div className={styles.listElement}>
                                <button onClick={handleClick} className={styles.playBtn}>
                                </button>
                            </div>
                            <div className={styles.listElement}>
                                <NavLink to={`/music/artist/track/${track.id}`}>
                                    {track.name}
                                </NavLink>
                            </div>
                        </div>
                        <div className={styles.rightSideList}>
                            <div className={styles.listElement}>
                                <p>{formatDuration(track.duration_ms)}</p>
                            </div>
                            <div className={styles.listElement}>
                                <p>{track.album?.release_date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Artist;
