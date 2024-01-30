import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'

const PokeCard = ({ pokemon }) => {
    const { setApi } = useContext(mainContext)
    setApi((prevState) => ({
        ...prevState,
        apiCostum: pokemon.url
    }))

    return (<>
        <h1>{pokemon.name}</h1>
    </>)
}

export default PokeCard