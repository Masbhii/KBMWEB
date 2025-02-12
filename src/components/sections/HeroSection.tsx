import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.5)' }}
        >
          <source src="/gif.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="animate-[fadeIn_1s_ease-in]">
          <img 
            src="/logo.png" 
            alt="Kita Bikin Memories"
            className="w-[600px] max-w-full mb-8 opacity-0 animate-[fadeIn_1s_ease-in_forwards]"
          />
        </div>
        <div className="absolute bottom-8 w-full text-center">
          <p className="font-['Lora'] text-xl md:text-2xl text-white opacity-0 animate-[fadeIn_1s_ease-in_0.5s_forwards]">
            Hari ini, untuk selamanya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
