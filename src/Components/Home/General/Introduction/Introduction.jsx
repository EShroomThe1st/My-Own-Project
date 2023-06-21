import React from 'react'
import styles from './Introduction.module.css'
import { RandomMessage } from '../../../../Share/NavOptions'
import { MarkAsUnread } from '@mui/icons-material'
import Policy from './Policy/Policy'
import Intro from './Intro/Intro'
import Message from './Message/Message'

const Introduction = () => {
    return (
    <div className={styles.Start}>
        <Policy/>
        <Intro/>
        <Message/>
    </div>
  )
}

export default Introduction