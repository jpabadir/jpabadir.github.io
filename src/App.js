import me from './assets/picofme.jpeg';
import React, { useState } from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Outlet, NavLink } from 'react-router-dom';

function App() {
  const [navItems, setNavItems] = useState(['coding', 'content', 'music', 'spotify', 'korean', 'investing', 'blog']);
  // function handleDrawerToggle() {
  //   console.log('Test');
  // }
  return (
    <div className="App">
      <div style={{ backgroundColor: 'black' }}>
        <NavLink to="/">home</NavLink>
        {navItems.map((item) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: 'inline-block',
                padding: '10px 10px',
                color: isActive ? 'red' : '',
              };
            }}
            to={item}
          >
            {item}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default App;
