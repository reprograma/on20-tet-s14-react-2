import { useState } from "react"
import axios from "axios"


function Search () {
    const [inputValue, setInputValue] = useState('')
    
    function handleInput(event) {
        setInputValue(event.target.value)
    }

    console.log(inputValue)
    
    return(
        <>
    <input type="text" placeholder="Digite sua busca" onChange={handleInput} />
    </>
    )
}

export default Search()