import React from 'react'
import styles from './Introduction.module.css'
import { Stack } from '@mui/material'
import { Book } from '@mui/icons-material'
import { RandomMessage } from '../../Share/NavOptions'
import { MarkAsUnread } from '@mui/icons-material'

const Introduction = () => {
    return (
    <div className={styles.Start}>
    <div className={styles.FullPolicy}>
            <div className={styles.Policy}>
            <h1><Book className={styles.Icon}/>Policy</h1>
            <p>Try to pay for what you're buying</p>
            <p>Try to look for what you want</p>
            </div>
        </div>
        <div className={styles.FullIntro}>
            <div className={styles.Introduction}>
                <h1>Welcome</h1>
                <p>I don't know how or why but you are here so i'll give you the basics</p>
                <p>You are here to buy something</p>
                <p>I don't know if i even got something you like but you can feel free to look around</p>
                <p>I don't charge time here</p>
            </div>
        </div>
        <div className={styles.RandomMess}>
            <div className={styles.Message}>
                    <h1><MarkAsUnread className={styles.Icon}/>The Web said</h1>
                    <p>{RandomMessage[Math.floor(Math.random() * RandomMessage.length)].Message}</p>
            </div>
        </div>
    </div>
  )
}

export default Introduction