import React, {useState} from "react";
import styles from './App.css';
import axios from "axios";

import Api_Item from "./components/Api_Item";



function App () {
  const [usuario, setUsuario] = useState()

  const [repositorio, setRepositorio] = useState()

  const [detalhe, setDetalhe] = useState()

  const [mostraDetalhe, setMostraDetalhe] = useState(false)
  
  const [valor, setValor] = useState("")


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
        })
  }

  return (
    <div>
      <input type="text" value={valor} onChange={(event) => setValor(event.target.value)}/>
      <button onClick={busca}>
        clica aqui
      </button>

      
      { usuario !== undefined && repositorio !== undefined ?
        <div className={styles.row}>
          <div>
              <img src={usuario.avatar_url} alt="avatar"/>
              <Api_Item titulo="Nome do usuário: " item={usuario.name}/>
              <Api_Item titulo="Login do usuário: " item={usuario.login}/>
          </div>

          {mostraDetalhe ? 
            <div>
             <Api_Item titulo="Descrição do repositório: " item={detalhe.description}/>
             <button onClick={() => setMostraDetalhe(false)}>Ocultar detalhes</button>
            </div>
            :
            <></>
          }

          {repositorio.map((item) => {
            return (
              <div key={item.id}>
                <Api_Item titulo="Nome do repositório: " item={item.full_name}/>
                <button id={item.full_name} onClick={verDetalhes}>Ver detalhes</button>
              </div>
            )
          })}
          
        </div> 
        :
        <></>
      }
    </div>
  )
}

export default App

