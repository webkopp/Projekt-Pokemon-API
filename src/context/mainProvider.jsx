import React, { useState } from 'react'

const MainProvider = () => {

  const [state, setState] = useState({
    pokemon: '',
    pokemonID: '',
    color: [],
    hp: '',
    attack: '',
    defense: '',
    spAttack: '',
    spDefense: '',
    speed: '',
    accuracy: '',
    evasion: '',
  })

  const [type, setType] = useState([])

  const [evo, setEvo] = useState({
    evo1: '',
    evo2: '',
  })

  const [api, setApi] = useState({
    apiGeneral: 'https://https://pokeapi.co/api/v2/pokemon/',
    apiEvoChain: 'https://pokeapi.co/api/v2/evolution-chain/',
    apiColor: 'https://pokeapi.co/api/v2/pokemon-color/',
    apiForm: 'https://pokeapi.co/api/v2/pokemon-form/1/',
    apiTypes: 'https://pokeapi.co/api/v2/type/',
    apiMoves: 'https://pokeapi.co/api/v2/move/'
  })

  return (
    <div>
      
    </div>
  )
}

export default MainProvider
