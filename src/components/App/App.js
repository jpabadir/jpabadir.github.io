import React from 'react';
import './App.css';
import { Outlet, NavLink } from 'react-router-dom';
import { linkify } from '../../helpers';
import Footer from '../Footer/Footer'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App(props) {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'YouTube', link: 'https://www.youtube.com/channel/UCliwHW2THGTsKwNvNcF_Nlw' },
    { name: 'Articles' },
    { name: "Books I've read", link: 'books-i-read' },
    { name: "Countries I've been to", link: 'countries' },
    { name: 'Investment Portfolio' },
  ];
    const drawerWidth = 240;

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item.name} sx={{ color: '#fff' }}>
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    );
  }

      {/* <div className="customNavbarClass">
        {navItems.map((item) => {
          return item.link && item.link.includes('https') ? (
            // eslint-disable-next-line react/jsx-no-target-blank
            <a key={item.name} target="_blank" rel="noopener" className="Link NavLink" href={item.link}>
              {item.name}
            </a>
          ) : (
            <NavLink key={item.name} to={item.link ? item.link : linkify(item.name)} className="Link NavLink">
              {item.name}
            </NavLink>
          );
        })}
      </div>
      <div className="Content">
        <Outlet />
      </div>
      <Footer /> */}
    // </div>
//   );
// }

export default App;
