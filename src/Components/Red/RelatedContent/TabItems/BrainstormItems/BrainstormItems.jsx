import React, { useEffect, useState, useRef } from 'react';
import { SubRedItem } from '../../../../../Share/NavOptions';
import styles from './BrainstormItems.module.css'
import { Grow } from '@mui/material';

const BrainstormItems = ({ ModuleCategory, setModuleCategory }) => {
    const [redItems, setRedItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const popupRef = useRef(null);
  
    useEffect(() => {
      if (ModuleCategory === 'Brainstorm') {
        const filteredItems = SubRedItem.filter(item => item.id === 'Brainstorm');
        setRedItems(filteredItems);
      } else {
        setRedItems([]);
      }
    }, [ModuleCategory]);
  
    const openPopUp = (item, event) => {
      event.stopPropagation();
      setSelectedItem(item);
      document.documentElement.style.overflow = 'hidden'; // Disable scrolling
    };
  
    const closePopup = () => {
      setSelectedItem(null);
      document.documentElement.style.overflow = ''; // Enable scrolling
    };
  
    useEffect(() => {
      if (selectedItem) {
        if (popupRef.current) {
          popupRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }, [selectedItem]);
  
    return (
      <div>
        <div className={styles.FullItems}>
          {redItems?.map((options, index) => (
            <div className={styles.Items} key={index}>
              <img
                src={options.img}
                className={styles.ItemsImage}
                onClick={(event) => openPopUp(options, event)}
                alt=''
              />
              <span key={index} className={styles.ItemsName} id="openPopUp" onClick={(event) => openPopUp(options, event)}>
                {options.name}
              </span>
            </div>
          ))}
        </div>
        <div>
          {selectedItem && (
            <div className={styles.overlay}>
              <Grow in={true} id="popup1" ref={popupRef}>
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