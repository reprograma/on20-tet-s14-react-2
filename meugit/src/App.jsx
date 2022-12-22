import { useState } from 'react'
import { Cards } from './Cards'
import { Search } from './Search'
import { Header } from './Header'
import { Image } from './Image'
import './App.css'

function App() {
  return (
    <div className="App">
        <Header />
        <Cards />
        <Image link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrpAPYXrIqRtY7FOKfVp677A-5nGEYnH2Thw&usqp=CAU"/>
        <Search />
    </div>
  )
}

export default App
