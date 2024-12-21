// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import moon from '/moon.svg'
// import sun from '/sun.svg'
// import { FaMoon } from 'react-icons/fa';
// import { FaSun } from 'react-icons/fa';
import './App.css';
import HomePage from './Components/HomePage';

function App() {
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <HomePage />
    </div>
  );
}

export default App;

