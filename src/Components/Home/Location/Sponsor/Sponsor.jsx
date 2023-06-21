import React from 'react';
import styles from './Sponsor.module.css'

const Sponsor = () => {
  return (
    <div>
    <div className={styles.FullSponsored}>
        <h1 className={styles.SponsoredByHeader}>Sponsored By</h1>
        <div className={styles.SponsoredBy}>
          <div className={styles.HappyMilk}>
            <img src='asset/img/HappyMilk.PNG' alt=''/>
            <h1>Happy Milk</h1>
            <p>Fresh milk everyday?</p>
            <p>Subscription is always open</p>
          </div>
          <div className={styles.LHD}>
            <img src='asset/img/LHD.PNG'alt=''/>
            <h1>LHD</h1>
            <p>You like chocolate?</p>
            <p>We got every kind for every kind</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsor