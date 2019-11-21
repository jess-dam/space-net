import React, { useRef, useEffect} from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CSS/LandingPage.module.css'

import { useHistory } from 'react-router-dom'

import LandingPageText from './LandingPageText'
import RocketOne from './../../parallax/spacenet-rocket1.png'
import RocketTwo from './../../parallax/spacenet-rocket2.png'
import Satellite from './../../parallax/spacenet-satellite.png'
import Logo from './CSS/spacenet-logo.png'

import Parallax from 'parallax-js'
import { TweenMax, TimelineMax, Power0 } from 'gsap'


function LandingPage(){

  const [exploreChoice, setExploreChoice] = React.useState('explore...')
  const exploringOptions = ['Asteroids', 'Urgent Space News', 'Mars', 'Astronomy Photo of the Day (APOD)', 'Earth Observatory Natural Event Tracker (EONET)', 'Take me to the home page']
  const history = useHistory()

  let scene = useRef(null)
  let title = useRef(null)
  let subText = useRef(null)
  let pageChoice = useRef(null)

  let layerOne = useRef(null)
  let layerTwo = useRef(null)
  let layerThree = useRef(null)
  let layerFour = useRef(null)


  useEffect(() => {
    let parallax = new Parallax(scene)
    let Timeline = new TimelineMax()
    Timeline.to(title, 2, {y: "-23vw", opacity: 1, ease: Power0.easeOne})
    Timeline.to(subText, 2, {y: "-23vw", opacity: 1, ease: Power0.easeTwo}, "-=2")
    Timeline.to(layerOne, 2, {opacity: 1, y: '20vh', x:'-20vw', ease: Power0.easeTwo, delay: 2})
    Timeline.to(layerTwo, 2, {opacity: 1, y: '-20vh', ease: Power0.easeTwo}, "-=2")
    Timeline.to(layerThree, 2, {opacity: 1, scaleX: 0.5, scaleY: 0.5, ease: Power0.easeTwo}, "-=2")
    Timeline.to(layerFour, 2, {opacity: 1, ease: Power0.easeTwo}, "-=2")
    Timeline.to(pageChoice, 2, {opacity: 1, ease: Power0.easeTwo, delay: 2})

    Timeline.play()
  })
  return(
    <div>
      <div className={styles['background']}>
        <div ref={el => scene = el} id="scene" className={styles['scene']}>
          <div data-depth="0.5"><h1 ref={el => title = el} className={styles['title']}>Welcome to spaceNET</h1></div>
          <div data-depth="0.75"><h4 ref={el => subText = el} className={styles['sub-text']}>What would you like to explore?</h4></div>
          <div  className={styles['layer1']} data-depth="0.2"><img ref={el => layerOne = el}  src={RocketOne}/></div>
          <div  className={styles['layer2']} data-depth="0.4"><img ref={el => layerTwo = el}  src={RocketTwo}/></div>
          <div  className={styles['layer3']} data-depth="0.6"><img ref={el => layerThree = el} src={Satellite}/></div>
          <div  className={styles['layer4']} data-depth="0.2"><img ref={el => layerFour = el} src={Logo}/></div>
        </div>
        <div ref={el => pageChoice = el}  className={styles['page-choice']}>
          <DropdownButton id="dropdown-navigator" title={exploreChoice} className={styles['dropdown']} variant='dark'>
              {
                  exploringOptions.map(option =>
                      <>
                      <Dropdown.Item href={`#/${option}`} onClick={() => {setExploreChoice(option)}}>{option}</Dropdown.Item>
                      </>

                  )
              }
          </DropdownButton>

          <button
            className={styles['go-button']}
            onClick={() => {
                switch(exploreChoice){
                    case 'Asteroids':
                        history.push(`/asteroids`)
                        break;
                    case (exploringOptions[1]):
                        history.push(`/urgent`)
                        break;

                    case (exploringOptions[2]):
                        history.push(`/mars`)
                        break;

                    case (exploringOptions[3]):
                        history.push(`/apod`)
                        break;

                    case (exploringOptions[4]):
                        history.push(`/eonet`)
                        break;


                    default:
                        console.log(exploreChoice)
                        console.log(exploringOptions[0])
                        history.push(`/homePage`)
                }
                // history.push(`/${option}`)
            }}
        >Go</button>
        </div>
      </div>
    </div>
  )
}


export default LandingPage