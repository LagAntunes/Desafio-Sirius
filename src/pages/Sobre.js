import styles from "./Sobre.module.css"

function Sobre() {
    return(
       <div className={styles.divContainer}>
           <div className={styles.divItem}>
            <h1>Informações sobre o trabalho:</h1>
            <h3>
                Trabalho realizado por Luis Antonio como proposta para a vaga de <span>desenvolvedor Front-End</span> na
                Sirius Interativa.
            </h3>
           </div>

           <div className={styles.divItem}>
            <h1>Objetivos do trabalho:</h1>
            <ul>
                <li>Apresentar um projeto funcional dentro das <span>minhas habilidades</span></li>
                <li>Aprender mais sobre o <span>consumo de APIs</span> em um projeto</li>
                <li>Pesquisar e utilizar ferramentas do <span>React.Js</span></li>
                <li>Conhecer e utilizar ferramentas como <span>Jasmine</span> e <span>Heroku</span></li>
            </ul>
           </div>
       </div>
    )
}

export default Sobre;