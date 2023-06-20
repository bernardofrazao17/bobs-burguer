import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export function Header() {

return(
    <header className={styles.header}>
        <div className={styles.logo}>
            <Link to="/">Bob's Burguer App</Link>

        </div>

        <img className={styles.iconImage} src="./icon-image.png"/>
            
    
    </header>

)
}