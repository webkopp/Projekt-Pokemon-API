import React, { useContext, useEffect } from 'react'
import { mainContext } from '../../context/mainProvider'
import axios from 'axios'

const PokeCard = ({ pokemon }) => {
    const { api, setApi, type, setType} = useContext(mainContext)

    return (<>
        <img src={pokemon.sprites.front_default} alt="" />
        <div className='divPokeCardBottom'>
            <p className='pPokemonName'>{pokemon.name}</p>
            <p className='pPokemonID'>#{`${pokemon.id}`.padStart(4, '0')}</p>
        </div>
    </>)
}

export default PokeCard