import { useState } from 'react' //importei o useState de dentro do react

export function Contador() {
  const [contador, setContador] = useState(0) //codigo que voces vao fazer
  
  function diminui() {
    setContador(contador - 1)
  }

  function soma() {
    setContador(contador + 1)
  }

  return(
    <div className="contador"> 
      <button onClick={diminui}>-</button>
      <h2>{contador}</h2>
      <button onClick={soma}>+</button>
    </div>
  )
}