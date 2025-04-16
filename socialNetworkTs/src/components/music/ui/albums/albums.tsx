import {useEffect, useState} from "react";
import styles from "../artists/artists.module.css";
import {NavLink} from "react-router-dom";
import defaultArtists from "../artists/img/defaultArtist.jpg";
import {getAlbums} from "../../model/musicReducer.ts";
import Preloader from "../../../../features/preloader/preloader.tsx";
import {UseAppDispatch, UseAppSelector} from "../../../../services/reactHooks/reactHooks.ts";


const Albums = () => {
    const dispatch = UseAppDispatch();
    const albumsData = UseAppSelector((state) => state.musicPages.albums);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getAlbums()).finally(() => setLoading(false));
    },[dispatch])

    if (loading) {
        return <Preloader />;
    }

    return <div>
        <div className={styles.listHolder}>
            {albumsData && albumsData.length > 0 ? (
                albumsData.map((album) => (
                    <div className={styles.leftSide} key={album.id}>
                        <div className={styles.imagesHolder}>
                            <NavLink to={`/music/album/${album.id}`}>
                                <img
                                    className={styles.images}
                                    src={album.images && album.images[1] ? album.images[1].url : defaultArtists}
                                    alt={album.name || "Album"}
                                />
                            </NavLink>
                        </div>
                        <NavLink to={`/music/album/${album.id}`}>
                            <span>{album.name}</span>
                        </NavLink>
                    </div>
                ))
            ) : (
                <p>No albums found</p>
            )}
        </div>
    </div>
}

export default Albums;
