import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const mainContext = createContext();

const MainProvider = ({ children }) => {

  // Deklaration aller useState Anweisungen

  const [state, setState] = useState({
    pokemon: '',
    pokemonID: '',
    pokemonURL: '',
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

  const [apiData, setApiData] = useState({
    offset: '',
    limit: '',
  })

  const [api, setApi] = useState({
    apiGeneral: 'https://pokeapi.co/api/v2/pokemon/',
    apiCustom: '',
    apiEvoChain: 'https://pokeapi.co/api/v2/evolution-chain/',
    apiColor: 'https://pokeapi.co/api/v2/pokemon-color/',
    apiForm: 'https://pokeapi.co/api/v2/pokemon-form/1/',
    apiTypes: 'https://pokeapi.co/api/v2/type/',
    apiMoves: 'https://pokeapi.co/api/v2/move/',
    apiNext: '',
    apiPrevious: '',
  })

  // * Deklaration aller useEffect Anweisungen

  // Loading General Data
  useEffect(() => {
    const apiFetch = async () => {
      const resp = await axios.get(api.apiGeneral)
      // console.log(resp.data.results);
      setType(resp.data.results)
      // resp.data.results.forEach((element) => {
      //   return (
      //     setType((prevState) => ({
      //       ...prevState,
      //       name: element.name,
      //       url: element.url
      //     })))
      // })

    }
    apiFetch()
  }, [])

  // * Loading Specific Data about single Pokemon from API
  useEffect(() => {
    const apiFetch = async () => {
      const resp = await axios.get(api.apiCustom)
      console.log(resp);
    }
    api.apiCustom ? apiFetch : null
  },[api.apiCustom])

  type ? console.log('type:', type) : null;

  return (
    <>
      <mainContext.Provider
        value={{ state, setState, type, setType, api, setApi }}
      >{children}</mainContext.Provider>
    </>
  )
}

export default MainProvider
