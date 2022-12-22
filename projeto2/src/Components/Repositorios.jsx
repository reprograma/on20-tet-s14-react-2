import { useState, useEffect } from 'react' //importa os hooks
import Axios from 'axios' //importa 

export function Repositorios() {
  const [reposFromApi, setReposFromApi] = useState([]) //um estado onde eu vou guaradar minha lista de repos que vem da API do Github
  const baseURL = ('https://api.github.com/users/gifragoso/repos')
  useEffect(() => {
    async function getData() {
      const response = await Axios.get(baseURL)
      setReposFromApi(response.data)
    }
    getData()
  }, [])
  
  return(
    <div>
     {reposFromApi.map(item => {
      return(
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      )
     })}
    </div>
  )
}


