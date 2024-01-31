import React, { useContext } from 'react'
import PokeList from '../../components/pokeList/PokeList'
import { mainContext } from '../../context/mainProvider'
import BurgerMeneu from '../../components/burgermeneu/BurgerMeneu'

const ListPages = () => {

    const {type} = useContext(mainContext)
  
    return (<>
        <BurgerMeneu/>
        <PokeList list={type}/>
        </>
    )
}

export default ListPages