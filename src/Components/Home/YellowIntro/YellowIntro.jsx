import React from 'react'
import styles from './YellowIntro.module.css'

const YellowIntro = () => {
return (
                <div className={styles.YellowIntroduction}>
                    <div className={styles.YellowIntro}>
                        <h1>Yellow</h1>
                        <p className={styles.YellowSub}>You want knowledge</p>
                        <p>Understanding of what is this so called "life"</p>
                        <p>Pick the knowledge you want to learn but heed my warning</p>
                        <p>Some knowledge are better left unknown</p>
                        <p>Understanding yourself more</p>
                        <p>Who are you really?</p>
                    </div>
                    <img src='asset/img/Yellow-Img.png'></img>
                </div>
  )
}

export default YellowIntro