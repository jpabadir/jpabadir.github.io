import React from 'react';
import './App.css';
import { Outlet, NavLink } from 'react-router-dom';
import linkify from '../../helpers';

function App() {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'YouTube', link: 'https://www.youtube.com/channel/UCliwHW2THGTsKwNvNcF_Nlw' },
    { name: 'Articles' },
    { name: "Books I've read", link: 'books-i-read' },
    { name: "Countries I've been to", link: 'countries' },
  ];
  return (
    <div className="App">
      <div className="customNavbarClass">
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
    </div>
  );
}

export default App;
