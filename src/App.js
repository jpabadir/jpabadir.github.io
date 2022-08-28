import React, { useState } from 'react';
import './App.css';
import { Outlet, NavLink } from 'react-router-dom';
import linkify from './helpers';

function App() {
  const navItems = [
    { name: 'home', link: '/' },
    { name: 'YouTube', link: 'https://www.youtube.com/channel/UCliwHW2THGTsKwNvNcF_Nlw' },
    { name: 'blog' },
    { name: 'Books I read'},
  ];
  return (
    <div className="App">
      <div style={{ backgroundColor: 'black' }}>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            style={({ isActive }) => {
              return {
                display: 'inline-block',
                padding: '10px 10px',
                color: isActive ? 'red' : '',
              };
            }}
            to={item.link? item.link : linkify(item.name)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default App;
