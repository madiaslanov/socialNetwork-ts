import styles from "./recomendFriends.module.css";

const RecomendFriends = () => {
    return (
        <div className={styles.holder}>
            <div className={styles.people}>
                <img className={styles.image}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcK1_fGqbqbwQS6kn7NajMPCTEAfz9K52yxg&amp;usqp=CAU"
                     alt="ava"/>
                <div className={styles.text} id="1">Serg Sergeev</div>
            </div>
            <div className={styles.people}>
                <img className={styles.image}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLn3tuyxUh6B93ao0WlTikMvolJ_LdgvTXrA&amp;usqp=CAU"
                     alt="ava"/>
                <div className={styles.text} id="2">Elena Elenova</div>
            </div>
            <div className={styles.people}>
                <img className={styles.image}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7Xlf0H7Tyx7iUKWylGTC01blhe1ILbMnyA&amp;usqp=CAU"
                     alt="ava"/>
                <div className={styles.text} id="3">Leon Leonov</div>
            </div>
        </div>
    );
};

export default RecomendFriends;
