import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import WeatherTile from './../../CommonComponents/WeatherTile'
import styles from './../CSS/Mars.module.css'
import Marss from './../../../parallax/Ellipse 8.png'
import Moon from './../../../parallax/Ellipse 9.png'
import Satellite from './../../../parallax/spacenet-satellite.png'
import Parallax from 'parallax-js'



function Mars () {
  const [data, setData] = useState()
  const [helper, setHelper] = useState()
  let scene = useRef(null)
  let layerOne = useRef(null)
  let layerTwo = useRef(null)
  let layerThree = useRef(null)

  useEffect(() => {
    let parallax = new Parallax(scene)
    const fetchData = async () => {
      const results = await axios(
        'https://api.nasa.gov/insight_weather/?api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4&feedtype=json&ver=1.0'
      )
      setData(results.data)
    }
    fetchData()
  }, [])

  return (
    <div className={styles['wrapper']}>
      {/* <div className={styles['info']}>
      </div> */}
      <div ref={el => scene = el}  id="scene" className={styles['scene']}>
      <div className={styles['layer2']} data-depth="0.6"><img ref={el => layerTwo = el} src={Moon}/></div>
        <div className={styles['layer1']} data-depth="0.4"><img ref={el => layerOne = el}  src={Marss}/></div>
        <div className={styles['layer3']} data-depth="0.2"><img ref={el => layerThree = el} src={Satellite}/></div>
      </div>
      <div className={styles['weather']}>
      {
        data && data.sol_keys.map(sol =>
          <WeatherTile
            key={sol}
            solString={sol}
            data={data}
          />
          )
      }
      </div>
    </div>
  )
}

export default Mars