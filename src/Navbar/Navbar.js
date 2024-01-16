import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Drawer from '@mui/material/Drawer';
import photo from './logo.png'
import photo1 from './colo_text.png'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import App from '../notification/App';
import { useState,useEffect } from 'react';
import Sidebar from '../Home/sidebar1'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const wideScreenStyles = {
    // Your styles for 1280px screen and above
    // For example:
    width:"95%", 
  };
  const wideScreenStyles1 = {
    // Your styles for 1280px screen and above
    // For example:
    visibility:"visible" ,
    marginLeft:"12px"
  };
  const componentStyles = {
    backgroundColor:"white", 
    color:"Black", 
    marginLeft:"21%",
     width:"79%", 
     marginRight:"1%", 
     marginTop:"5px",
      borderRadius:"3px"
  };
  const componentStyles1 = {
    visibility: "hidden",
    width:"1%",
    backgroundColor:"none"
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const buttonStyles = {
    marginTop: '10px',
    display: windowWidth < 1280 ? 'block' : 'none',
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <Sidebar/>
    </Box>
  );

  return (
    <AppBar position="fixed" className='appbar' style={{ ...componentStyles, ...(window.innerWidth <= 1280?wideScreenStyles:componentStyles) }}>
      <Container style={{padding:"0", margin:"0"}} className='navbar' >
        <Toolbar disableGutters className='flex justify-between w-full items-center'>
        <div className='flex'>
        {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{ ...componentStyles1, ...(window.innerWidth <= 1280?wideScreenStyles1:componentStyles1) }} >
          <FontAwesomeIcon icon={faBars} className='text-black  text-2xl  '  /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
        <div className='flex' style={window.innerWidth<=1280?{marginLeft:""}:{marginLeft:"-2.75rem"}}>
      
</div>
        </div>
        <div className='mb-10 w-1/12'>
         <App />

         </div>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;