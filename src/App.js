import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/Header';
import AppHero from './components/Hero';
// 1. Import komponen About
import AppAbout from './components/About';
import AppServices from './components/Services';
import AppWorks from './components/Work';
import AppTeams from './components/Teams';
import AppTestimonials from './components/Testimonial';
import AppPricing from './components/Pricing';
import AppBlog from './components/Blog';
import AppContact from './components/Contact';
import AppFooter from './components/Footer';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      
      <main>
        <AppHero />
        <AppAbout />
        <AppServices/>
        <AppWorks/>
        <AppTeams/>
        <AppTestimonials/>
        <AppPricing/>
        <AppBlog/>
        <AppContact/>
        <AppFooter/>
      </main>
    </div>
  );
}

export default App;