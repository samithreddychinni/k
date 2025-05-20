import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Statement from './components/Statement';
import Collection from './components/Collection';
import Testimonial from './components/Testimonial';
import CtaBlock from './components/CtaBlock';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-serif bg-rose min-h-screen w-full">
      <Navbar />
      <Hero />
      <Gallery />
      <Statement />
      <Collection />
      <Testimonial />
      <CtaBlock />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;