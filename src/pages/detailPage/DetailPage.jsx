import React, { useRef } from 'react'
import DetailCard from '../../components/detailcard/DetailCard'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'




const DetailPage = () => {

const {darkMode, setDarkMode} = useContext(mainContext)

const {name} =useParams()
console.log(name);


  return (

    <>
    <DetailCard 
    name={name}

    />
    </>
    
  )
}

export default DetailPage