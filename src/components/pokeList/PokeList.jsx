import React from 'react'
import PokeCard from '../pokeCard/PokeCard';
import './pokelist.css'
import { useNavigate } from 'react-router-dom';

const PokeList = ({ list }) => {
    const navigate = useNavigate()

    const getName = (event) =>{
        console.log(event.target.parentElement.textContent.slice(0,event.target.parentElement.textContent.indexOf('#')));
        const eventName = event.target.parentElement.textContent.slice(0,event.target.parentElement.textContent.indexOf('#'))
        navigate(`/detailPage/${eventName}`)
    }
    // console.log('List', list);
    return (
        <>
        {/* {console.log('List: ', list)} */}
        <section className='scBodyList'>
            {
                list.map((element, index) => {
                    return (
                        <div value={element.name} onClick={getName} key={index} className='divPokeCard'>
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