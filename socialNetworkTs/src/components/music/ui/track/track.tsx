import {useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import styles from "./track.module.css";
import {UseAppDispatch, UseAppSelector} from "../../../../services/reactHooks/reactHooks.ts";
import {getTrack} from "../../model/musicReducer.ts";
import Preloader from "../../../../features/preloader/preloader.tsx";
import { UseParamType} from "../../model/musicTypes.ts";

const Track = () => {
    const dispatch = UseAppDispatch();
    const trackData = UseAppSelector((state) => state.musicPages.trackId);
    const {id} = useParams<UseParamType>();

    useEffect(() => {
        if (id != null) {
            dispatch(getTrack(id));
        }
    }, [dispatch, id]);

    if (!trackData) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={styles.titleHolder}>
                <img src={trackData.album.images[1].url} alt=""/>
                <div className={styles.description}>
                    <h1>{trackData.name}</h1>
                    <h3>popularity-rank: {trackData.popularity}</h3>
                    <NavLink to={trackData.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                        Spotify link
                    </NavLink>
                </div>
            </div>
            <div className={styles.albumHolder}>
                <p></p>
            </div>
        </div>
    );
};

export default Track;

