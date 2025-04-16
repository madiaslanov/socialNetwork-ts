import imageNotFound from "./img/error.webp";
import styles from "./artists.module.css";

const ArtistsNotFound = () => {
    return (
        <div className={styles.notFound}>
            <img src={imageNotFound} alt=""/>
            <p>Not Found</p>
        </div>
    );
};

export default ArtistsNotFound;
