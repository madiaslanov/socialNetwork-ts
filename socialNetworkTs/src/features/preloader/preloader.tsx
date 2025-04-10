import style from "./preloader.module.css";
import preloader from "./img/preloader.gif";

let Preloader = () =>{

    return   (<>
        <img className={style.image} src={preloader} alt="Loading"/>
    </>)
}

export default Preloader;