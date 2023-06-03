import { Stack } from '@mui/material';

import {NavOptions} from '../../Share/NavOptions';
import './NavBar.css'

const NavBar = ({Category, setCategory}) => (
    <Stack direction='row' className='Nav'>
        <Stack direction='row' >
            <ul>
            {NavOptions.map((option)=>(
                <li key={option.name}><button className={option.name} 
                onClick={() => setCategory(option.name)}>{option.icon}{option.name}</button></li>
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