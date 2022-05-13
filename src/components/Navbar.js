import { Link } from "react-router-dom"

import styles from "./Navbar.module.css"

function Navbar() {
    return(
        <nav className={styles.navbar}>
            
                <Link to="/">
                    <h1>Projeto</h1>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/Sobre">Sobre</Link></li>
                </ul>
            
        </nav>
    )
}

export default Navbar;