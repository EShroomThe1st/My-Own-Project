import React from 'react'
import styles from './Location.module.css'
import { locationinfo, locationlogo } from '../../../Share/NavOptions'

const Location = () => {
  return (
    <div className={styles.FullLocation}>
      <div className={styles.Location}>
      <div className={styles.LocationCard}>
        <h1>Visit the Shop</h1>
        <p>Build in ████, the shop is your best stop for anything weird.</p>
        <p>High quaility and premium artifacts to low tier garbage.</p>
        <p>You'll be pleasantly surprised</p>
          <img src='/asset/img/Shop-Front.png'/>
        <p>49 27 6d 20 73 74 69 6c 6c 20 68 65 72 65 </p>
      </div>
      <div className={styles.LocationCard}>
        <h1>See you there soon</h1>
        <p>A little stop like this on the hot desert of █████████</p>
        <p>Have little rest here and not worry about the heat</p>
        <p>Might as well buy something here too</p>
        <img src="/asset/img/Shop-Checkout.png"/>
        <p>44 6f 6e 27 74 20 77 6F 72 72 79</p>
      </div>
      <div className={styles.LocationCard}>
        <h1>Pray for goodluck</h1>
        <p>To the Bone Lord</p>
        <p>We shall accept their wisdoms</p>
        <p>Understand what they want</p>
        <img src="/asset/img/Shop-Altar.png"/>
        <p>47 6f 20 6f 6e 20 77 69 74 68 20 69 74</p>
        </div>
      </div>
      <h1 className={styles.MoreInfo}>For more info</h1>
      <div className={styles.LocationInfo}>
        <div className={styles.LocationDetails}>
          <ul>
            {locationinfo.map((option)=>(
                    <li key={option.id}>{option.message}</li>
            ))}
          </ul>
        </div>
      <div className={styles.LocationLogo}>
        <ul>
          {locationlogo.map((option)=>(
                  <li key={option.name}><img src={option.img}/></li>
          ))}
        </ul>
        <p>Follow us</p>
      </div>
      </div>
      <div className={styles.Owner}>
        <h1>Owner</h1>
        <img src="asset/img/Granny.png"/>
        <p>Granny</p>
      </div>
    </div>
  )
}

export default Location