import React, { useContext, useEffect, useRef } from 'react'
import { mainContext } from '../../context/mainProvider';
import { Chart, RadarController } from 'chart.js/auto';
import { Chart as ReactChart } from 'react-chartjs-2';

const DetailCard = ({ name }) => {

  const { type, chartData, setChartData } = useContext(mainContext)
  const pokemonFilter = type.filter((element) => element.name === name)
  const chartRef = useRef()

  console.log(pokemonFilter);

  useEffect(() => {
    console.log(chartRef.current.value);
    if (chartRef.current.value && pokemonFilter[0]) {

      const radarData = {
        labels: [
          'hp',
          'attack',
          'defense',
          'special-attack',
          'special-defense',
          'speed'
        ],
        datasets: [{
          label: 'Pokemon Stats:',
          data: [
            pokemonFilter[0]?.stats[0]?.base_stat,
            pokemonFilter[0]?.stats[1]?.base_stat,
            pokemonFilter[0]?.stats[2]?.base_stat,
            pokemonFilter[0]?.stats[3]?.base_stat,
            pokemonFilter[0]?.stats[4]?.base_stat,
            pokemonFilter[0]?.stats[5]?.base_stat,
          ],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
      }



      setChartData(radarData)
    }
  }, [pokemonFilter])

  chartData ? console.log(chartData.data) : null

  return (
    <>
      {/* {<>pokemonFilter[0]? ( */}
      <img src={pokemonFilter[0]?.sprites?.front_default} />
      <h1>{pokemonFilter[0]?.name}</h1>
      <h3>Base Experience: {pokemonFilter[0]?.base_experience}</h3>
      <div>{pokemonFilter[0]?.abilities?.map((element, index) => {
        return (
          <>
            <p key={index}>Ability {index}: {element.ability.name}</p>
          </>
        )

      })}</div>
      <div>{pokemonFilter[0]?.types?.map((element, index) => {
        return (
          <>
            <p key={index}>Type {index}: {element.type.name}</p>
          </>
        )

      })}</div>
      <div width='240px' height='240px'>
        <ReactChart type='radar' data={chartData} options={{
          element: {
            line: {
              borderWidth: 3
            }
          }
        }}
          ref={chartRef}></ReactChart>
      </div>
      {/* ) : <p>loading ....</p></>} */}
    </>
  )
}

export default DetailCard