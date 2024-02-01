import { useContext, useRef, useState } from 'react'
import { mainContext } from '../../context/mainProvider'
import { Link } from 'react-router-dom'
import "./header.css"
import logo from "../../assets/img/image 1.png";
import darki from "../../assets/img/mode.png";



const Header = () => {
    const { search, setSearch, darkMode, setDarkMode, backUp, setType } = useContext(mainContext)
    
    
    const toggleMode = () => {
      setDarkMode(!darkMode)
  }


  const serachFunction = (event) => {
    setSearch(event.target.value)
    let searchPokemon = backUp.filter(pokemon => pokemon.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setType(searchPokemon)
    

}


  return (

    <>

          <body >
                <button onClick={toggleMode}>{darki}</button>
          </body>
        <Link to="/">
            <img
              src={logo}
              alt="Pokemon-Logo"
              style={{ width: "2rem"}}
            /> 
        </Link>
        <nav>
            
            <div className="search">
            <input
                type="text"
                placeholder='find your Pokémon'
                value={search}
                onInput={serachFunction}
            />
            </div>
            <button id='modeToggle' onClick={() => toggleMode()}>🌓</button>
        </nav>
        
        


    </>
  )
}

export default Header