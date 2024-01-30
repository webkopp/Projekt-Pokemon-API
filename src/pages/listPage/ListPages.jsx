import React, { useContext } from 'react'
import PokeList from '../../components/pokeList/PokeList'
import { mainContext } from '../../context/mainProvider'

const ListPages = () => {

    const { type, apiData } = useContext(mainContext)

    return (
        <>
            {
                apiData.completedData === true ? <PokeList list={type} /> : null
            }
        </>
    )
}

export default ListPages