import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from './components/Footer';

function App() {

  return (
    <React.Fragment>  
      <NavBar />
      <Hero/>
      <About/>
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  
  );
}

export default App;
