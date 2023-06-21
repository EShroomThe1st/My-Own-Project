import React, { useEffect, useState } from 'react';
import { SubRedItem } from '../../../../../Share/NavOptions';
import styles from './BrainstormItems.module.css'
import { Grow } from '@mui/material';

const BrainstormItems = ({ ModuleCategory, setModuleCategory }) => {
    const [redItems, setRedItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
  
    useEffect(() => {
      if (ModuleCategory === 'Brainstorm') {
        const filteredItems = SubRedItem.filter(item => item.id === 'Brainstorm');
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
                alt=''
              />
              <span key={index} className={styles.ItemsName} id="openPopUp" onClick={() => openPopUp(options)}>
                {options.name}
              </span>
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
                    <span className={styles.close} onClick={closePopup}>
                      &times;
                    </span>
                    <div className={styles.content}>{selectedItem.info}</div>
                  </div>
              </Grow>
            </div>
          )}
        </div>
      </div>
    );
}

export default BrainstormItems