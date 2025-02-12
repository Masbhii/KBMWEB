import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    image: "/client1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    name: "John & Laura"
  },
  {
    image: "/client2.png",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    name: "Mike & Sarah"
  },
  {
    image: "/client3.png",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    name: "David & Emma"
  },
];

const ReviewSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const nextReview = () => {
    if (isSliding) return;
    setIsSliding(true);
    setSlideDirection('right');
    setTimeout(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
      setTimeout(() => setIsSliding(false), 50);
    }, 300);
  };

  const prevReview = () => {
    if (isSliding) return;
    setIsSliding(true);
    setSlideDirection('left');
    setTimeout(() => {
      setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
      setTimeout(() => setIsSliding(false), 50);
    }, 300);
  };

  return (
    <section id="review" className="bg-[#FDF6EC]">
      <div className="container mx-auto px-4 py-20">
        <h2 className="font-['Lora'] text-4xl text-gray-900 mb-12 text-center">Clients Review</h2>
        <div className="relative">
          <button 
            onClick={prevReview}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 z-10 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button 
            onClick={nextReview}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 z-10 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          <div className="max-w-4xl mx-auto px-12 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square overflow-hidden rounded-lg">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentReview * 100}%)` }}
                >
                  {reviews.map((review, index) => (
                    <div key={index} className="min-w-full">
                      <img 
                        src={review.image}
                        alt="Client Review"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentReview * 100}%)` }}
                >
                  {reviews.map((review, index) => (
                    <div key={index} className="min-w-full space-y-6 font-['Lora'] text-center">
                      <p className="text-xl italic text-gray-800">
                        "{review.text}"
                      </p>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
