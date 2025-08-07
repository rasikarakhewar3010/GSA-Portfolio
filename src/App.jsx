// src/App.js
import { useState, useEffect } from 'react';
// import LoadingAnimation from './components/LoadingAnimation';
import Lenis from '@studio-freight/lenis';
import './App.css';
import GoogleGeminiEffectDemo from './components/GoogleGeminiEffectDemo';
import AboutMe from './components/AboutMe';
import CampusImpact from './components/CampusImpact';

function App() {
  

  return (

    <div className="relative min-h-screen bg-black text-white">
      {/* Your Hero Component will now handle the animated background */}
      <GoogleGeminiEffectDemo />
      <AboutMe />
      <CampusImpact />
    </div>
  );
}

export default App;