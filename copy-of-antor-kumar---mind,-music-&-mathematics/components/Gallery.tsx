
import React from 'react';
import { Section } from './Section';

export const Gallery: React.FC = () => {
  const galleryItems = [
    { title: 'Music practice sessions', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=600&h=600&q=80' },
    { title: 'Cricket field discipline', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&h=600&q=80' },
    { title: 'Books and study desk', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&h=600&q=80' },
    { title: 'University life reflections', image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=600&h=600&q=80' },
  ];

  return (
    <Section id="gallery" title="Gallery" subtitle="This section reflects growth in motion">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {galleryItems.map((item, idx) => (
          <div key={idx} className="group relative rounded-[3rem] overflow-hidden apple-shadow-pink aspect-square border-4 border-white">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-pink-900/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center p-8 backdrop-blur-[2px]">
              <p className="text-white font-bold text-center text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</p>
              <div className="w-10 h-1 bg-white mt-4 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center text-pink-600/60 font-medium italic">
        Capturing the essence of a multifaceted journey.
      </div>
    </Section>
  );
};
