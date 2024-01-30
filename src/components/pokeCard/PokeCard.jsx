import React, { useContext, useEffect } from 'react'
import { mainContext } from '../../context/mainProvider'
import axios from 'axios'

const PokeCard = ({ pokemon }) => {
    const { api, setApi } = useContext(mainContext)
    // * hier setzen wir setApi => api.ApiCutom: pokemon.url

    // const apiFetch = async () => {
    //     const resp = await axios.get(pokemon.url)
    //     console.log(resp.data);
    // }
    // apiFetch()

    useEffect(() => {
        setApi((prevState) => ({
            ...prevState,
            apiCustom: pokemon.url
        }))
    }, [])
    api.apiCustom ? console.log(api.apiCustom) : null 
    
    return (<>
        <h1>{pokemon.name}</h1>
        <p>{pokemon.url}</p>
    </>)
}

export default PokeCard