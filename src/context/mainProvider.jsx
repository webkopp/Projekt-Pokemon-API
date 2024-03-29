import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const mainContext = createContext();



const MainProvider = ({ children }) => {

  // Deklaration aller useState Anweisungen
  const [darkMode, setDarkMode] = useState(false)


  const toogleDarkmode = () =>{
    setDarkMode((prev) =>!prev )
  }
console.log(darkMode);

  const [chartData, setChartData] = useState()

  const [search, setSearch] = useState()
  const [state, setState] = useState({
    pokemon: '',
    pokemonID: '',
    pokemonURL: '',
    color: [],
    formLink: '',
    hp: '',
    attack: '',
    defense: '',
    spAttack: '',
    spDefense: '',
    speed: '',
    accuracy: '',
    evasion: '',
    weight: ''
  })

  // Array mit allen Pokemon die dargestellt werden sollen
  const [type, setType] = useState([])
  const [backUp, setBackUp] = useState([])

  const [evo, setEvo] = useState({
    evo1: '',
    evo2: '',
  })

  const [filter, setFilter] = useState([])

  const [apiData, setApiData] = useState({
    offset: '0',
    limit: '1000',
    initData: false,
    spData: false,
    completedData: false,
    backUp: []
  })

  const [color, setColor] = useState({
    setColor: '',
    bug: '#3BB900',
    dark: '#1C1C1C',
    dragon: '#00458A',
    electric: '#FFE600',
    fairy: '#FFC2F9',
    fighting: '#E40000',
    fire: '#FF9900',
    flying: '#CCDADD',
    ghost: '#5A1E64',
    grass: '#57921C',
    ground: '#965A00',
    ice: '#6AD2FF',
    normal: '#B3B3B3',
    plant: '#70DF00',
    poison: '#AB00AE',
    psychic: '#FF81F2',
    rock: '#E1B237',
    steel: '#2A4950',
    water: '#00A0E4'
  })

  const [api, setApi] = useState({
    apiGeneral: `https://pokeapi.co/api/v2/pokemon/?offset=${apiData.offset}&limit=${apiData.limit}`,
    apiCustom: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1300',
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
      const data = resp.data.results
      
      const newObject = data.map((item) => ({
        name: item.name,
        url: item.url
      }))
      setType(newObject)
    }
    apiFetch()
    setApiData((prevState) => ({
      ...prevState,
      initData: true
    }))
  }, [])
  

  // * Loading Specific Data about single Pokemon from API
  useEffect(() => {
    const apiFetch = async () => {
      if (type.length > 0) {
        const newData = await Promise.all(type.map(async (item) => {
          const data = await getAPI(item.url)
          // console.log(data);
          return {
            ...item,
            abilities: data.abilities,
            base_experience: data.base_experience,
            forms: data.forms,
            game_indices: data.game_indices,
            height: data.height,
            held_items: data.held_items,
            id: data.id,
            is_default: data.id,
            location_area_encounters: data.location_area_encounters,
            moves: data.moves,
            order: data.order,
            past_abilities: data.past_abilities,
            past_types: data.past_types,
            species: data.species,
            sprites: data.sprites,
            stats: data.stats,
            types: data.types,
            weight: data.weight
          };
        }));
        // console.log('newData: ', newData);
        setApiData((prevState) => ({
          ...prevState,
          spData: true,
          backUp: newData
        }))
      }
    };
    apiFetch()
    // apiData.spData === true ? console.log('BackUp: ',apiData.backUp) : null;
    // setApiData((prevState) => ({
    //   ...prevState,
    //   backUp: newData
    //   spData: true
    // }))
  }, [apiData.initData, type])

  async function getAPI(url) {
    const apiFetch = async () => {
      const resp = await axios.get(url)
      return resp.data
    }
    const returnData = await apiFetch()
    return returnData
  }

  // Daten an type übergeben

  useEffect(() => {
    if (apiData.spData === true) {
      setType(apiData.backUp)
      setApiData((prevState) => ({
        ...prevState,
        completedData: true
      }))
    }
  }, [apiData.spData])

  useEffect(() => {
    setBackUp(apiData.backUp)
  }, [apiData.completedData])



  useEffect(()=>{
    setBackUp(apiData.backUp)
console.log(apiData.backUp);
  }, [api.completedData])


  return (
    <>
      <mainContext.Provider
        value={{ state, setState, type, setType, api, setApi, apiData, filter, setFilter, backUp, setBackUp, darkMode, setDarkMode, chartData, setChartData, color, setColor, search, setSearch, toogleDarkmode }}
      >{children}</mainContext.Provider>
    </>
  )
}

export default MainProvider
