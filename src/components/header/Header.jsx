import { useContext, useEffect, useRef, useState } from 'react'
import { mainContext } from '../../context/mainProvider'
import { Link } from 'react-router-dom'

import "./header.css"
import logo from "../../assets/img/image 1.svg"
import darki from "../../assets/img/mode.svg"
import back from "../../assets/img/back.svg"
import BurgerMeneu from '../burgermeneu/BurgerMeneu'


const Header = () => {
    const { search, setSearch, darkMode, setDarkMode, backUp, setType, setApi, api } = useContext(mainContext)
    
    
    const toggleMode = () => {
      setDarkMode(!darkMode)
  }


  const serachFunction = (event) => {
    setSearch(event.target.value)
    let searchPokemon = backUp.filter(pokemon => pokemon.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setType(searchPokemon)
    

}
   
useEffect(()=>
{
toggleMode()

}, []
) 

  return (

    <>
        <Link to="/">
            <img
              src={logo}
              alt="Pokemon-Logo"
              style={{ width: "30%"}}
            /> 
        </Link>

        <nav>

        <BurgerMeneu />

            
          <div className="search">
            <input
                type="text"
                placeholder='find your Pokémon'
                value={search}
                onInput={serachFunction}
            />
          </div>

          <button id='modeToggle' onClick={() => setDarkMode(darkMode)}>
              <img 
                src={darki}
                alt="Dark-Icon"
              />
          </button>

        </nav>
        
        


    </>
  )
}

export default Header