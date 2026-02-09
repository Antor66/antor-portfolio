
import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const profileImageUrl = "https://lh3.googleusercontent.com/d/1YdUbb_GcDXgQj86WSJBANJNmv0iIx4x2";
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-[#FFF5F7]">
      {/* Dynamic Pink Background Gradients */}
      <div className="absolute top-[-15%] left-[-10%] w-[60%] h-[60%] bg-pink-200/20 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] bg-rose-200/20 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Professional Circular UI Image Display */}
        <div 
          className={`mb-12 relative group transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}
        >
          {/* Enhanced Pink Glow */}
          <div className="absolute -inset-6 bg-gradient-to-tr from-pink-500/20 to-rose-400/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000 group-hover:from-pink-500/30"></div>
          
          <div className="relative z-10 w-56 h-56 md:w-72 md:h-72 rounded-full p-1.5 glass-pink apple-shadow transition-all duration-700 hover:scale-[1.05] animate-float">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-inner relative">
              <img 
                src={profileImageUrl} 
                alt="Antor Kumar" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&h=500&q=80";
                }}
              />
              {/* Subtle inner reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Realistic Animated Headline with Pink Accents */}
        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-gray-900 mb-8 transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-pink-900 to-pink-600 animate-gradient-text">
            ANTOR KUMAR
          </span>
        </h1>

        <div className={`transition-all duration-1000 delay-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-2xl md:text-3xl font-light text-gray-800 mb-8 italic tracking-wide">
            Mind, Music & Mathematics
          </p>
          
          <p className="text-xl text-apple-gray max-w-2xl mb-12 leading-relaxed font-light px-4 mx-auto">
            “Between equations and emotions, I build my own rhythm.”
            <br />
            <span className="text-base mt-4 block font-medium text-pink-500">
              Pursuing BSc (Honours) in Mathematics
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#about" 
              className="group px-12 py-5 bg-pink-600 text-white rounded-full font-medium hover:scale-105 active:scale-95 transition-all duration-500 apple-shadow-pink flex items-center space-x-3 overflow-hidden relative"
            >
              <span className="relative z-10">Explore My World</span>
              <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            <a 
              href="#contact" 
              className="px-12 py-5 glass-pink text-gray-900 rounded-full font-medium hover:bg-white/80 hover:scale-105 active:scale-95 transition-all duration-500 apple-shadow-pink border border-white/60"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(0.5deg); }
        }
        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradient-text 8s linear infinite;
        }
        .glass-pink {
          background: rgba(255, 240, 245, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        .apple-shadow-pink {
          box-shadow: 0 10px 40px -10px rgba(244, 114, 182, 0.2);
        }
      `}</style>
    </section>
  );
};
