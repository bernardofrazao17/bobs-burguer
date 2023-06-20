import { Link } from "react-router-dom";
import styles from './BobsburguerCard.module.css';

export function BobsburguerCard({ id, image, name }) {

    return (
        <Link to={`/bobsburguer/${id}`}>
            <div className={styles.card}>
                <div className={styles.cardImage} style={{backgroundImage:`url(${image})`}} >
                    
                </div>


                <div className={styles.cardName}>
                    {name}
                </div>
            </div>
        </Link>
    )
}