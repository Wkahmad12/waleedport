import React from 'react';
import {
  GraduationCap,
  Award,
  Briefcase as BriefcaseBusiness,
  UserCircle,
  Sparkles,
} from 'lucide-react';
import DPImage from '../assets/DP.jpeg'; // adjust the path if your file structure is different

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="w-full h-full absolute -right-4 -bottom-4 border-2 border-blue-600 rounded-lg"></div>
              <img
                src={DPImage}
                alt="Waleed Khan"
                className="w-full rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>

          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              Creative Technologist <Sparkles className="ml-2 text-blue-600" size={24} />
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I am Waleed Khan, a Creative Technologist with a Bachelor of Creative Computing (Hons) from Bath Spa University.
              I blend technical expertise with creative innovation to build cutting-edge digital experiences. My work spans
              web development, interactive installations, and digital innovation, always pushing the boundaries of what's possible
              in the digital realm.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Education</h4>
                  <p className="text-gray-600">Bachelor in Creative Computing, FSc in Computer Science</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <BriefcaseBusiness className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Experience</h4>
                  <p className="text-gray-600">Creative Technologist, Web Developer, Digital Innovation</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Certifications</h4>
                  <p className="text-gray-600">Cybersecurity, Machine Learning, Python</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <UserCircle className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-600">Dubai, UAE</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Creative Technology</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Digital Innovation</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Interactive Experiences</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Web Development</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">UX Design</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Digital Art</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
