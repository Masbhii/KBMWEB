import React from 'react';
import { ScrollSection } from '@/components/ui/ScrollSection';

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen bg-[#8B0000] pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <ScrollSection delay={100}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 font-['Lora']">
                <h1 className="text-4xl font-bold mb-6 text-white">Kita Bikin Memories</h1>
                <div className="space-y-4 text-lg text-white">
                  <p>Lorem Ipsum Dolor Sit Amet</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-80 relative overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="/profile.png"
                    alt="Owner Profile"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
