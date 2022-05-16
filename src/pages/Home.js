import React, {useState} from "react";
import styles from './Home.module.css';
import axios from "axios";

import Api_Item from "../components/Api_Item"

function Home () {
    const [valor, setValor] = useState("")

    const [usuario, setUsuario] = useState()
  
    const [repositorio, setRepositorio] = useState()
  
    const [detalhe, setDetalhe] = useState()
  
    const [mostraDetalhe, setMostraDetalhe] = useState(false)

    const [mostraDisplay, setMostraDisplay] = useState(false)
  
  
    function busca() {
      axios
          .get(`https://api.github.com/users/${valor}`)
          .then((res) => {
            console.log("informações", res);
            setUsuario(res.data)
          })
  
      axios
          .get(`https://api.github.com/users/${valor}/repos`)
          .then((res) => {
            console.log("informações", res);
            setRepositorio(res.data)
          })
    }
  
    function verDetalhes(event) {
      const id = event.target.id;
      console.log(id)
  
      axios
          .get(`https://api.github.com/repos/${id} `)
          .then((res) => {
            console.log("informações", res);
            setDetalhe(res.data)
            setMostraDetalhe(true)
            setMostraDisplay(true)
          }) 
    }
  
    return (
      <div className={styles.container}>
        <h1>Fique por dentro das <span>atualizações</span> do seu usuário favorito</h1>

        <h2>Busque por perfis no github e <span>visualize seus repositórios</span>, assim como também as <span>informações pertinentes</span> aos mesmos: </h2>

        <div className={styles.divInputBotao}>
          <input type="text" value={valor} onChange={(event) => setValor(event.target.value)} placeholder="Digite o Login do usuário aqui..."/>

          <button onClick={busca}>
            Buscar usuário
          </button>
        </div>
  
        
        { usuario !== undefined && repositorio !== undefined ?
          <div className={styles.usuarioInformacoes}>
            <div className={styles.usuario}>
                <img src={usuario.avatar_url} alt="avatar"/>
                <Api_Item titulo="Nome do usuário: " item={usuario.name}/>
                <Api_Item titulo="Login do usuário: " item={usuario.login}/>
                <Api_Item titulo="Email do usuário: " item={usuario.email}/>
                <Api_Item titulo="Bio do usuário: " item={usuario.bio}/>
                <Api_Item titulo="Número de seguidores: " item={usuario.followers}/>
                <Api_Item titulo="Número de seguidos: " item={usuario.following}/>
            </div>
  
            {repositorio.map((item) => {
              return (
                <div key={item.id} className={styles.repositorio} style={mostraDisplay ? {display: "none"} : {display: "flex"}}>
                  <Api_Item titulo="Nome do repositório: " item={item.full_name}/>
                  <button id={item.full_name} onClick={verDetalhes} className={styles.detalhesBotao}>Ver detalhes</button>
                </div>
              )
            })}

            {mostraDetalhe ? 
             <div className={styles.descricao}>
              <p>
                <Api_Item titulo="Nome do repositório: " item={detalhe.full_name}/>
              </p>

               <Api_Item titulo="Descrição do repositório: " item={detalhe.description}/>
               <Api_Item titulo="Número de estrelas do repositório: " item={detalhe.stargazers_count}/>
               <Api_Item titulo="Linguagem usada no repositório: " item={detalhe.language}/>
                <a href={detalhe.html_url}>
                  <button className={styles.detalhesBotao}>Link do repositório</button>
                </a> <br/>
               <button className={styles.detalhesBotao} onClick={() => {setMostraDetalhe(false); setMostraDisplay(false)}}>Ocultar detalhes</button>
             </div>
              :
              <>
              </> 
            }
          </div> 
          :
          <></>
        }
      </div>
    )
  }
  
  export default Home