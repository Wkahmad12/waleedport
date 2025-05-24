import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Freelance Web Developer',
      organization: 'Pakistan Association Dubai',
      period: '2023 - Present',
      description: 'Developed and maintained the organization\'s website infrastructure, implementing responsive design and modern web technologies.',
    },
    {
      type: 'work',
      title: 'Web Developer',
      organization: 'Noor Al Sahl Company',
      period: '2023',
      description: 'Contributed to various web development projects, focusing on frontend implementation and user experience optimization.',
    },
    {
      type: 'work',
      title: 'Stock Market Analyst',
      organization: 'Dubai Business Bay',
      period: '2023 (6 months)',
      description: 'Analyzed market trends and provided insights for investment decisions using data visualization and analytical tools.',
    },
    {
      type: 'education',
      title: 'Bachelor in Creative Computing (Hons)',
      organization: 'Bath Spa University',
      period: '2022 - 2025',
      description: 'Focused on web development, UX design, game development, and creative computing technologies.',
    },
    {
      type: 'education',
      title: 'FSc in Computer Science',
      organization: 'Pakistan School Sharjah',
      period: '2020 - 2022',
      description: 'Built a strong foundation in computer science fundamentals, programming, and mathematics.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Experience & Education</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 w-0.5 h-full bg-blue-200 transform md:-translate-x-1/2"></div>

            {experiences.map((item, index) => (
              <div key={index} className={`relative z-10 mb-12 ${index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'} md:w-5/12 w-full`}>
                <div className={`flex items-center mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center z-10 md:absolute md:left-0 md:ml-0 ml-0 ${index % 2 === 0 ? 'md:-right-16' : 'md:-left-16'}`}>
                    {item.type === 'work' ? (
                      <Briefcase size={16} className="text-white" />
                    ) : (
                      <GraduationCap size={16} className="text-white" />
                    )}
                  </div>
                  <div className="ml-4 md:ml-0">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {item.period}
                    </span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                  {item.organization && (
                    <h4 className="text-gray-600 font-medium mb-3">{item.organization}</h4>
                  )}
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;