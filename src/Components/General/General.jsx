import React from 'react'
import Banner from "../Banner/Banner.jsx";
import { Images, ModuleNav } from "../../Share/NavOptions";
import Introduction from "../Introduction/Introduction.jsx";
import RedIntro from "../RedIntro/RedIntro.jsx";
import YellowIntro from "../YellowIntro/YellowIntro.jsx";
import BlueIntro from "../BlueIntro/BlueIntro.jsx";
import styles from "./General.module.css"

const General = () => {
  return (
    <div>
        <Banner/>
        <Introduction/>
        <h1 className={styles.AboutCategory}>About the Categories</h1>
        <RedIntro/>
        <YellowIntro/>
        <BlueIntro/>
    </div>
  )
}

export default General