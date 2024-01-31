import React, { useContext, useEffect } from 'react'
import PokeList from '../../components/pokeList/PokeList'
import { mainContext } from '../../context/mainProvider'
import BurgerMeneu from '../../components/burgermeneu/BurgerMeneu'
import Header from '../../components/header/Header'

const ListPages = () => {

    const { type, apiData, filter } = useContext(mainContext)

    useEffect(() => {
        if (apiData.completedData == true) {
            const filterArr = apiData.backUp?.filter((item) => {
                item.types.forEach(element => {
                    // console.log(element);
                    if (element.type.name === filter) {
                        return item
                    } else {
                        null
                    }
                })
            })
            // jetzt muss setType filterArr übergeben werden.
            // filter ?  : null
        }
    }, [filter])

    return (
        <>
            <Header />

            {
                apiData.completedData === true ? <PokeList list={type} /> : <p>Loading ...</p>
            }
        </>
    )
}

export default ListPages