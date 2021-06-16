import React from 'react';
import Navbar from './Nav/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Skillscontent from './Skills/Skillscontent';
import Contact from './Contact/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skillscontent/>
      <Contact/>
    </div>
  );
}

export default App;
