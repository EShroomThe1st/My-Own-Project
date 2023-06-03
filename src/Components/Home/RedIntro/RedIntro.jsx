import React from 'react'
import { Box } from '@mui/material'
import styles from './RedIntro.module.css'

const RedIntro = () => {
return (
                <div className={styles.RedIntroduction}>
                    <img src='asset/img/Red-Img.png'></img>
                    <div className={styles.RedIntro}>
                        <h1>Red</h1>
                        <p className={styles.RedSub}>You want destruction</p>
                        <p>I might not be the one to judge</p>
                        <p>That's why items with such huge destructive capabilities are here</p>
                        <p>What you do with such items after you've bought it is none of my business</p>
                        <p>But if you want some advices</p>
                        <p>Be the better person than i am</p>
                    </div>
                </div>
  )
}

export default RedIntro