import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import styles from'./MainPage.module.css'
import Footer from "../Footer/Footer.jsx";
import HomePage from "../Home/HomePage/HomePage";
import Random from "../Random";
import RedPage from "../Red/RedPage/RedPage";
import { useStateContext } from "../../context/StateContext";

const MainPage = () => {
  const [Category, setCategory]= useState('Home');
  const {setCurrentPage, selectedBackground}= useStateContext();
  useEffect(() => {
    setCurrentPage('Trinity')
    
  }, [])
  
  const renderComponent = (name) => {
      switch (name) {
        case 'Home':
          return <HomePage />;
        case 'Red':
          return <RedPage />;
        case 'Yellow':
          return <Random />;
        case 'Blue':
        return <Random />;
        default:
          return null;
      }
    };

  return(
    <div className={styles.Page} style={{backgroundImage: `url(${selectedBackground})`}}>
      <NavBar Category={Category}
          setCategory={setCategory}/>
    {renderComponent(Category)}
      <Footer/>
    </div>
  )
}

export default MainPage;