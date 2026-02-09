
import React, { useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Mail, 
  BookOpen, 
  Music, 
  Calculator, 
  PenTool, 
  ChevronRight,
  Code,
  Palette,
  Terminal,
  Trophy,
  ExternalLink
} from 'lucide-react';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Navbar } from './components/Navbar';
import { WritingSection } from './components/WritingSection';
import { SkillCard } from './components/SkillCard';
import { Gallery } from './components/Gallery';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section-fade-in');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-pink-200">
      <Navbar />
      
      <main>
        {/* SECTION 1: HERO */}
        <Hero />

        {/* SECTION 2: ABOUT ME */}
        <Section id="about" title="About Me" subtitle="The Fusion of Logic and Expression">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-xl text-gray-800 leading-relaxed font-light">
              I am <span className="font-semibold text-pink-600">Antor Kumar Sutradhar</span>, currently pursuing a BSc (Honours) in Mathematics. 
              For me, mathematics is not just an academic subject — it is a way of thinking. 
              It teaches structure, precision, and strategic clarity.
            </p>
            <p className="text-xl text-gray-800 leading-relaxed font-light">
              Beyond equations, I explore expression through music, writing, and reflection. 
              I believe balance is built when <span className="text-pink-500">logic and emotion</span> coexist — and that balance defines my work and my personality.
            </p>
          </div>
        </Section>

        {/* SECTION 3: MATHEMATICS */}
        <Section id="mathematics" className="bg-pink-50/30" title="Mathematics" subtitle="Discipline in Thought">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6 apple-shadow">
                <Calculator size={32} />
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mathematics shapes the way I analyze problems, structure ideas, and execute decisions. 
                It trains the mind to seek patterns, think deeply, and approach complexity with calm reasoning.
              </p>
              <div className="p-8 glass-pink rounded-3xl border border-pink-100/50">
                <blockquote className="text-2xl font-light italic text-gray-800">
                  "To me, mathematics is <span className="text-pink-600">discipline</span> in thought."
                </blockquote>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Precision', 'Patterns', 'Strategic Clarity', 'Pattern Analysis'].map((item) => (
                <div key={item} className="p-8 glass-pink rounded-[2.5rem] text-center apple-shadow hover:scale-105 transition-all duration-500 border border-white group">
                  <span className="text-gray-900 font-medium group-hover:text-pink-600 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* SECTION 4: MUSIC */}
        <Section id="music" title="Music" subtitle="Refining Patience & Emotional Intelligence">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="grid grid-cols-2 gap-6 order-2 md:order-1">
              {[
                { name: 'Harmonium', icon: '🎹' },
                { name: 'Tabla', icon: '🥁' },
                { name: 'Ukulele', icon: '🎸' },
                { name: 'Guitar', icon: '🎼' }
              ].map((inst) => (
                <div key={inst.name} className="p-10 glass-pink rounded-[2.5rem] flex flex-col items-center justify-center space-y-4 hover:bg-white transition-all duration-500 apple-shadow-pink group border border-white">
                  <span className="text-4xl transform group-hover:scale-125 transition-transform duration-500">{inst.icon}</span>
                  <span className="text-gray-900 font-medium group-hover:text-pink-600 transition-colors">{inst.name}</span>
                  {inst.name === 'Guitar' && <span className="text-xs text-pink-500 font-semibold uppercase tracking-wider">Learning</span>}
                </div>
              ))}
            </div>
            <div className="space-y-8 flex flex-col justify-center order-1 md:order-2">
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mb-2 apple-shadow">
                <Music size={32} />
              </div>
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Music teaches rhythm — and rhythm teaches balance. It serves as my bridge between the 
                rigid structures of mathematics and the fluid world of human emotion.
              </p>
              <p className="text-lg text-apple-gray">
                Currently deep-diving into the strings of the guitar, expanding my musical palette one chord at a time.
              </p>
            </div>
          </div>
        </Section>

        {/* SECTION 5: BOOKS */}
        <Section id="books" className="bg-pink-50/30" title="Books" subtitle="Expanding Dimensions">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 space-y-6">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6 apple-shadow">
                  <BookOpen size={32} />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I read to expand perspective beyond formulas and frameworks. My interests revolve around 
                  philosophy, self-growth, reflective literature, and structured thinking.
                </p>
                <p className="text-lg text-gray-700">
                  Reading helps me grow internally — quietly and consistently.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="p-12 glass-pink rounded-[3rem] relative overflow-hidden group apple-shadow-pink border border-white">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <BookOpen size={120} />
                  </div>
                  <blockquote className="text-3xl font-light text-gray-900 relative z-10 leading-snug">
                    “Books expand the <span className="text-pink-600 font-medium">dimensions</span> where mathematics ends.”
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* SECTION 6: CRICKET */}
        <Section id="cricket" title="Cricket" subtitle="Discipline & Timing">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-600 apple-shadow-pink">
                <Trophy size={40} />
              </div>
            </div>
            <p className="text-xl text-gray-800 leading-relaxed font-light">
              Cricket represents discipline, timing, and strategy. It reminds me that patience, 
              preparation, and precision define performance — in sports and in life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Discipline', 'Strategy', 'Timing', 'Teamwork'].map(tag => (
                <span key={tag} className="px-6 py-2 bg-white rounded-full text-sm font-medium text-gray-600 apple-shadow border border-pink-50 hover:bg-pink-600 hover:text-white transition-all duration-300 cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* SECTION 7: WRITINGS */}
        <WritingSection />

        {/* SECTION 8: RHYTHMS */}
        <Section id="rhythms" className="bg-pink-50/20" title="Rhythms" subtitle="Internal Alignment">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <p className="text-2xl font-light text-gray-700 max-w-2xl mx-auto">
              "Music is not performance for me — it is <span className="text-pink-600">internal alignment</span>."
            </p>
            <div className="p-12 glass-pink rounded-[3rem] apple-shadow-pink border border-white">
              <p className="text-lg text-gray-600 leading-relaxed">
                Through harmonium, tabla, ukulele, and guitar, I continue learning patience, 
                consistency, and emotional balance. In the future, this space will grow — 
                perhaps with recorded moments of sound and silence.
              </p>
              <div className="mt-8 pt-8 border-t border-pink-100">
                <span className="text-pink-500 font-semibold tracking-widest uppercase text-xs">Evolution in Progress</span>
              </div>
            </div>
          </div>
        </Section>

        {/* SECTION 9: SKILLS */}
        <Section id="skills" title="Skills" subtitle="Analytical, Creative & Technical">
          <div className="grid md:grid-cols-3 gap-8">
            <SkillCard 
              icon={<Calculator className="text-pink-600" />}
              title="Analytical"
              skills={['Mathematical Thinking', 'Logical Structuring', 'Strategic Analysis']}
            />
            <SkillCard 
              icon={<PenTool className="text-rose-500" />}
              title="Creative"
              skills={['Writing & Expression', 'Musical Practice', 'Concept Development']}
            />
            <SkillCard 
              icon={<Code className="text-pink-800" />}
              title="Technical"
              skills={['WordPress Development', 'Website Structuring', 'Graphic Design', 'Basic HTML & CSS', 'Git & GitHub']}
            />
          </div>
        </Section>

        {/* SECTION 10: GALLERY */}
        <Gallery />

        {/* SECTION 11: CONTACT */}
        <footer id="contact" className="bg-white pt-24 pb-12 px-6 border-t border-pink-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Antor Kumar Sutradhar</h2>
                  <p className="text-xl text-pink-600 font-medium">Mathematics Student | Web Developer | Writer</p>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed max-w-md font-light">
                  Open to collaboration, creative discussions, and meaningful digital opportunities. 
                  Let's bridge logic and creativity together.
                </p>
                <div className="flex space-x-6">
                  {[
                    { Icon: Github, color: 'black', href: 'https://github.com/antor66' },
                    { Icon: Linkedin, color: '#0077B5', href: 'https://www.linkedin.com/in/antor-kumar-441a42356/' },
                    { Icon: Facebook, color: '#1877F2', href: 'https://www.facebook.com/antorkumarsd' },
                    { Icon: Mail, color: '#f43f5e', href: 'mailto:antorsd904@gmail.com' }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      className="p-4 bg-pink-50 rounded-2xl text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 apple-shadow-pink"
                    >
                      <social.Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="glass-pink p-10 rounded-[3rem] apple-shadow-pink space-y-8 border border-white">
                <h3 className="text-2xl font-semibold text-gray-900">Start a Conversation</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-5 group">
                    <div className="p-3 bg-pink-100 text-pink-600 rounded-xl group-hover:scale-110 transition-transform"><Mail size={22}/></div>
                    <a href="mailto:antorsd904@gmail.com" className="text-lg text-gray-700 hover:text-pink-600 transition-colors">antorsd904@gmail.com</a>
                  </div>
                  <div className="flex items-center space-x-5 group">
                    <div className="p-3 bg-pink-100 text-pink-600 rounded-xl group-hover:scale-110 transition-transform"><Facebook size={22}/></div>
                    <a href="https://www.facebook.com/shopnacaru/" className="text-lg text-gray-700 hover:text-pink-600 transition-colors">সপ্নচারু (Facebook Page)</a>
                  </div>
                </div>
                <button 
                  onClick={() => window.location.href = 'mailto:antorsd904@gmail.com'}
                  className="w-full mt-4 py-5 bg-pink-600 text-white rounded-2xl hover:bg-pink-700 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold apple-shadow-pink"
                >
                  <span>Send a Message</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className="pt-8 border-t border-pink-50 flex flex-col md:flex-row justify-between items-center gap-4 text-apple-gray text-sm">
              <p>© {new Date().getFullYear()} Antor Kumar Sutradhar. All rights reserved.</p>
              <div className="flex space-x-8">
                <a href="#about" className="hover:text-pink-600">About</a>
                <a href="#skills" className="hover:text-pink-600">Skills</a>
                <a href="#contact" className="hover:text-pink-600">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
      
      <style>{`
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
    </div>
  );
};

export default App;
