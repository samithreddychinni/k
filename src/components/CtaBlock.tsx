import React from 'react';

const CtaBlock = () => {
  return (
    <section className="py-20 bg-rose">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ivory mb-4">
            Ready to Find Your Dress?
          </h2>
          <p className="text-ivory text-lg mb-10">
            Let's bring your vision to life — effortlessly.
          </p>
          
          <button className="bg-gold hover:bg-ivory text-rose font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaBlock;