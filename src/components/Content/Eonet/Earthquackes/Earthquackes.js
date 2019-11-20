import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import styles from './../../CSS/Eonet.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faMountain } from '@fortawesome/free-solid-svg-icons'
import Volcanoes from '../Volcanoes/Volcanoes';

function Earthquackes () {
  const [data, setData] = useState(null)
  const [listOfEvents, setListOfEvents] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events'
      )
      //apply filter here
      // const dodo = results.data.events.filter(event => typeof(event.geometries[0].coordinates[0] !== 'number'))
      // console.log(dodo)
      setData(results.data)
      console.log(results.data)
      const tempArrWildfire = []
      const tempArrVolcanoes = []
      const temArrAllEvents = []
      for ( let i = 0; i < results.data.events.length; i ++) {
        if (typeof(results.data.events[i].geometries[0].coordinates[0]) === 'number') {
          temArrAllEvents.push(i)
        }
        if (results.data.events[i].categories[0].title === 'Wildfires' && typeof(results.data.events[i].geometries[0].coordinates[0]) === 'number') {
          tempArrWildfire.push(i)
        } else if (results.data.events[i].categories[0].title === 'Volcanoes' && typeof(results.data.events[i].geometries[0].coordinates[0]) === 'number') {
          tempArrVolcanoes.push(i)
        }
      }
      console.log(temArrAllEvents)
      setListOfEvents({
        allEvents: [...temArrAllEvents],
        wildfires: [...tempArrWildfire],
        volcanoes: [...tempArrVolcanoes]
      })
    }
    fetchData()
  }, [])
  
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoic2Vwc2FyIiwiYSI6ImNrMzV1cDBlaTBtZTMzY3BlMGtxZHgxbDgifQ.BAO2QYMsaX-CmTanG19_GQ'
  });

  // data && listOfEvents && console.log(listOfEvents.allEvents)
  // data && listOfEvents && listOfEvents.allEvents.forEach( event => {
  //   if (typeof(event.geometries[0].coordinates[0]) === 'number') 
  //     console.log(event.geometries[0].coordinates[0])
  // })
  
  return (
    <div>
      <div className={styles['map-wrapper']}>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      > 
        {
          data && listOfEvents && listOfEvents.allEvents.map(event => 
            <Marker
              key={event}
              coordinates={[data.events[event].geometries[0].coordinates[0], data.events[event].geometries[0].coordinates[1]]}
            >
              { (listOfEvents.wildfires.indexOf(event) !== -1) ? (<FontAwesomeIcon icon={faFire} />) : (<FontAwesomeIcon icon={faMountain} />)}
            </Marker>  
          )
        }
      </Map>
      </div>
    </div>
  )
}

export default Earthquackes
