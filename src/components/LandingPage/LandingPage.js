import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CSS/LandingPage.module.css'


function LandingPage(){
    const [exploreChoice, setExploreChoice] = React.useState('explore...')
    const exploringOptions = ['Asteroids', 'Urgent Space News', 'Mars', 'Astronomy Photo of the Day (APOD)', 'Earth Observatory Natural Event Tracker (EONET)', 'Take me to the home page']
    return(
        <div className={styles['content-box']}>
            <div className={styles['logo']}></div>
            {/* <img src='../../../logo/spacenet-logo.png' alt='logo' width='150' height='150'/> */}
            <h1 className={styles['title']}>Welcome to spaceNET</h1>
            <br></br>
            <br></br>
            <div className={styles['dropdown-box']}>
                <h4 className={styles['sub-text']}>What would you like to explore?</h4>
                <DropdownButton id="dropdown-navigator" title={exploreChoice} className={styles['dropdown']} variant='dark'>
                    {
                        exploringOptions.map(option => {
                            return(
                                <>
                                <Dropdown.Item href={`#/${option}`}>{option}</Dropdown.Item>
                                </>

                            )
                        })
                    }

                </DropdownButton>

                <button
                    className={styles['go-button']}
                    onClick={() => {

                    }}
                >Go</button>


            </div>

        </div>
    )
}


export default LandingPage