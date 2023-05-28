// import React, {useState} from 'react';
// import { Button, Menu, MenuItem, Grid } from '@mui/material';
// import { Link } from 'react-router-dom';
// import './DropDown.css'


// const HoverDropdown = ({name, items}) =>{
// console.log(items)
//     const [anchorEl, setAnchorEl]= useState(null);

//   const handleMouseEnter = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMouseLeave = () => {
//     setAnchorEl(null);
//   };



//     const open = Boolean(anchorEl);

//     return (
//       <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//         <Button onMouseEnter={handleMouseEnter} aria-controls="dropdown-menu" aria-haspopup="true">
//           {name}
//         </Button>
//         <Menu onMouseLeave={handleMouseLeave}
//           id="dropdown-menu"
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleMouseLeave}
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'left',
//           }}
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'left',
//           }}
//           getContentAnchorEl={null}

//           disableScrollLock
//         >
//             <Grid container columns={2} rowSpacing={2} columnSpacing={2}>
          
//           {items.map((option)=>(
//                 <Grid item>
//                 <MenuItem component={Link} to='/Random' onClick={handleMouseLeave} key={option}>{option}</MenuItem>
//                 </Grid>
//             ))}
//                 </Grid>

//         </Menu>
//       </div>
//     );
//   }


// export default HoverDropdown;