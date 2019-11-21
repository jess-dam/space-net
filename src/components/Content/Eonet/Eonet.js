import React from 'react'
import Events from './Events/Events'

import styles from '../CSS/Eonet.module.css'


function Eonet () {

  return (
    <div>
      <Events />
      <div className={styles['legend']}>
        <h1>EONET - Earth Observatory Natural Event Tracker</h1>
        <p>View current wildfires and volcanic eruptions occuring globally with this interavtive map by clicking on the various icons</p>
        <p>Scroll to zoom, drag to move around the map</p>
      </div>

    </div>
  )
}

export default Eonet