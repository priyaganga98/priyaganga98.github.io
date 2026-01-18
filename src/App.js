import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    
    <div className="App">
      
      <Navbar />
      <About />
      <Experience/>
      <Skills />
      <Project />
      <Contact/>
    </div>
    );
}

export default App;
