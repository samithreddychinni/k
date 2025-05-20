import React from 'react';

const Statement = () => {
  return (
    <section className="relative h-[500px] bg-fixed bg-center bg-cover" 
      style={{ backgroundImage: "url('https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg')" }}>
      <div className="absolute inset-0 bg-maroon/60"></div>
      
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ivory mb-4">
            Soft. Strong. Unapologetically You.
          </h2>
          <p className="text-xl text-ivory/90">
            Be seen. Be remembered. Be a Kavya bride.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statement;