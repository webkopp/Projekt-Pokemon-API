import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const mainContext = createContext();

const MainProvider = ({children}) => {
  
  // Deklaration aller useState Anweisungen

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

  // Deklaration aller useEffect Anweisungen

  /* 
  useEffect(() => {
        const apiFetch = async () => {
            // console.log(state.api);
            const resp = await axios.get(state.apiDetail)
            setState((prevState) => ({
                ...prevState,
                detailData: resp.data.drinks
            }))
        }
        state.apiDetail ? (apiFetch()) : (null)

    }, [state.apiDetail])
  */

  useEffect(() => {
    const apiFetch = async () => {
      const resp = await axios.get(api.apiGeneral)
      console.log(resp);
    }
    api.apiGeneral ? (apiFetch()) : (null)
  }, [])

  return (
    <>
    <mainContext.Provider
    value ={{state, setState, type, setType, api, setApi}}
    >{children}</mainContext.Provider>
    </>
  )
}

export default MainProvider
