import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import burgerLogo from "../../assets/img/menu.svg"
import back from '../../assets/img/back.svg'

const BurgerMeneu = () => {

  const location = useLocation()
  return (
    <>
      {
        location.pathname != '/' 
        ? <Link to='/'><img src={back} /></Link> 
        : <Link to='/typsPage'><img src={burgerLogo} /></Link>
      }
    </>
  )
}

export default BurgerMeneu