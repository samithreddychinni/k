import React from 'react';
import { Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-rose">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ivory mb-12 text-center">
            Let's Connect
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-ivory mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-gold mt-1 mr-3" />
                  <div>
                    <p className="text-ivory font-medium">Designer</p>
                    <a href="tel:+919912916389" className="text-ivory/80 hover:text-gold transition-colors">
                      +91 9912916389
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-gold mt-1 mr-3" />
                  <div>
                    <p className="text-ivory font-medium">Developer</p>
                    <a href="tel:+919182239431" className="text-ivory/80 hover:text-gold transition-colors">
                      +91 9182239431
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-gold mt-1 mr-3" />
                  <div>
                    <a href="mailto:kolankavya3@gmail.com" className="text-ivory/80 hover:text-gold transition-colors">
                      kolankavya3@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-gold mt-1 mr-3" />
                  <div>
                    <a href="mailto:shruhatreddy@ushodayanetworks.com" className="text-ivory/80 hover:text-gold transition-colors">
                      shruhatreddy@ushodayanetworks.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-ivory mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-ivory mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 bg-ivory/10 border border-ivory/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 text-ivory"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-ivory mb-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 bg-ivory/10 border border-ivory/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 text-ivory"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-ivory mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 bg-ivory/10 border border-ivory/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 text-ivory"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-gold hover:bg-ivory text-rose font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center space-x-6">
            <a href="#" className="text-gold hover:text-ivory transition-colors duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gold hover:text-ivory transition-colors duration-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gold hover:text-ivory transition-colors duration-300">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;