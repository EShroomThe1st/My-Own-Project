import React, { useEffect, useState } from "react";
import RedNav from "../RedNav/RedNav";
import styles from "./RedPage.module.css";
import RedTitle from "../RedTitle/RedTitle";
import { useStateContext } from "../../../context/StateContext";
import { RedItems, RedMessages } from "../../../Share/NavOptions";

const RedPage = () => {
  const [ModuleCategory, setModuleCategory] = useState("Default");
  const [redItems, setRedItems] = useState(RedItems); // Use state variable for redItems
  const [redMessages, setRedMessages] = useState(RedMessages)
  const { setCurrentPage } = useStateContext();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setCurrentPage("Red");
  }, []);

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
    <div className={styles.RedBackground}>
      <RedTitle />
      <div className={styles.RedBody}>
        <RedNav
          ModuleCategory={ModuleCategory}
          setModuleCategory={setModuleCategory}
        />
        <h1 style={{fontFamily:"Righteous", color:"#FC5353", textAlign:"center"}}>A clone of something</h1>
        <p style={{fontFamily:"Righteous", color:"#FC5353", width:"50rem", alignSelf:"center", textAlign:"center"}}>How would feel if you are something that is not meant to be? A clone of someone else yet you have a duty far greater than you can chew. Your duty only start when you die, would you take it and save the world or live for yourself?</p>
        <h2 style={{fontFamily:"Righteous", color:"#FC5353", textAlign:"center", marginBottom:"4rem"}}>I'm not here to judge</h2>
        <div className={styles.FullItems}>
          {redItems?.map((options, index) => (
            <div className={styles.Items} key={index}>
              <img
                src={options.img}
                className={styles.ItemsImage}
                onClick={() => openPopUp(options)}
              />
              <a
                key={index}
                className={styles.ItemsName}
                href="#popup1" id="openPopUp" onClick={() => openPopUp(options)}
              >
                {options.name}
              </a>
            </div>
          ))}
        </div>
        <div>
            {selectedItem && (
              <div id="popup1" className={styles.overlay}>
                <div className={styles.popup}>
                  <img src={selectedItem.img} alt="" />
                  <h1>{selectedItem.name}</h1>
                  <a className={styles.close} href="#close" onClick={closePopup}>
                    &times;
                  </a>
                  <div className={styles.content}>{selectedItem.info}</div>
                </div>
              </div>
            )}
        </div>
        {redMessages?.map((options, index) => (
            <div className={styles.RedMessages} key={index}>
               { options.id === ModuleCategory && (
                <>
                <h1 className={styles.RedMessagesHeader}>{options.header}</h1>
                <p className={styles.RedMessagesContent}>{options.content}</p>
                </>
                )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default RedPage;
