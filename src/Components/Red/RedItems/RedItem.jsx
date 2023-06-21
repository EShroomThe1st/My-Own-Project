import React, {useState, useEffect} from 'react'
import styles from './RedItem.module.css'
import { RedItems } from '../../../Share/NavOptions';
import { Grow } from '@mui/material';


const RedItem = ({ModuleCategory, setModuleCategory}) => {
    const [redItems, setRedItems] = useState(RedItems); // Use state variable for redItems
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        if (ModuleCategory !== "Default") {
          const filteredItems = RedItems.filter(
            (item) => item.id === ModuleCategory
          );
          setRedItems(filteredItems); // Update redItems state with filtered items
        } else {
          setRedItems(RedItems); // Set redItems state to original array when ModuleCategory is "Default"
        }
      }, [ModuleCategory]);
    
      const openPopUp = (item) => {
        setSelectedItem(item);
      }
    
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
            <a
              key={index}
              className={styles.ItemsName} id="openPopUp" onClick={() => openPopUp(options)}
              href=''
            >
              {options.name}
            </a>
          </div>
        ))}
          </div>

          {selectedItem && (

            <div id="popup1" className={styles.overlay}>
              
              <Grow in={true}>
                <div className={styles.popup}>
                  <img src={selectedItem.img} alt="" />
                  <h1>{selectedItem.name}</h1>
                  <a className={styles.close} href='' onClick={closePopup}>
                    &times;
                  </a>
                  <div className={styles.content}>{selectedItem.info}</div>
                </div>
              </Grow>
            </div>
          )}
    </div>
  )
}

export default RedItem