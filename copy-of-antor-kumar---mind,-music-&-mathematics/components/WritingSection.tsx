
import React from 'react';
import { Section } from './Section';
import { Calculator, Quote, User } from 'lucide-react';

export const WritingSection: React.FC = () => {
  return (
    <Section id="writings" className="bg-[#FFF9FB]" title="Writings" subtitle="Where logic meets emotion and silence finds structure">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Subsection 1: Mathematical Thoughts */}
        <div className="p-12 glass-pink rounded-[3rem] apple-shadow-pink hover:translate-y-[-12px] transition-all duration-500 border border-white group">
          <div className="w-14 h-14 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
            <Calculator size={28} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">Mathematical Thoughts</h3>
          <p className="text-gray-600 leading-relaxed font-light">
            Reflections where numbers blend with life principles — structured ideas expressed with depth.
          </p>
        </div>

        {/* Subsection 2: Short Poems & Micro Writing */}
        <div className="p-12 glass-pink rounded-[3rem] apple-shadow-pink hover:translate-y-[-12px] transition-all duration-500 border border-white group">
          <div className="w-14 h-14 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
            <Quote size={28} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">Short Poems</h3>
          <p className="text-gray-600 leading-relaxed font-light italic">
            "Capturing intensity, ambition, silence, and growth in just a few lines of focused expression."
          </p>
        </div>

        {/* Subsection 3: Personal Reflections */}
        <div className="p-12 glass-pink rounded-[3rem] apple-shadow-pink hover:translate-y-[-12px] transition-all duration-500 border border-white group">
          <div className="w-14 h-14 bg-pink-50 text-pink-800 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
            <User size={28} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">Personal Reflections</h3>
          <p className="text-gray-600 leading-relaxed font-light">
            Thoughts on discipline, focus, ambition, identity, and the journey of becoming.
          </p>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <a 
          href="https://www.facebook.com/shopnacaru/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 text-pink-600 font-bold hover:text-pink-700 transition-all hover:scale-105"
        >
          <span className="text-lg">Explore "সপ্নচারু" on Facebook</span>
          <div className="p-2 bg-pink-100 rounded-lg"><Quote size={18} /></div>
        </a>
      </div>
    </Section>
  );
};
