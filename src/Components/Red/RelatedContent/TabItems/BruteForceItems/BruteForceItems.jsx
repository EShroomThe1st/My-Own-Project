import React, { useEffect, useState } from 'react';
import { SubRedItem } from '../../../../../Share/NavOptions';
import styles from './BruteForceItems.module.css';
import { Grow } from '@mui/material';

const BruteForceItems = ({ ModuleCategory, setModuleCategory }) => {
  const [redItems, setRedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (ModuleCategory === 'Brute-Force') {
      const filteredItems = SubRedItem.filter(item => item.id === 'Brute-Force');
      setRedItems(filteredItems);
    } else {
      setRedItems([]);
    }
  }, [ModuleCategory]);

  const openPopUp = item => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <div className={styles.FullItems}>
        {redItems?.map((options, index) => (
          <div className={styles.Items} key={index}>
            <img
              src={options.img}
              className={styles.ItemsImage}
              onClick={() => openPopUp(options)}
            />
            <a key={index} className={styles.ItemsName} id="openPopUp" onClick={() => openPopUp(options)}>
              {options.name}
            </a>
          </div>
        ))}
      </div>
      <div>
        {selectedItem && (
          <div id="popup1" className={styles.overlay}>
            <Grow in={true}>
                <div className={styles.popup}>
                  <img src={selectedItem.img} alt="" />
                  <h1>{selectedItem.name}</h1>
                  <a className={styles.close} onClick={closePopup}>
                    &times;
                  </a>
                  <div className={styles.content}>{selectedItem.info}</div>
                </div>
            </Grow>
          </div>
        )}
      </div>
    </div>
  );
};

export default BruteForceItems;