import { Stack } from '@mui/material';
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';
import { Brightness7, BusinessCenter, DeviceHub, Home } from '@mui/icons-material';

const NavBar = () => (
    <Stack direction='row' className={styles.Nav}>
        <Stack direction='row' >
            <ul>
                <li><Link className={styles.Home}
                to="/home"><Home/>Home</Link></li>
                
                <li><Link className={styles.Red} 
                to="/red"><Brightness7/>Red</Link></li>
                
                <li><Link className={styles.Yellow} 
                to="/yellow"><DeviceHub/>Yellow</Link></li>
                
                <li><Link className={styles.Blue}
                to="/blue"><BusinessCenter/>Blue</Link></li>
            </ul>
        </Stack>
        <Stack>
        <a href='home'><img className={styles.Icon} src='/asset/img/Page-Logo.png' alt=''/></a>
        </Stack>
        <Stack className={styles.Search} direction='row'>
            <input type='text' id='SearchBox' name='SearchBox' placeholder='Search Box'></input>
            <img className={styles.SearchIcon} src='/asset/img/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png' alt=''/>
        </Stack>
    </Stack>
)
export default NavBar