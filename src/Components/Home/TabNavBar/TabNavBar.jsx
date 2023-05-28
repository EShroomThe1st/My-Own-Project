import React from 'react'
import './TabNavBar.css'
import { ModuleNav } from '../../../Share/NavOptions'
import { Stack } from '@mui/material'

const TabNavBar = ({ModuleCategory, setModuleCategory}) => {
  return (
    <div className="ModuleNav">
            <Stack direction='row' >
            <ul>
            {ModuleNav.map((option)=>(
                <li key={option.name}><button className={option.name}
                onClick={() => setModuleCategory(option.name)}>{option.icon}{option.name}</button></li>
            ))}
            </ul>
        </Stack>
    </div>
  )
}

export default TabNavBar