import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactMapboxGl, { Layer, Feature, Marker, Popup } from 'react-mapbox-gl';
import styles from './../../CSS/Eonet.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faMountain, faIgloo, faWind, faQuestion } from '@fortawesome/free-solid-svg-icons'
import uuid from 'react-uuid'


function Events () {
  const [data, setData] = useState(null)
  const [listOfEvents, setListOfEvents] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    zoom: [3]
  });

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events'
      )
      setData(results.data)
      console.log(results.data)
      const tempArrWildfire = []
      const tempArrVolcanoes = []
      const temArrAllEvents = []
      const tempArrIcebergs = []
      const tempArrStorms = []
      for ( let i = 0; i < results.data.events.length; i ++) {
        if (typeof(results.data.events[i].geometries[0].coordinates[0]) === 'number') {
          temArrAllEvents.push(i)
        }
        if (results.data.events[i].categories[0].title === 'Wildfires' && typeof(results.data.events[i].geometries[0].coordinates[0]) === 'number') {
          tempArrWildfire.push(i)
        } else if (results.data.events[i].categories[0].title === 'Volcanoes' && typeof(results.data.events[i].geometries[0].coordinates[0]) === 'number') {
          tempArrVolcanoes.push(i)
        } else if (results.data.events[i].categories[0].title === 'Sea and Lake Ice' && typeof(results.data.events[i].geometries[0].coordinates[0]) === 'number') {
          tempArrIcebergs.push(i)
        } else if (results.data.events[i].categories[0].title === 'Severe Storms' && typeof(results.data.events[i].geometries[0].coordinates[0]) === 'number') {
          tempArrStorms.push(i)
        }
      }
      setListOfEvents({
        allEvents: [...temArrAllEvents],
        wildfires: [...tempArrWildfire],
        volcanoes: [...tempArrVolcanoes],
        icebergs: [...tempArrIcebergs],
        storms: [...tempArrStorms]
      })
    }
    fetchData()
    const listener = e => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setSelectedEvent(null)
      }
    }
    window.addEventListener('keydown', listener)
  }, [])

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoic2Vwc2FyIiwiYSI6ImNrMzV1cDBlaTBtZTMzY3BlMGtxZHgxbDgifQ.BAO2QYMsaX-CmTanG19_GQ'
  });

  const handleIconChoice = (num) => {
    if (listOfEvents.wildfires.indexOf(num) !== -1) {
      return faFire
    } else if (listOfEvents.volcanoes.indexOf(num) !== -1) {
      return faMountain
    } else if (listOfEvents.icebergs.indexOf(num) !== -1) {
      return faIgloo
    } else if (listOfEvents.storms.indexOf(num) !== -1) {
      return faWind
    } else {
      return faQuestion
    }
  }
  return (
    <>
      <div className={styles['map-wrapper']}>
        <Map
          {...viewport}
          style="mapbox://styles/mapbox/satellite-v8"
          containerStyle={{
            height: '100vh',
            width: '100vw'
          }}
          >
          {
            data && listOfEvents && listOfEvents.allEvents.map(num =>
              <Marker

              key={uuid()}
              coordinates={[data.events[num].geometries[0].coordinates[0], data.events[num].geometries[0].coordinates[1]]}
              >
                <button

                  onClick={e => {
                    e.preventDefault()
                    setSelectedEvent(num)
                  }}
                >
                  <FontAwesomeIcon icon={handleIconChoice(num)} />
                </button>
              </Marker>
            )
          }
          {
            selectedEvent ? (
              <Popup
              coordinates={[data.events[selectedEvent].geometries[0].coordinates[0], data.events[selectedEvent].geometries[0].coordinates[1]]}
              >
                <div>
                  <h1 className={styles['eonet-colours']}>{data.events[selectedEvent].title}</h1>
                </div>
              </Popup>
            ) : (null)
          }

        </Map>
      </div>




    </>
  )
}

{/* { (listOfEvents.wildfires.indexOf(event) !== -1) ? (<FontAwesomeIcon icon={faFire} />) : (<FontAwesomeIcon icon={faMountain} />)} */}
export default Events
