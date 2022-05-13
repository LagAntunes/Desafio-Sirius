import { FaLinkedin, FaGithub } from "react-icons/fa"

import styles from "./Footer.module.css"

function Footer() {
    return(
        <footer className={styles.rodape}>
            <h1>Projeto feito por <span>Luis Antonio</span> para a Sirius</h1>

            <ul className={styles.icones}>
                <li>
                   <a href="https://www.linkedin.com/in/luis-antonio-garcia-antunes/">
                        <FaLinkedin/>
                   </a>
                </li>
                <li>
                    <a href="https://github.com/LagAntunes">
                        <FaGithub/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;