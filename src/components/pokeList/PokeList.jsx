import React from 'react'
import PokeCard from '../pokeCard/PokeCard';

const PokeList = ({ list }) => {
    // console.log('List', list);
    return (
        <>{
            list.map((element, index) => {
                return (
                    <div key={index}>
                        <PokeCard pokemon={element} />
                    </div>
                )
            })
        }</>
    )
}

export default PokeList