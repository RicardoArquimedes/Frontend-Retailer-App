import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import seccionUno from './pages/seccionUno';
import seccionDos from './pages/seccionDos';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={seccionUno} />
        <Route path="/orders" exact component={seccionDos} />
      </Switch>
    </>
  );
}

export default App;
