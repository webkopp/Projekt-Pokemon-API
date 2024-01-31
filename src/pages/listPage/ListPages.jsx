import React, { useContext, useEffect } from 'react'
import PokeList from '../../components/pokeList/PokeList'
import { mainContext } from '../../context/mainProvider'
import BurgerMeneu from '../../components/burgermeneu/BurgerMeneu'
import Header from '../../components/header/Header'

const ListPages = () => {

    const { type, apiData, filter } = useContext(mainContext)

    useEffect(() => {
        if (apiData.completedData == true && filter) {
            console.log(filter);
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
            console.log(filterArr);
        }
    }, [filter])

    return (
        <>
            <Header />
            <BurgerMeneu/>

            {
                apiData.completedData === true ? <PokeList list={type} /> : <p>Loading ...</p>
            }
        </>
    )
}

export default ListPages