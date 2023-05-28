import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import styles from'./MainPage.module.css'
import Footer from "../Footer/Footer.jsx";
import Title from "../Title/Title.jsx";
import TabNavBar from "../TabNavBar/TabNavBar.jsx";
import General from "../General/General";
import Authors from "../Authors/Authors";
import Location from "../Location/Location";

const MainPage = () => {
    const [ModuleCategory, setModuleCategory]= useState('General');
    const renderComponent = (name) => {
        switch (name) {
          case 'General':
            return <General />;
          case 'Authors':
            return <Authors />;
          case 'Location':
            return <Location />;
          default:
            return null;
        }
      };

  return(
    <div className={styles.HomePage}>
      <NavBar/>
      <Title/>
      <div className={styles.Body}>
      <TabNavBar 
            ModuleCategory= {ModuleCategory}
            setModuleCategory = {setModuleCategory}
      />
      {renderComponent(ModuleCategory)}
      </div>
      <Footer/>
    </div>
  )
}

export default MainPage;