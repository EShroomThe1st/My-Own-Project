import { Stack } from '@mui/material';
import {NavOptions} from '../../Share/NavOptions';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => (
    <Stack direction='row' className='Nav'>
        <Stack direction='row' >
            <ul>
            {NavOptions.map((option)=>(
                <li key={option.name}><Link className={option.name} 
                to={option.link}>{option.icon}{option.name}</Link></li>
            ))}
            </ul>
        </Stack>
        <Stack>
        <a href='home'><img className='Icon' src='/asset/img/Page-Logo.png' alt=''/></a>
        </Stack>
        <Stack className='Search' direction='row'>
            <input type='text' id='SearchBox' name='SearchBox' placeholder='Search Box'></input>
            <img className='SearchIcon' src='/asset/img/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png' alt=''/>
        </Stack>
    </Stack>
)
export default NavBar