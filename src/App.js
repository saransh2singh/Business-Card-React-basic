// import './App.css';
import React from 'react';
import Intro from './Components/Intro';
import About from './Components/About';
import Footer from './Components/Footer';


export default function App() {
  return (
    <div className="container" >
      <Intro />
      <About />
      <Footer />
    </div>
  );
}
