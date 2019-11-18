import React from 'react'
import styles from './CSS/WeatherTile.module.css'

function WeatherTile ({ solString, data }) {
  const sol = Number(solString)
  console.log(data)
  return (
    <div className={styles['border']}>
      <h1>Some date I guess</h1>
      <div>
        <svg width="163" height="127" viewBox="0 0 163 127" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="131.5" cy="32.5" r="31.5" fill="#F2EA23"/>
          <ellipse cx="64.5" cy="63.5" rx="64.5" ry="63.5" fill="#A85D27"/>
        </svg>
      </div>
      <h2>Sol: {sol}</h2>
      <h3>{data[sol].Last_UTC}</h3>
      <div className={styles['weather-details']}>
        <div>
          <h4>Temp:</h4>
          <p>Avg: {data[sol].AT.av}</p>
          <p>Min: {data[sol].AT.mn}</p>
          <p>Max: {data[sol].AT.mx}</p>
        </div>
        <div>
          <h4>Wind:</h4>
          <p>Av: {data[sol].HWS.av}</p>
          <p>Min: {data[sol].HWS.mn}</p>
          <p>Max: {data[sol].HWS.mx}</p>
        </div>
        <div>
          <h4>Wind:</h4>
          <p>Av: {data[sol].PRE.av}</p>
          <p>Min: {data[sol].PRE.mn}</p>
          <p>Max: {data[sol].PRE.mx}</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherTile