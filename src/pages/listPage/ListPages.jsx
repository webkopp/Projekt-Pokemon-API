import React, { useContext } from 'react'
import PokeList from '../../components/pokeList/PokeList'
import { mainContext } from '../../context/mainProvider'

const ListPages = () => {

    const {type} = useContext(mainContext)

    return (
        <PokeList list={type}/>
    )
}

export default ListPages