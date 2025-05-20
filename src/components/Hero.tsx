import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-maroon to-rose min-h-screen flex items-center relative">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-6 leading-tight">
            Where Modern Elegance Meets Timeless Bridal Tradition
          </h1>
          <p className="text-lg md:text-xl text-ivory mb-10">
            ✨ Crafted for the bride who commands every room she walks into.
          </p>
          <button className="bg-gold hover:bg-ivory text-rose font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center mx-auto group">
            Explore the Collection
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
        <svg className="w-6 h-6 text-ivory" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;