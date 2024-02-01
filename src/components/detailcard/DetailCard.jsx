import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider';

const DetailCard = ({name}) => {

    const { type} = useContext(mainContext)

    console.log("name", name);
    const pokemonFilter = type.filter((element)=> element.name === name)



    console.log(pokemonFilter);



  return (
    <>
    <img src={pokemonFilter[0]?.sprites?.front_default}/>
    <h1>{pokemonFilter[0]?.name}</h1>
    <h3>Base Experience: {pokemonFilter[0]?.base_experience}</h3>
    <div>{pokemonFilter[0]?.abilities?.map((element, index) =>{
        return(
            <>
            <p key={index}>Ability {index}: {element.ability.name}</p>
            </>
            )
        
    })}</div>
        <div>{pokemonFilter[0]?.types?.map((element, index) =>{
        return(
            <>
            <p key={index}>Type {index}: {element.type.name}</p>
            </>
            )
        
    })}</div>
    </>
  )
}

export default DetailCard