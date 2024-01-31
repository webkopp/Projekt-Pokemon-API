import React from 'react'
import PokeCard from '../pokeCard/PokeCard';
import './pokelist.css'

const PokeList = ({ list }) => {
    // console.log('List', list);
    return (
        <>
        {/* {console.log('List: ', list)} */}
        <section className='scBodyList'>
            {
                list.map((element, index) => {
                    return (
                        <div key={index} className='divPokeCard'>
                            <PokeCard pokemon={element} />
                        </div>
                    )
                })
            }
        </section>
        </>
    )
}

export default PokeList