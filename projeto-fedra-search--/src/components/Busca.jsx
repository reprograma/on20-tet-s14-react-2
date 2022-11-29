import { useState, useEffect } from "react"
import { GithubLogo } from 'phosphor-react'
import Axios from "axios"
import styles from './css/busca.module.css'


export function Busca () {
   const [inputValue, setInputValue] = useState('')
   const [dataFromApi, setDataFromApi] = useState([])
   const [listFiltered, setListFiltered] = useState([])

   function handleInput(evento) {
      setInputValue(evento.target.value)
   }
console.log(inputValue)

useEffect(() => {
   async function getData() {
      const response = await Axios.get('https://api.github.com/users/Fedra92/repos')
      setDataFromApi(response.data)
   }
   getData()
  }, [])

  console.log('valor dentro do estado da lista que veio da API: ', dataFromApi)

  useEffect(() => {
    const dataFiltered = dataFromApi.filter(item => {
      return item.name.includes(inputValue)
    })

   setListFiltered(dataFiltered)
  }, [inputValue, dataFromApi])

  console.log('lista filtrada: ', listFiltered)
  return(
    <>
      <input placeholder="Digite sua busca" onChange={handleInput} />
      {inputValue && listFiltered.map(item => {
        return(
          <div>
            <h2 className={styles.titulo}>{item.name}</h2>
            <p>{item.description}</p>
            <a href={item.html_url} target="_blank">
              <GithubLogo size={32} weight="thin" />
              Conferir
            </a>
          </div>
        )
      })}
    </>
  )
}