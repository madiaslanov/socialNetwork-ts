import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./album.module.css";
import {getAlbum} from "../../../model/musicReducer.ts";
import {UseAppDispatch, UseAppSelector} from "../../../../../services/reactHooks/reactHooks.ts";
import Preloader from "../../../../../features/preloader/preloader.tsx";
import {UseParamType} from "../../../model/musicTypes.ts";


const Album = () => {
    const albumData = UseAppSelector((state) => state.musicPages.albumId);
    const dispatch = UseAppDispatch();
    const { id } = useParams<UseParamType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id != null) {
            dispatch(getAlbum(id)).finally(() => setLoading(false));
        }
    }, [dispatch, id]);

    const formatDuration = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleClick = () => {
        if (albumData?.external_urls?.spotify) {
            window.open(albumData.external_urls.spotify);
        }
    };
    if (loading || !albumData) {
        return <Preloader />;
    }

    return (
        <div>
            <div className={styles.titleHolder}>
                <img src={albumData.images[1].url} alt={albumData.name} />
                <div className={styles.description}>
                    <h1>{albumData.name}-{albumData.artists[0].name}</h1>
                    <h3>Popularity Rank: {albumData.popularity}</h3>
                    <p>Release: {albumData.release_date}</p>
                    <p>Total Tracks: {albumData.total_tracks}</p>
                    <NavLink to={albumData.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                        Spotify link
                    </NavLink>
                    <p className={styles.copyrights}>{albumData.copyrights[0].text}</p>
                </div>
            </div>

            <div className={styles.tracksList}>
                {albumData.tracks.items && Array.isArray(albumData.tracks.items) && albumData.tracks.items.map((track, index) => (
                    <div className={styles.trackItems} key={track.id}>
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Album;
