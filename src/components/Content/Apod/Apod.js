import React, { useEffect, useState } from 'react'
import axios from 'axios'
import YouTube from 'react-youtube'
import styles from './../CSS/Apod.module.css'


function Apod () {
  const [data, setData] = useState(null)
  const [shortText, setShortText] = useState(null)

  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }
  const [fullText, setFulltext] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        'https://api.nasa.gov/planetary/apod?api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4'
      )
      setData(results.data)
      console.log(results.data)
      const tempText = results.data.explanation.substring(0, 70)
      setShortText(tempText)
    }
    fetchData()
  }, [])

  console.log(fullText)
  return (
    <div>
      {
        data && (
          <div className={styles['wrapper']}>
            <div className={styles['info']}>
              <div className={styles['test']}>
                <h1>Astronomy Picture of The Day</h1>
                <h3>Today is {data.date}</h3>
                <h2>{data.title}</h2>
                {
                  (fullText) ? (<h4>{data.explanation}</h4>) : (<h4>{shortText}...(<span onClick={() => setFulltext(true)}>Click here to read more</span>)</h4>)
                }
              </div>
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