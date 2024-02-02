import React, { useContext, useEffect } from 'react'
import "../typsPage/typspage.css"
import axios from 'axios'
import { mainContext } from '../../context/mainProvider'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import logo from "../../assets/img/image 1.svg"
import closeIcon from "../../assets/img/close.svg"




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
  <div className='typeHeader'>
  <Link to="/"><img className="logoType" src={logo}/></Link>
  <Link to="/"><img src={closeIcon} alt="" /></Link>
  </div>
  <div className='btnFrame'>
    <h1>TYPE</h1>
    <div className='types'>
    <button style={{backgroundColor: "#3BB900"}} onClick={getValue}>BUG</button>
    <button style={{backgroundColor: "#1C1C1C"}} onClick={getValue}>DARK</button>
    <button style={{backgroundColor: "#00458A"}} onClick={getValue}>DRAGON</button>
    <button style={{backgroundColor: "#FFE600"}} onClick={getValue}>ELECTRIC</button>
    <button style={{backgroundColor: "#FFC2F9"}} onClick={getValue}>FAIRY</button>
    <button style={{backgroundColor: "#E40000"}} onClick={getValue}>FIGHTING</button>
    <button style={{backgroundColor: "#FF9900"}} onClick={getValue}>FIRE</button>
    <button style={{backgroundColor: "#CCDADD"}} onClick={getValue}>FLYING</button>
    <button style={{backgroundColor: "#5A1E64"}} onClick={getValue}>GHOST</button>
    <button style={{backgroundColor: "#57921C"}} onClick={getValue}>GRASS</button>
    <button style={{backgroundColor: "#965A00"}} onClick={getValue}>GROUND</button>
    <button style={{backgroundColor: "#6AD2FF"}} onClick={getValue}>ICE</button>
    <button style={{backgroundColor: "#B3B3B3"}} onClick={getValue}>NORMAL</button>
    <button style={{backgroundColor: "#70DF00"}} onClick={getValue}>PLANT</button>
    <button style={{backgroundColor: "#AB00AE"}} onClick={getValue}>POISON</button>
    <button style={{backgroundColor: "#FF81F2"}} onClick={getValue}>PSYCHIC</button>
    <button style={{backgroundColor: "#E1B237"}} onClick={getValue}>ROCK</button>
    <button style={{backgroundColor: "#2A4950"}} onClick={getValue}>STEEL</button>
    <button style={{backgroundColor: "#00A0E4"}} onClick={getValue}>WATER</button>
    </div>
    </div>
    </>
  )
}

export default TypsPage