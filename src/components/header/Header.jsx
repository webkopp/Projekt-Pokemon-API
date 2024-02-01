import { useContext, useEffect, useRef, useState } from 'react'
import { mainContext } from '../../context/mainProvider'
import { Link } from 'react-router-dom'
import "./header.css"
import logo from "../../assets/img/image 1.svg"
import darki from "../../assets/img/mode.svg"
import back from "../../assets/img/back.svg"
import close from "../../assets/img/close.svg"



const Header = ( ) => {
    const { setSearchTerm, darkMode, setDarkMode } = useContext(mainContext)
    const searchRef = useRef()
    
  //   const toggleMode = () => {
  //     setDarkMode(!darkMode)
  //     console.log(darkMode)
  // }
   
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
              style={{ width: "20%" }}
            /> 
        </Link>

        <nav>
          <Link to="#">
              <img
                src={back}
                alt="Back-Icon"
              /> 
          </Link>
            
          <div className="search">
            <input
              type="text"
              ref={searchRef}
              placeholder="Search Pokemon"
              // onChange={} //
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