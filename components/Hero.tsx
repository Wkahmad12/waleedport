import React from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Briefcase, Mail, Phone, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-blue-900 to-indigo-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Waleed Khan
          </h1>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mb-6 animate-expand"></div>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-100 animate-fade-in animation-delay-300 flex items-center justify-center">
            Creative Technologist <Sparkles className="ml-2" size={24} />
          </h2>
          <p className="text-xl mb-10 leading-relaxed animate-fade-in animation-delay-600">
            Bridging technology and creativity to craft innovative digital experiences
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in animation-delay-900">
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all flex items-center justify-center"
            >
              <Mail size={18} className="mr-2" /> Contact Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-8 rounded-full transition-all flex items-center justify-center"
            >
              <Briefcase size={18} className="mr-2" /> View Projects
            </Link>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="mailto:kingwaleed3313@gmail.com" className="text-blue-100 hover:text-white transition-colors flex items-center">
              <Mail size={18} className="mr-2" /> kingwaleed3313@gmail.com
            </a>
            <a href="tel:+971544709745" className="text-blue-100 hover:text-white transition-colors flex items-center">
              <Phone size={18} className="mr-2" /> 0544709745
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center">
        <Link
          to="about"
          smooth={true}
          duration={800}
          className="text-white animate-bounce inline-block cursor-pointer"
        >
          <ChevronDown size={32} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;