import {useEffect, useState} from "react";
import styles from "./artists.module.css";
import defaultArtists from "./img/defaultArtist.jpg";
import {NavLink} from "react-router-dom";
import {UseAppDispatch, UseAppSelector} from "../../../../services/reactHooks/reactHooks.ts";
import {getArtists} from "../../model/musicReducer.ts";
import Preloader from "../../../../features/preloader/preloader.tsx";

const Artists = () => {
    const dispatch = UseAppDispatch();
    const artistsData = UseAppSelector((state) => state.musicPages.artistsData);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(getArtists()).finally(() => setLoading(false));
    }, [dispatch]);

    if (loading) {
        return <Preloader />;
    }

    return (
        <div>
            <div className={styles.listHolder}>
                {artistsData.map((artist) => (
                    <div className={styles.leftSide} key={artist.id}>
                        <div className={styles.imagesHolder}>
                            <NavLink to={`/music/artist/${artist.id}`}>
                                <img
                                    className={styles.images}
                                    src={artist.images && artist.images[1] ? artist.images[1].url : defaultArtists}
                                    alt={artist.name || "Artist"}
                                />
                            </NavLink>
                        </div>
                        <NavLink to={`/music/artist/${artist.id}`}>
                            <span>{artist.name}</span>
                        </NavLink>
                    </div>
                ))}
            </div>

        </div>
    );
};
export default Artists;
