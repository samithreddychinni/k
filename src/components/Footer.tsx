import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-maroon py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <p className="text-ivory mb-2">
            © 2025 Kavya Reddy. All rights reserved.
          </p>
          <p className="text-ivory/70 text-sm">
            Developed by <a href="#" className="hover:text-gold transition-colors">Ushodaya Networks</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;