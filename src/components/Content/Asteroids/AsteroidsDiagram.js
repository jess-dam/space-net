import React from 'react'
import styles from '../CSS/Asteroids.module.css'

function AsteroidsDiagram(){
    return(
        <>
            <h2>Diagram</h2>
            <svg>
                <circle cx="50" cy="50" r="40" fill="grey" />
            </svg>
            <div className={styles['earth']}></div>
        </>
    )
}


export default AsteroidsDiagram