import { useState, useEffect } from "react"
import Axios from "axios"

export function Busca() {
  const [inputValue, setInputValue] = useState('')
  const [getFromApi, setDatFromaApi] = useState([])

  function handleInput(event) {
    setInputValue(event.target.value)
  }
  console.log("valor dentro do input value:", inputValue)

  useEffect(() => {
    async function getData() {
      const response = await Axios.get('https://api.github.com/users/mdsb1/repos')
      setDataFromApi(response.data)
    }

    getData()
  }, [])

  console.log('valor dentro do estado da lista que veio da api:', dataFromApi)

  return (
    <>
      <input placeholder="Digite Sua Busca" onChange={handleImput} />
    </>
  );
}
