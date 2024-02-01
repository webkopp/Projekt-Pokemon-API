import { useContext, useEffect, useRef, useState } from 'react'
import { mainContext } from '../../context/mainProvider'
import { Link } from 'react-router-dom'
import "./header.css"
import logo from "../../assets/img/image 1.svg"
import back from "../../assets/img/back.svg"



const HeaderTwo = () => {
  return (

        <>
        <Link to="/">
            <img
              src={logo}
              alt="Pokemon-Logo"
              style={{ width: "70%"}}
            /> 
        </Link>

        <nav>
          <Link to="/Burgermeneu">
              <img
                src={back}
                alt="Back-Icon"
              /> 
          </Link>
            
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

export default HeaderTwo
