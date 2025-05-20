import React from 'react';

const Collection = () => {
  return (
    <section id="collection" className="py-20 bg-rose">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ivory mb-4">
            Handpicked Looks Loved by Our Brides
          </h2>
          <p className="text-ivory text-lg">
            Timeless pieces with modern silhouettes — take a closer look.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dressCollection.map((dress, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <div className="h-[450px] overflow-hidden">
                <img 
                  src={dress.image} 
                  alt={dress.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-gold text-xl font-semibold mb-2">{dress.name}</h3>
                  <p className="text-ivory">{dress.collection}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const dressCollection = [
  {
    name: "Celestial Dream",
    collection: "Ethereal Collection",
    image: "https://rym9hhnsqi.ufs.sh/f/LPnXoTBWPWu2tvjkiA4xPDLcCkdsW79TRw06uMQNeY3K8yIS"
  },
  {
    name: "Regal Empress",
    collection: "Royal Collection",
    image: "https://rym9hhnsqi.ufs.sh/f/LPnXoTBWPWu2GF1YcYptKe9qyNdisM2Vl6gnUxZ8hc4vCorY"
  },
  {
    name: "Flora Enchanted",
    collection: "Garden Collection",
    image: "https://rym9hhnsqi.ufs.sh/f/LPnXoTBWPWu2NNpUml0lyObGijmufUcZ13Az7sTr4dkHhwMP"
  },
  {
    name: "Twilight Whisper",
    collection: "Evening Collection",
    image: "https://rym9hhnsqi.ufs.sh/f/LPnXoTBWPWu2tJnvbC4xPDLcCkdsW79TRw06uMQNeY3K8yIS"
  },
  {
    name: "Pearly Lace",
    collection: "Vintage Collection",
    image: "https://rym9hhnsqi.ufs.sh/f/LPnXoTBWPWu2Tk8QxqeOd0m6ozUaABWFSHlfsbiRpJ1CMjxv"
  },
  {
    name: "Moonlit Serenade",
    collection: "Classic Collection",
    image: "https://rym9hhnsqi.ufs.sh/f/LPnXoTBWPWu2R3vyN6sV1cXVxjTWB4YoAqzgnUd9tG3N5bOk"
  }
];

export default Collection;