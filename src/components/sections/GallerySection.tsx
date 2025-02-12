import React from 'react';
import { ScrollSection } from '@/components/ui/ScrollSection';

const GallerySection = () => {
  return (
    <section id="gallery" className="min-h-screen bg-[#F5F5F5] py-20">
      <div className="container mx-auto px-4">
        <ScrollSection delay={200}>
          <h2 className="font-['Lora'] text-4xl text-gray-900 mb-12">Gallery</h2>
        </ScrollSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollSection delay={300}>
            <div
              onClick={() => (window.location.href = "/weddings.html")}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
            >
              <img 
                src="wedding.png" 
                alt="Wedding"
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="font-['Lora'] text-3xl text-white">Wedding</h3>
              </div>
            </div>
          </ScrollSection>
          <ScrollSection delay={400}>
            <div
              onClick={() => (window.location.href = "/family.html")}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
            >
              <img 
                src="family.png" 
                alt="Family"
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="font-['Lora'] text-3xl text-white">Family</h3>
              </div>
            </div>
          </ScrollSection>
          <ScrollSection delay={500}>
            <div
              onClick={() => (window.location.href = "/event.html")}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
            >
              <img 
                src="event.png" 
                alt="Event"
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="font-['Lora'] text-3xl text-white">Event</h3>
              </div>
            </div>
          </ScrollSection>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
