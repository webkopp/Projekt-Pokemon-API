import React, { useContext, useEffect } from 'react'
import PokeList from '../../components/pokeList/PokeList'
import { mainContext } from '../../context/mainProvider'
import BurgerMeneu from '../../components/burgermeneu/BurgerMeneu'
import Header from '../../components/header/Header'
import "./listPage.css"

const ListPages = () => {

    const { type, apiData, filter, setType, backUp} = useContext(mainContext)

    // backUp ? console.log(backUp) : null

    useEffect(() => {
        if (apiData.completedData == true && filter) {
            // console.log(filter);
            // console.log('BackUpData in FilterFunktion: ', apiData.backUp);
            const filterArr = backUp?.filter((item) => {
                let saveVar = ''
                item.types.forEach(element => {
                    // console.log(element);
                    if (element.type.name === filter) {
                        saveVar = item
                    }
                })
                return saveVar
            })
            // console.log(filterArr);
            setType(filterArr)
        }
    }, [filter])
    // type ? console.log(type) : null

    return (
        <>
            <Header />

            {
                (apiData.completedData === true && type) ? <PokeList list={type} /> : <p>Loading ...</p>
            }
        </>
    )
}

export default ListPages