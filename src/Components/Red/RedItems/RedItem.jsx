import React, { useState, useEffect, useRef } from "react";
import styles from "./RedItem.module.css";
import { RedItems } from "../../../Share/NavOptions";
import { Grow } from "@mui/material";

const RedItem = ({ ModuleCategory, setModuleCategory }) => {
  const [redItems, setRedItems] = useState(RedItems); // Use state variable for redItems
  const [selectedItem, setSelectedItem] = useState(null);
  const popupRef = useRef(null);

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
              alt=""
            />

            <span
              key={index}
              className={styles.ItemsName}
              id="openPopUp"
              onClick={(event) => openPopUp(options, event)}
            >
              {options.name}
            </span>
          </div>
        ))}
      </div>

      {selectedItem && (
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
      )}
    </div>
    
  );
};

export default RedItem;
