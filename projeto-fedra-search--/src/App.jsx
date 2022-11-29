import { useState } from 'react'
import { Cabecalho } from './components/Cabecalho'
import { Busca } from './components/Busca'
import { Repositorios } from '../../projeto-aula-2/src/components/Repositorios'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <Busca></Busca>
      <Repositorios></Repositorios>
    </div>
  )
}

export default App
