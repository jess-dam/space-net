import React, { useEffect, useState } from 'react'
import axios from 'axios'
import YouTube from 'react-youtube'
import styles from './../CSS/Apod.module.css'

function Apod () {
  const [data, setData] = useState(null)
  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        'https://api.nasa.gov/planetary/apod?api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4'
      )
      setData(results.data)
      console.log(results.data)
    }
    fetchData()
  }, [])
  return (
    <div>
      {
        data && (
          <div className={styles['wrapper']}>
            <div className={styles['info']}>
              <h1>Astronomy Picture of The Day</h1>
              <h3>Today is {data.date}</h3>
              <h2>{data.title}</h2>
              {/* add a feature to expand the full text on the click */}
              <h4>{data.explanation}</h4>
            </div>
            <div className={styles['picture']}>
              {
                (data && data.media === 'video') 
                ? (<YouTube
                      videoId={data.url.split('/')[(data.url.split('/').length - 1)]}
                      opts={opts}
                    />) 
                : (<img 
                    src={data.url}
                  ></img>)
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Apod