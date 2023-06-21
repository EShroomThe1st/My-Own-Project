import React from 'react'
import styles from './Message.module.css'
import { RandomMessage } from '../../../../../Share/NavOptions'
import { MarkAsUnread } from '@mui/icons-material'

const Message = () => {
  return (
    <div className={styles.RandomMess}>
    <div className={styles.RandomMessage}>
            <h1><MarkAsUnread className={styles.Icon}/>The Web said</h1>
            <p>{RandomMessage[Math.floor(Math.random() * RandomMessage.length)].Message}</p>
    </div>
</div>
  )
}

export default Message