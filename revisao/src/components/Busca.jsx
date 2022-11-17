import { useState, useEffect } from 'react' //importei os hooks
import Axios from 'axios' // importei o axios

export function Busca() {
  const [pokemons, setPokemons] = useState([]) //criei um estado pra guardar os pokemons
  const [termoBuscado, setTermoBuscado] = useState('')
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([])

  const baseURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(baseURL) //consumi a api 
      setPokemons(response.data.results) //guardar os dados na variavel/estado pokemons
    }
    getData()
  }, []) //quando a tela carrega

  function handleSearch(event) {
    setTermoBuscado(event.target.value)
  }

  // O que foi digitado na busca existe na lista? 
  useEffect(()=> {
    const filtered = pokemons.filter(pokemon => {
      return pokemon.name.includes(termoBuscado)
    })
    setPokemonsFiltrados(filtered)
  }, [pokemons, termoBuscado]) //existe termo buscado? alguém digitou no input? A API retornou os dados?

  return(
    <>
      <input placeholder="Digite sua busca" onChange={handleSearch} />
      {termoBuscado && 
        pokemonsFiltrados.map(pokemon => {
          return(
            <div>
              <p key={pokemon.name}>{pokemon.name}</p>
              <a href={pokemon.url}>conferir</a>
            </div>
          )
      })}
    </>
  )
}