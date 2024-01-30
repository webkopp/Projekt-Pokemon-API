import React, { useContext, useEffect } from 'react'
import { mainContext } from '../../context/mainProvider'
import axios from 'axios'

const PokeCard = ({ pokemon }) => {
    const { api, setApi, state, setState } = useContext(mainContext)
    // * hier setzen wir setApi => api.ApiCutom: pokemon.url

    useEffect(() => {
        const apiFetch = async () => {
            const resp = await axios.get(pokemon.url)
            console.log(resp.data);
            resp ? (
                setState((prevState) => ({
                    ...prevState,
                    pokemon: resp.data.name,
                    pokemonID: resp.data.id,
                    pokemonURL: resp.data.sprites.front_default,
                    form: resp.data.forms.url,
                    hp: resp.data.stats[0].base_stat,
                    attack: resp.data.stats[1].base_stat,
                    defense: resp.data.stats[2].base_stat,
                    spAttack: resp.data.stats[3].base_stat,
                    spDefense: resp.data.stats[4].base_stat,
                    speed: resp.data.stats[5].base_stat,
                    weight: resp.data.weight
                }))) : null
        }
        apiFetch()
    }, [])

    // useEffect(() => {
    //     setApi((prevState) => ({
    //         ...prevState,
    //         apiCustom: pokemon.url
    //     }))
    // }, [])
    // api.apiCustom ? console.log(api.apiCustom) : null 

    return (<>
        <h1>{pokemon.name}</h1>
        <p>{pokemon.url}</p>
        <img src={state?.pokemonURL} alt="" />
    </>)
}

export default PokeCard