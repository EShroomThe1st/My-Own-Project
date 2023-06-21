import React from "react";
import styles from './Intro.module.css'

const Intro = () => {
  return (
    <div className={styles.FullIntro}>
      <div className={styles.Introduction}>
        <h1>Welcome</h1>
        <p>
          I don't know how or why but you are here so i'll give you the basics
        </p>
        <p>You are here to buy something</p>
        <p>
          I don't know if i even got something you like but you can feel free to
          look around
        </p>
        <p>I don't charge time here</p>
      </div>
    </div>
  );
};

export default Intro;
