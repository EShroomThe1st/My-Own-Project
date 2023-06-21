import React, {useState} from 'react'
import { File } from '../../../../Share/NavOptions';
import styles from './LocationStaff.module.css'
import { Grow } from '@mui/material';

const LocationStaff = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const openPopUp = (item) => {
      setSelectedItem(item);
    }
  
    const closePopup = () => {
      setSelectedItem(null);
    };
  return (
    <div>
              <div className={styles.FullStaff}>
        <div className={styles.StaffHeader}>
          <h1>Staffs</h1>
        </div>
        <div className={styles.StaffAbout}>
          <img src='asset/img/StaffImg.jpg' className={styles.StaffImages} alt=''/>
          <div className={styles.Context}>
            <p>A list of the most trusted workers. The main brain power behind the shop. Without them, we wouldn't be here.</p>
            <p className={styles.Code}>54 72 75 73 74 20 74 68 65 6d 20 6d 6f 72 65</p>
          </div>
          <img src='asset/img/Mastermind.jpg' className={styles.Mastermind} alt=''/>
        </div>
        <div className={styles.FileHolder}>
          {File?.map((options, index) => (
                <div className={styles.File} key={index} onClick={() => openPopUp(options)}>
                  <p>
                    {options.name}
                  </p>
                  <img src={options.img} className={styles.FileImg} alt=''/>
                </div>
              ))}
        </div>
        {selectedItem && (
              <div id="popup1" className={styles.overlay}>
                <Grow in={true}>
                    <div className={styles.popup}>
                      <div>
                        <img src={selectedItem.porfolio} alt="" />
                        <h1>{selectedItem.name}</h1>
                        <h2>{selectedItem.role}</h2>
                        <span className={styles.close} href='' onClick={closePopup}>
                          &times;
                        </span>
                          <div className={styles.content}>{selectedItem.info}</div>
                          <div className={styles.content}>{selectedItem.info2}</div>
                          <div className={styles.content}>{selectedItem.info3}</div>
                          <div className={styles.content}>{selectedItem.info4}</div>
                      </div>
                        <div className={styles.Page}>
                          <div className={styles.content}>{selectedItem.info5}</div>
                          <div className={styles.Skill}>Skill</div>
                          <div className={styles.content}>{selectedItem.info6}</div>
                          <div className={styles.content}>{selectedItem.info7}</div>
                          <div className={styles.content}>{selectedItem.info8}</div>
                          <div className={styles.content}>{selectedItem.info9}</div>
                          <div className={styles.content}>{selectedItem.info10}</div>
                        </div>
                    </div>
                </Grow>
              </div>
            )}
      </div>
    </div>
  )
}

export default LocationStaff