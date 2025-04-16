import styles from "./music.module.css";
import {NavLink} from "react-router-dom";

const MusicApi = () => {
    return <>
        <div className={styles.container}>
            <NavLink to={"/music/artists"} className={styles.music}> Artists </NavLink>

            <NavLink to={"/music/albums"} className={styles.music}> Albums </NavLink>

            <NavLink to={"/music/playlists"} className={styles.music}> Playlists </NavLink>
        </div>
    </>
}

export default MusicApi;
