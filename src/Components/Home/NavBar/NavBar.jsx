import { Stack } from '@mui/material';

import {NavOptions} from '../../../Share/NavOptions';
import './NavBar.css'
import DropDown from '../../DropDown/DropDown'

const NavBar = () => (
    <Stack direction='row' className='Nav'>
        <Stack direction='row' >
            <ul>
            {NavOptions.map((option)=>(
                <li key={option.name}><button className={option.name} href="">{option.icon}{option.name}</button></li>
                // <li key={option.name}>
                //     <div className={option.name} >
                //     {option.icon}
                //     <DropDown name={`${option.name}`} items={option.items}/>
                //     </div>
                // </li>
            ))}
            </ul>
        </Stack>
        <Stack>
        <a href=''><img className='Icon' src='/asset/img/Page-Logo.png'/></a>
        </Stack>
        <Stack className='Search' direction='row'>
            <input type='text' id='SearchBox' name='SearchBox' placeholder='Search Box'></input>
            <img className='SearchIcon' src='/asset/img/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png'/>
        </Stack>
    </Stack>
)
export default NavBar