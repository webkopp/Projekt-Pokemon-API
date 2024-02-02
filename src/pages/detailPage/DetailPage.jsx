import React, { useRef } from 'react'
import DetailCard from '../../components/detailcard/DetailCard'
import { useParams } from 'react-router-dom'




const DetailPage = () => {
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