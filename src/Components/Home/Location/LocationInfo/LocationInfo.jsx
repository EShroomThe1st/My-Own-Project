import React from "react";
import styles from './LocationInfo.module.css';
import { locationinfo, locationlogo } from "../../../../Share/NavOptions";

const LocationInfo = () => {
  return (
    <div>
      <div className={styles.LocationInfo}>
        <div className={styles.LocationDetails}>
          <ul>
            {locationinfo.map((option) => (
              <li key={option.id}>{option.message}</li>
            ))}
          </ul>
        </div>
        <div className={styles.LocationLogo}>
          <ul>
            {locationlogo.map((option) => (
              <li key={option.name}>
                <img src={option.img} className={styles.Icon} />
              </li>
            ))}
          </ul>
          <p>Follow us</p>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
