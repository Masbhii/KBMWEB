import React from 'react';
import Navbar from "../layout/navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useInView } from "react-intersection-observer";

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

export default function Home() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

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

  // Komponen dengan efek scroll
  const ScrollSection = ({ children, delay = 0 }) => {
    const { ref, inView } = useInView({
      triggerOnce: true, // Efek hanya muncul sekali
      threshold: 0.1, // Muncul saat 10% elemen terlihat
    });

    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ease-in-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

  return (
      <div className="min-h-screen bg-[#3C2A21] text-white">
        <Navbar />

        {/* Hero Section */}
        <head>
          <title>Kita Bikin Memories</title>
          <link rel="icon" href="./favicon.ico" />
        </head>
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
              <source src="./gif.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
            {/* Logo tetap di tengah */}
            <div className="animate-[fadeIn_1s_ease-in]">
              <img 
                src="./logo.png" 
                alt="Kita Bikin Memories"
                className="w-[600px] max-w-full mb-8 opacity-0 animate-[fadeIn_1s_ease-in_forwards]"
              />
            </div>

            {/* Teks diposisikan di dekat bagian bawah layar */}
            <div className="absolute bottom-8 w-full text-center">
              <p 
                className="font-['Lora'] text-xl md:text-2xl text-white opacity-0 animate-[fadeIn_1s_ease-in_0.5s_forwards]"
              >
                Hari ini, untuk selamanya.
              </p>
            </div>
          </div>
        </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen bg-[#8B0000] pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <ScrollSection delay={100}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 font-['Lora']">
                  <h1 className="text-4xl font-bold mb-6">Kita Bikin Memories</h1>
                  <div className="space-y-4 text-lg">
                    <p>Lorem Ipsum Dolor Sit Amet</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-80 h-80 relative overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src="./profile.png"
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

      {/* Gallery Section */}
      <section id="gallery" className="min-h-screen bg-[#F5F5F5] py-20">
        <div className="container mx-auto px-4">
          <ScrollSection delay={200}>
            <h2 className="font-['Lora'] text-4xl text-gray-900 mb-12">Gallery</h2>
          </ScrollSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollSection delay={300}>
              <div
                onClick={() => (window.location.href = "./weddings.html")}
                className="group relative cursor-pointer overflow-hidden rounded-lg"
              >
                <img 
                  src="./wedding.png" 
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
                onClick={() => (window.location.href = "./family.html")}
                className="group relative cursor-pointer overflow-hidden rounded-lg"
              >
                <img 
                  src="./family.png" 
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
                onClick={() => (window.location.href = "./event.html")}
                className="group relative cursor-pointer overflow-hidden rounded-lg"
              >
                <img 
                  src="./event.png" 
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

      {/* Review Section */}
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

      {/* Footer Section */}
      <footer className="bg-[#8B0000] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src="./logof.png"
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
    </div>
  );
}