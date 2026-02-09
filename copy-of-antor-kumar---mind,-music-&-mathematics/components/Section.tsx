
import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  noHeader?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "", noHeader = false }) => {
  return (
    <section id={id} className={`py-32 px-6 overflow-hidden transition-colors duration-1000 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {!noHeader && (
          <div className="section-fade-in mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">{title}</h2>
            {subtitle && <p className="text-xl text-apple-gray font-light max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500/10 via-pink-500 to-pink-500/10 mx-auto mt-10 rounded-full animate-pulse"></div>
          </div>
        )}
        <div className="section-fade-in delay-100">
          {children}
        </div>
      </div>
    </section>
  );
};
