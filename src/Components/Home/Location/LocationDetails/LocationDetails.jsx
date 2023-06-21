import React from "react";
import styles from './LocationDetails.module.css'

const LocationDetails = () => {
  return (
    <div>
      <div className={styles.Location}>
        <div className={styles.LeftLocationCard}>
          <h1>Visit the Shop</h1>
          <p>Build in ████, the shop is your best stop for anything weird.</p>
          <p>High quaility and premium artifacts to low tier garbage.</p>
          <p>You'll be pleasantly surprised</p>
          <img src="/asset/img/Shop-Front.png" alt=""/>
          <p className={styles.Code}>
            49 27 6d 20 73 74 69 6c 6c 20 68 65 72 65{" "}
          </p>
        </div>
        <div className={styles.MidLocationCard}>
          <h1>See you there soon</h1>
          <p>A little stop like this on the hot desert of █████████</p>
          <p>Have little rest here and not worry about the heat</p>
          <p>Might as well buy something here too</p>
          <img src="/asset/img/Shop-Checkout.png" alt=""/>
          <p className={styles.Code}>44 6f 6e 27 74 20 77 6F 72 72 79</p>
        </div>
        <div className={styles.RightLocationCard}>
          <h1>Pray for goodluck</h1>
          <p>To the Bone Lord</p>
          <p>We shall accept their wisdoms</p>
          <p>Understand what they want</p>
          <img src="/asset/img/Shop-Altar.png" alt=""/>
          <p className={styles.Code}>47 6f 20 6f 6e 20 77 69 74 68 20 69 74</p>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
