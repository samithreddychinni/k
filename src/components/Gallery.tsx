import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-rose">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ivory mb-4">
            Cherish Every Moment in Couture That Tells Your Story
          </h2>
          <p className="text-lg text-ivory">
            Our handcrafted bridalwear is designed to make your day unforgettable — from the aisle to the afterparty.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/20 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-ivory hover:bg-maroon hover:text-ivory text-rose border-2 border-ivory font-bold py-3 px-8 rounded-full transition-colors duration-300">
            View Bridal Dresses
          </button>
        </div>
      </div>
    </section>
  );
};

const galleryImages = [
  {
    url: "https://rym9hhnsqi.ufs.sh/f/LPnXoTBWPWu2QF8REZ2n21UXTFdhCEbust6BefQpkWSVc073",
    alt: "Elegant bride in white dress"
  },
  {
    url: "https://rym9hhnsqi.ufs.sh/f/LPnXoTBWPWu2ZjpZH2YktaNyGlHsWjB1oY2gEfhJC7PDewVM",
    alt: "Bride in traditional attire"
  },
  {
    url: "https://rym9hhnsqi.ufs.sh/f/LPnXoTBWPWu2Kzz1DbCL6IDAaSktJVnrh3LU0Ov8CfiqwRj4",
    alt: "Bridal details with flowers"
  },
  {
    url: "https://rym9hhnsqi.ufs.sh/f/LPnXoTBWPWu2R3vyN6sV1cXVxjTWB4YoAqzgnUd9tG3N5bOk",
    alt: "Bride with bouquet"
  },
  {
    url: "https://rym9hhnsqi.ufs.sh/f/LPnXoTBWPWu2whjkpborIGt4uQcT0ZzaY8qL7C1Rg53XAOb6",
    alt: "Bride in elegant wedding dress"
  },
  {
    url: "https://rym9hhnsqi.ufs.sh/f/LPnXoTBWPWu2Kz2CHlZL6IDAaSktJVnrh3LU0Ov8CfiqwRj4",
    alt: "Bride in lace detail dress"
  }
];

export default Gallery;