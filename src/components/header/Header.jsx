import { useContext, useRef, useState } from 'react'
import { mainContext } from '../../context/mainProvider'
import { Link } from 'react-router-dom'
import "./header.css"
import logo from "../../assets/img/image 1.png";


const Header = () => {
    const { setSearchTerm } = useContext(mainContext)
    const searchRef = useRef()
    const [darkmode, setDarkmode] = useState(true)
    const toggleMode = () => {
        setDarkmode(!darkmode)
    {darkmode ? document.documentElement.setAttribute('light', 'dark') : document.documentElement.setAttribute('dark', 'light')}
}


  return (

    <>
        <Link to="/">
            <img
              src={logo}
              alt="Pokemon-Logo"
              style={{ width: "2rem" }}
            /> 
        </Link>
        <nav>
            
            <div className="search">
            <input
                type="text"
                ref={searchRef}
                placeholder="Search Pokemon"
            />
            </div>
            <button id='modeToggle' onClick={() => toggleMode()}>🌓</button>
        </nav>
        


    </>
  )
}

export default Header



