import './App.css'
import { Lista } from './Components/Lista'
import { Contador } from './Components/Contador'
import { Eventos } from './Components/Eventos'
import { Repositorios } from './components/Repositorios'

function App() {
  return (
    <div className="App">
      <Contador/>
      <Lista />
      <Eventos />
      <Repositorios />
    </div>
  )
}

export default App