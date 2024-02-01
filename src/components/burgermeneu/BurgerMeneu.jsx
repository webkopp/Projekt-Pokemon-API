import React from 'react'
import { Link } from 'react-router-dom'
import burgerLogo from "../../assets/img/menu.svg"

const BurgerMeneu = () => {
  return (
    <button><Link to='/typsPage'><img src={burgerLogo} /></Link></button>
  )
}

export default BurgerMeneu