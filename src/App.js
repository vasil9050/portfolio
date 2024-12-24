// App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';

const App = () => (
  <div>
    <Header />
    <div id="home" className="pt-5">
      <About />
      <Experience />
      {/* <Projects />
      <Skills />
      <Contact /> */}
    </div>
  </div>
);

export default App;
