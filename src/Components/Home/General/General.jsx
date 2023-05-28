import React from 'react'
import Banner from "../Banner/Banner.jsx";
import { Images, ModuleNav } from "../../../Share/NavOptions.js";
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
        <div className={styles.Finally}>
          <h2>Before you explore</h2>
          <p>Just remember to tell no one about this</p>
          <p>Keep this to yourself</p>
          <h2>HAVE FUN</h2>
        </div>
    </div>
  )
}

export default General