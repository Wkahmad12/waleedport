import React from 'react';
import { Code, PenTool, MonitorPlay, Database, Globe, Gamepad2 } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe size={24} />,
      skills: [
        { name: "HTML5 & CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Database size={24} />,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 80 },
        { name: "RESTful APIs", level: 75 },
        { name: "Database Management", level: 70 },
        { name: "Server Deployment", level: 65 },
      ],
    },
    {
      title: "UX Design",
      icon: <PenTool size={24} />,
      skills: [
        { name: "User Research", level: 70 },
        { name: "Wireframing", level: 80 },
        { name: "Prototyping", level: 75 },
        { name: "Visual Design", level: 80 },
        { name: "Usability Testing", level: 65 },
      ],
    },
    {
      title: "Game Development",
      icon: <Gamepad2 size={24} />,
      skills: [
        { name: "Unity", level: 70 },
        { name: "Game Design", level: 75 },
        { name: "3D Modeling", level: 60 },
        { name: "Level Design", level: 65 },
        { name: "Game Mechanics", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my education and professional experience, 
            allowing me to tackle various aspects of digital product development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Additional Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git", "GitHub", "VS Code", "Figma", "Adobe XD", "Photoshop", 
              "MongoDB", "Express.js", "MySQL", "TypeScript", "SASS", "Bootstrap",
              "Next.js", "Firebase", "GraphQL", "REST APIs", "Responsive Design", "SEO"
            ].map((skill, idx) => (
              <span key={idx} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;