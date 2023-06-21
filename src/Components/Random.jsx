import React from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import styles from './Random.module.css';

const Random = () => {
  return (
    <div className={styles.Background} style={{ width:"1518px", display:"grid"}}>
    <NavBar/>
    <div className={styles.RandomLoading}>
      <h1>This page doesn't exist</h1>
      <img src='asset/img/Random2.png' alt="" className={`${styles.Random} ${styles.Spin}`}/>
      <p>Please go back</p>
    </div>
    <Footer/>
    </div>
  )
}

export default Random