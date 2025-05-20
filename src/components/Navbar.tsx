import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-rose shadow-md py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-ivory">
            Kavya Reddy
          </div>
          
          {/* Mobile menu button */}
          <div className="block md:hidden">
            <button className="text-ivory focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 text-ivory font-medium">
            <a href="#home" className="hover:text-gold transition-colors duration-300">Home</a>
            <a href="#gallery" className="hover:text-gold transition-colors duration-300">Gallery</a>
            <a href="#collection" className="hover:text-gold transition-colors duration-300">Dresses</a>
            <a href="#contact" className="hover:text-gold transition-colors duration-300">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;