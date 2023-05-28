import React from 'react'
import styles from './Location.module.css'

const Location = () => {
  return (
    <div className={styles.FullLocation}>
      <div className={styles.Location}>
      <h1>Visit the Shop</h1>
      <p>49 27 6d 20 73 74 69 6c 6c 20 68 65 72 65 </p>
        <img src='/asset/img/Shop-Front.png'/>
      <h1>See you there soon</h1>
      <p>44 6f 6e 27 74 20 77 6F 72 72 79</p>
      <img src="/asset/img/Shop-Checkout.png"/>
      <h1>Pray for goodluck</h1>
      <p>47 6f 20 6f 6e 20 77 69 74 68 20 69 74</p>
      <img src="/asset/img/Shop-Altar.png"/>
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