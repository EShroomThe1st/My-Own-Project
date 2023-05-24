import React from 'react'
import { Box } from '@mui/material'
import styles from './BlueIntro.module.css'

const BlueIntro = () => {
    return (
    <div className={styles.BlueIntroduction}>
            <div className={styles.BlueIntroL}>
                <h1>Blue</h1>
                <p className={styles.BlueSubL}>You want to connect</p>
                <p>You want to know people that actually love you</p>
                <p>You are strict with everyone but you not too harsh</p>
                <p>Through everything you have gone through</p>
                <p>You just want to stay and enjoy what time you have left</p>
                <p>Go ahead</p>
            </div>
                <img src='asset/img/Untitled61_20230522221617.png'></img>
                <div className={styles.BlueIntroR}>
                    <h1>Blue</h1>
                    <p className={styles.BlueSubR}>You want to protect them</p>
                    <p>You throw yourself in front of the line</p>
                    <p>Absorbing all their pain</p>
                    <p>Giving them the advice and voice they needed</p>
                    <p>If your pain means their safety</p>
                    <p>So be it</p>
                </div>
    </div>
    )
}

export default BlueIntro