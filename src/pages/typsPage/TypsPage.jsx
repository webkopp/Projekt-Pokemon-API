import React, { useContext, useEffect } from 'react'
import "../typsPage/typspage.css"
import axios from 'axios'
import { mainContext } from '../../context/mainProvider'
import { Link, Navigate, useNavigate } from 'react-router-dom'




const TypsPage = () => {
    const {apiData, setFilter} = useContext(mainContext)
    const navigate = useNavigate()

const getValue = (event) => {
    const btnValue = event.target.textContent.toLowerCase()
    console.log(btnValue);
    setFilter(btnValue)
    navigate("/")
    

}

  return (<>
    <h1>Type</h1>
    <Link to="/"></Link>
    <div className='typs'>
    <button onClick={getValue}>BUG</button>
    <button onClick={getValue}>DARK</button>
    <button onClick={getValue}>DRAGON</button>
    <button onClick={getValue}>ELECTRIC</button>
    <button onClick={getValue}>FAIRY</button>
    <button onClick={getValue}>FIGHTING</button>
    <button onClick={getValue}>FIRE</button>
    <button onClick={getValue}>FLYING</button>
    <button onClick={getValue}>GHOST</button>
    <button onClick={getValue}>GRASS</button>
    <button onClick={getValue}>GROUND</button>
    <button onClick={getValue}>ICE</button>
    <button onClick={getValue}>NORMAL</button>
    <button onClick={getValue}>PLANT</button>
    <button onClick={getValue}>POISON</button>
    <button onClick={getValue}>PSYCHIC</button>
    <button onClick={getValue}>ROCK</button>
    <button onClick={getValue}>STEEL</button>
    <button onClick={getValue}>WATER</button>
    </div>
    </>
  )
}

export default TypsPage