import React, { useContext, useEffect } from 'react'
import PokeList from '../../components/pokeList/PokeList'
import { mainContext } from '../../context/mainProvider'

const ListPages = () => {

    const { type, apiData, filter } = useContext(mainContext)

    useEffect(() => {
        const filterArr = type.filter((item) => {
            item.types.forEach(element => {
                // console.log(element);
                if(element.type.name === filter) {
                    return item
                } else {
                    null
                }
            });
        })
        filter ? console.log(filterArr) : null
    }, [filter])

    return (
        <>
            {
                apiData.completedData === true ? <PokeList list={type} /> : <p>Loading ...</p>
            }
        </>
    )
}

export default ListPages