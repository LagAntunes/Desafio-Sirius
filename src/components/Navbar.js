import { Link } from "react-router-dom"

import styles from "./Navbar.module.css"

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo}>
                <h1>Sirius Search</h1>
            </Link>
            <ul className={styles.list}>
                <li><Link to="/" className={styles.item}>Home</Link></li>
                <li><Link to="/Sobre" className={styles.item}>Sobre</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;