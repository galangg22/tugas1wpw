import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/Header';
import AppHero from './components/Hero';
import AppAbout from './components/About';
import AppServices from './components/Services';
// Pastikan filenya memang "Work.js" atau "Works.js"
import AppWorks from './components/Works'; 
import AppTeams from './components/Teams';
// Pastikan filenya memang "Testimonial.js" atau "Testimonials.js"
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
      </main>

      {/* Taruh Footer di luar main biar semantik HTML-nya benar */}
      <AppFooter />
    </div>
  );
}

export default App;