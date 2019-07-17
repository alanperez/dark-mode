import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme'
const Navbar = () => {
  //  calling the useTheme function and passing it in the initial state which is darkMode
  const [darkMode, setDarkMode] = useTheme();
  const toggleMode = e => {
    e.preventDefault();
    //setting the state of setDarkMode to the opposite of darkMode
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
