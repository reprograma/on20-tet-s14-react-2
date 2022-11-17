import { useState, useEffect } from 'react' //importei de dentro do react

export function Relogio() {
  const [horario, setHorario] = useState(new Date().toLocaleTimeString()) //usando meu hook useState

  function atualizaHora() {
    setHorario(new Date().toLocaleTimeString()) //atualizando a variavel de dentro do useState
  }

  useEffect(()=> {
    setInterval(atualizaHora, 1000) //chamando a função que invoca a funcao que vem de dentro do useState, quando a tela carrega 
  }, [])

  return(
    <h2>{horario}</h2>
  )
}