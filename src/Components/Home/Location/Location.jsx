import React, {useState} from 'react'
import styles from './Location.module.css'
import LocationInfo from './LocationInfo/LocationInfo';
import LocationDetails from './LocationDetails/LocationDetails';
import LocationStaff from './LocationStaff/LocationStaff';
import Sponsor from './Sponsor/Sponsor';

const Location = () => {
  return (
    <div className={styles.FullLocation}>
      <LocationDetails/>
      <h1 className={styles.MoreInfo}>For more info</h1>
      <LocationInfo/>
      <Sponsor/>
      <LocationStaff/>
      <div className={styles.Owner}>
        <h1>Owner</h1>
        <img src="asset/img/Granny.png" alt=''/>
        <p>Granny</p>
      </div>
    </div>
  )
}

export default Location