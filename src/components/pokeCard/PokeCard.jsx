import React from 'react'

const PokeCard = ({pokemon}) => {
  return (<>
    <h1>{pokemon.name}</h1>
    <p>{pokemon.url}</p>
</>)
}

export default PokeCard