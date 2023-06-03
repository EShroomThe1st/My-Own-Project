import React from 'react'
import { RedModuleNav } from '../../../Share/NavOptions'
import './RedNav.css'

const RedNav = ({ModuleCategory, setModuleCategory}) => {
  return (
    <div className='FullRedNav'>
        <ul className='RedNavigation'>
            {RedModuleNav.map((option)=>(
                <li key={option.name}><button className={option.class}
                onClick={() => setModuleCategory(option.class)}
                >{option.icon}{option.name}</button></li>
            ))}
        </ul>
    </div>
  )
}

export default RedNav