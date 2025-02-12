import React from 'react';
import { SiInstagram, SiTiktok } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const FooterSection = () => {
  return (
    <footer className="bg-[#8B0000] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/logof.png"
              alt="Kita Bikin Memories"
              className="h-16 mx-auto mb-4"
            />
            <p className="font-['Lora'] text-lg text-white/90">
              Mengabadikan momen berharga dalam hidupmu dengan sentuhan profesional.
            </p>
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="https://www.instagram.com/kitabikinmemories" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-200 transition-all duration-300 hover:scale-110"
            >
              <SiInstagram className="w-8 h-8" />
            </a>
            <a 
              href="https://wa.me/+6285156720439" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-200 transition-all duration-300 hover:scale-110"
            >
              <FaWhatsapp className="w-8 h-8" />
            </a>
            <a 
              href="https://www.tiktok.com/@kitabikinmemories" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-200 transition-all duration-300 hover:scale-110"
            >
              <SiTiktok className="w-8 h-8" />
            </a>
            <a 
              href="mailto:youremail@example.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-200 transition-all duration-300 hover:scale-110"
            >
              <MdEmail className="w-8 h-8" />
            </a>
          </div>

          <p className="text-white/70 text-sm">
            © 2025 Kita Bikin Memories. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
