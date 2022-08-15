import React, { useState } from 'react';
import './App.css';
import { Outlet, NavLink } from 'react-router-dom';

function App() {
  const navItems = ['YouTube', 'blog'];
  return (
    <div className="App">
      <div style={{ backgroundColor: 'black' }}>
        <NavLink
          style={({ isActive }) => {
            return {
              display: 'inline-block',
              padding: '10px 10px',
              color: isActive ? 'red' : '',
            };
          }}
          to="/"
        >
          home
        </NavLink>
        {navItems.map((item) => (
          <NavLink
            key={item}
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
