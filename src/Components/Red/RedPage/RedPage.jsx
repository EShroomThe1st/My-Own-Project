import React, { useEffect, useState } from "react";
import RedNav from "../RedNav/RedNav";
import styles from "./RedPage.module.css";
import RedTitle from "../RedTitle/RedTitle";
import { useStateContext } from "../../../context/StateContext";
import { RedMessages } from "../../../Share/NavOptions";
import RedTabContents from "../RelatedContent/RedTabContent/RedTabContents";
import RedItems from "../RedItems/RedItem";
import NavBar from "../../NavBar/NavBar";
import RedAbout from "../RelatedContent/RedAbout/RedAbout";
import Footer from "../../Footer/Footer";

const RedPage = () => {
  const [ModuleCategory, setModuleCategory] = useState("Default");
  const { setCurrentPage, selectedBackground } = useStateContext();

  useEffect(() => {
    setCurrentPage("Red");
  }, [setCurrentPage]);

  return (
    <div className={styles.RedBackground} style={{ backgroundImage: `url(${selectedBackground})`, width: "1518px" }}>
      <NavBar />
      <RedTitle />
      <div className={styles.RedBody}>
        <RedNav ModuleCategory={ModuleCategory} setModuleCategory={setModuleCategory} />
        <h1 style={{ fontFamily: "Righteous", color: "#FC5353", textAlign: "center" }}>A clone of something</h1>
        <p style={{ fontFamily: "Righteous", color: "#FC5353", width: "50rem", alignSelf: "center", textAlign: "center" }}>How would you feel if you are something that is not meant to be? A clone of someone else yet you have a duty far greater than you can chew. Your duty only starts when you die, would you take it and save the world or live for yourself?</p>
        <h2 style={{ fontFamily: "Righteous", color: "#FC5353", textAlign: "center", marginBottom: "4rem" }}>I'm not here to judge</h2>
        <RedItems ModuleCategory={ModuleCategory} setModuleCategory={setModuleCategory} />
        <div style={{ display: 'grid' }}>
          <h2 style={{ fontFamily: "Righteous", color: "#FC5353", textAlign: "center", backgroundColor: "black", borderRadius: "2rem", width: "22rem", display: "flex", justifySelf: "center", padding: "1rem" }}>Related Topics</h2>
        </div>
        <div className={styles.RelatedTab}>
          <RedTabContents ModuleCategory={ModuleCategory} setModuleCategory={setModuleCategory} />
          <RedAbout />
        </div>

        {redMessages?.map((options, index) => (
          <div className={styles.RedMessages} key={index}>
            {options.id === ModuleCategory && (
              <>
                <h1 className={styles.RedMessagesHeader}>{options.header}</h1>
                <p className={styles.RedMessagesContent}>{options.content}</p>
              </>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default RedPage;
