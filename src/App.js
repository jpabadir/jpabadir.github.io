import React, { useState } from 'react';
import './App.css';
import { Outlet, NavLink } from 'react-router-dom';
import linkify from './helpers';

function App() {
  const navItems = [{ name: 'home', link: '/' }, { name: 'YouTube', link: 'https://www.youtube.com/channel/UCliwHW2THGTsKwNvNcF_Nlw' }, { name: 'blog' }, { name: 'Books I read' }];
  return (
    <div className="App">
      <div className="navbar">
        {navItems.map((item) => {
          return item.link && item.link.includes('https') ? (
            // eslint-disable-next-line react/jsx-no-target-blank
            <a key={item.name} target="_blank" rel="noopener" className="NavLink" href={item.link}>
              {item.name}
            </a>
          ) : (
            <NavLink key={item.name} to={item.link ? item.link : linkify(item.name)} className="NavLink">
              {item.name}
            </NavLink>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}

export default App;
