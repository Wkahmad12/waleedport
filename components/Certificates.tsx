import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import cert1 from '../assets/certificate1.jpeg';
import cert2 from '../assets/certificate2.jpeg';
import cert3 from '../assets/certificate3.jpeg';
import cert4 from '../assets/certificate4.jpeg';
import cert5 from '../assets/certicate5.jpg';
import cert6 from '../assets/certicate6.jpg';

const Certificates: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState(0);

  const certificates = [
    {
      id: 1,
      title: "Web Development Certificate",
      organization: "Pakistan Association Dubai",
      date: "2023",
      image: cert1,
      description: "Recognition for contribution in the field of web development for the organization's infrastructure."
    },
    {
      id: 2,
      title: "Introduction to Cybersecurity",
      organization: "Cisco Networking Academy",
      date: "2024",
      image: cert2,
      description: "Certification for completing the Introduction to Cybersecurity course, covering fundamentals of online safety and security."
    },
    {
      id: 3,
      title: "End-to-End Machine Learning",
      organization: "DataCamp",
      date: "2023",
      image: cert3,
      description: "Completion of comprehensive machine learning course covering all aspects from data preparation to model deployment."
    },
    {
      id: 4,
      title: "Python Intermediate",
      organization: "Sololearn",
      date: "December 2023",
      image: cert4,
      description: "Certificate for demonstrating theoretical and practical understanding of intermediate Python programming concepts."
    },
    {
      id: 5,
      title: "FreeLance",
      organization: "Noor ul Sahl",
      date: "2024",
      image: cert5,
      description: "Awarded for completing the React Front-End Developer Professional Certificate. Covered components, hooks, and project-based learning."
    },
    {
      id: 6,
      title: "Into Programming",
      organization: "Meta (Kaggle)",
      date: "2024",
      image: cert6,
      description: "Awarded for completing the React Front-End Developer Professional Certificate. Covered components, hooks, and project-based learning."
    }
  ];

  const openModal = (index: number) => {
    setCurrentCertificate(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextCertificate = () => {
    setCurrentCertificate((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertificate((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextCertificate();
      if (e.key === 'ArrowLeft') prevCertificate();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Certificates & Achievements</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my professional certifications and achievements in various technical domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((certificate, index) => (
            <div 
              key={certificate.id}
              onClick={() => openModal(index)}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:transform hover:scale-105 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={certificate.image} 
                  alt={certificate.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{certificate.title}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">{certificate.organization}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {certificate.date}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{certificate.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 bg-gray-800/50 hover:bg-gray-800 text-white p-2 rounded-full z-10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <div className="relative">
              <img 
                src={certificates[currentCertificate].image} 
                alt={certificates[currentCertificate].title}
                className="w-full"
              />
              
              <button 
                onClick={(e) => { e.stopPropagation(); prevCertificate(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800 text-white p-2 rounded-full"
                aria-label="Previous certificate"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); nextCertificate(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800 text-white p-2 rounded-full"
                aria-label="Next certificate"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {certificates[currentCertificate].title}
              </h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-medium">
                  {certificates[currentCertificate].organization}
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {certificates[currentCertificate].date}
                </span>
              </div>
              <p className="text-gray-600">
                {certificates[currentCertificate].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
