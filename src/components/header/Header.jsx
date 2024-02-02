import { useContext, useEffect, useRef, useState } from 'react'
import { mainContext } from '../../context/mainProvider'
import { Link, useNavigate } from 'react-router-dom'
import "./header.css"
import logo from "../../assets/img/image 1.svg"
import darki from "../../assets/img/mode.svg"
import back from "../../assets/img/back.svg"
import close from "../../assets/img/close.svg"
import BurgerMeneu from '../burgermeneu/BurgerMeneu'



const Header = () => {
  const { search, setSearch, darkMode, setDarkMode, backUp, setType, setFilter, filter } = useContext(mainContext)

  const toggleMode = () => {
    setDarkMode(!darkMode)
  }


  const serachFunction = (event) => {
    setSearch(event.target.value)
    let searchPokemon = backUp.filter(pokemon => pokemon.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setType(searchPokemon)


  }

  useEffect(() => {
    toggleMode()

  }, []
  )
  const loadBackUpToType = () => {
    setFilter('')
    filter ? setType(backUp) : null
  }
  return (

    <>
      <Link to="/">
        <img className='logo'
          src={logo}
          alt="Pokemon-Logo"
          style={{ width: "20rem" }}
          onClick={loadBackUpToType}
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
            onClick={loadBackUpToType}
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