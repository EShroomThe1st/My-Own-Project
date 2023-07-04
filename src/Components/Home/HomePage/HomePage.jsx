import React, { useState, useEffect} from "react";
import TabNavBar from "../TabNavBar/TabNavBar";
import Title from "../Title/Title";
import General from "../General/General";
import Authors from "../Authors/Authors";
import Location from "../Location/Location";
import styles from "./HomePage.module.css";
import { useStateContext } from "../../../context/StateContext";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

const HomePage = () => {
  const [ModuleCategory, setModuleCategory] = useState("General");
  const { setCurrentPage, selectedBackground } = useStateContext();

  useEffect(() => {
    setCurrentPage("Trinity");
  }, [setCurrentPage]);

  const renderComponent = (name) => {
    switch (name) {
      case "General":
        return <General />;
      case "Authors":
        return <Authors />;
      case "Location":
        return <Location />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.HomePage} style={{ backgroundImage: `url(${selectedBackground})`, width: "1526px", margin: "0 auto" , overflowY: "auto" }}>
      <NavBar />
      <Title />
      <div className={styles.Body}>
        <TabNavBar ModuleCategory={ModuleCategory} setModuleCategory={setModuleCategory} />
        {renderComponent(ModuleCategory)}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;