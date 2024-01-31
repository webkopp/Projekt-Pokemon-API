import React, { useContext } from 'react'
import PokeList from '../../components/pokeList/PokeList'
import { mainContext } from '../../context/mainProvider'
import Header from '../../components/header/Header'

const ListPages = () => {

    const {type} = useContext(mainContext)

    return (
        <>
        <Header />
        <PokeList list={type}/>
        </>
    )
}

export default ListPages