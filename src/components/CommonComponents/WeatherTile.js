import React from 'react'
import styles from './CSS/WeatherTile.module.css'

function WeatherTile ({ solString, data }) {
  const sol = Number(solString)
  console.log(data)
  return (
    <div className={styles['border']}>
      <h5>Sol: {sol}</h5>
      <h6>{data[sol].Last_UTC}</h6>
        <div className={styles['desc']}>
          <p>Temp:</p>
          <p>Wind:</p>
          <p>Press.:</p>
        </div>
      <div className={styles['weather-details']}>
        <div>
          <p>Avg: {Math.round(data[sol].AT.av * 100)/100}</p>
          <p>Min: {Math.round(data[sol].AT.mn * 100)/100}</p>
          <p>Max: {Math.round(data[sol].AT.mx * 100)/100}</p>
        </div>
        {
          data[sol] && data[sol].HWS
            ? (
              <>
                <div>
                  <p>{Math.round(data[sol].HWS.av * 100)/100}</p>
                  <p>{Math.round(data[sol].HWS.mn * 100)/100}</p>
                  <p>{Math.round(data[sol].HWS.mx * 100)/100}</p>
                </div>
                <div>
                  <p>{Math.round(data[sol].PRE.av * 100)/100}</p>
                  <p>{Math.round(data[sol].PRE.mn * 100)/100}</p>
                  <p>{Math.round(data[sol].PRE.mx * 100)/100}</p>
                </div>
              </>
            )
            : <p style={{ fontSize: '24px', color: 'red' }}>{sol}</p>
        }
        {/* <div>
          <h4>Wind:</h4>
          <p>Av: {data[sol].HWS.av}</p>
          <p>Min: {data[sol].HWS.mn}</p>
          <p>Max: {data[sol].HWS.mx}</p>
        </div>
        <div>
          <h4>Pressure:</h4>
          <p>Av: {data[sol].PRE.av}</p>
          <p>Min: {data[sol].PRE.mn}</p>
          <p>Max: {data[sol].PRE.mx}</p>
        </div> */}
      </div>
    </div>
  )
}

export default WeatherTile