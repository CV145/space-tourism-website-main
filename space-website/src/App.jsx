import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import './App.css';

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Listen to the current page route and change the background accordingly
    const updateBackground = (pathname) => {
      switch (pathname) {
        case '/destination':
          setBackgroundImage('url("./assets/destination/background-destination-desktop.jpg")');
          break;
        case '/crew':
          setBackgroundImage('url("./assets/crew/background-crew-desktop.jpg")');
          break;
        case '/technology':
          setBackgroundImage('url("./assets/technology/background-technology-desktop.jpg")');
          break;
        default:
          setBackgroundImage('url("./assets/home/background-home-desktop.jpg")');
          break;
      }
    };

    // Update background image when the route changes
    updateBackground(window.location.pathname);

    // React to changes in the browser's URL
    window.onpopstate = () => {
      updateBackground(window.location.pathname);
    };
  }, []);

  return (
    <div className="app" style={{ backgroundImage }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
