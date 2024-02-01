import React, { useContext, useEffect, useRef } from 'react'
import { mainContext } from '../../context/mainProvider';
import { Chart, RadarController } from 'chart.js/auto';
import { Chart as ReactChart } from 'react-chartjs-2';
import './detailcard.css'

const DetailCard = ({ name }) => {

  const { type, chartData, setChartData, color } = useContext(mainContext)
  const pokemonFilter = type.filter((element) => element.name === name)
  const chartRef = useRef()

  useEffect(() => {
    if (pokemonFilter.length > 0) {
      // console.log(pokemonFilter);
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
            pokemonFilter[0]?.stats[0].base_stat,
            pokemonFilter[0]?.stats[1].base_stat,
            pokemonFilter[0]?.stats[2].base_stat,
            pokemonFilter[0]?.stats[3].base_stat,
            pokemonFilter[0]?.stats[4].base_stat,
            pokemonFilter[0]?.stats[5].base_stat,
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

  // chartData ? console.log(chartData) : null;

  return (
    <>
      {/* {<>pokemonFilter[0]? ( */}
      <h1>{pokemonFilter[0]?.name}</h1>
      <img className='imgDetail' src={pokemonFilter[0]?.sprites?.front_default} />
      <h3>Base Experience: {pokemonFilter[0]?.base_experience}</h3>

      <div className='divAbility'>{pokemonFilter[0]?.abilities?.map((element, index) => {
        return (
          <>
            <p key={index} className='pAbility'>Ability {index}: {element.ability.name}</p>
          </>
        )

      })}</div>
      <div className='divTypes'>{pokemonFilter[0]?.types?.map((element, index) => {
        return (
          <>
            <p className='pTypes' key={index} style={{backgroundColor: color[element.type.name]}}>Type {index}: {element.type.name}</p>
          </>
        )

      })}</div>
      {
        chartData ? (
          <div id='pokeChart'>
            <ReactChart
              type='radar'
              data={chartData}
              height="120px"
              width="120px"
              options={{
                element: {
                  line: {
                    borderWidth: 2
                  }
                }
              }}
              ref={chartRef}></ReactChart>
          </div>

        ) : <p>loading ...</p>
      }
      {/* ) : <p>loading ....</p></>} */}
    </>
  )
}

export default DetailCard