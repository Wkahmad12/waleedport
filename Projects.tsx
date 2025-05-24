import React, { useState } from 'react';
import { ExternalLink, Github, Youtube } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  youtubeLink?: string;
  category: 'web' | 'game' | 'ux' | 'mobile';
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'game' | 'ux' | 'mobile'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Marvel Movies Explorer App",
      description: "A mobile application built with Android Studio and Kotlin for exploring Marvel movies and comics, featuring a modern UI and seamless user experience.",
      image: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fbing.com%2Fth%3Fid%3DOIP.bQqvYFDo8kPFgU-y5nxihgHaLY%26cb%3Dthvnextc2%26pid%3DApi&sp=1748095544T52d41da27b3eab2e02d152aa7350ee37a57fa9503fed2d54e3e84707c4a1403d",
      tags: ["Kotlin", "Android Studio", "Marvel API", "Material Design"],
      demoLink: "https://youtu.be/XgF720iNySE?si=srI1Vuc-tUQ06j92",
      codeLink: "https://github.com/Wkahmad12/comicsapp",
      category: "mobile"
    },
    {
      id: 2,
      title: "Nutrition Tracker Website",
      description: "A comprehensive nutrition tracking platform built with React, Node.js, and Supabase, helping users monitor their dietary habits and achieve health goals.",
      image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Node.js", "Supabase", "Tailwind CSS"],
      demoLink: "https://nutribuddy.vercel.app/",
      codeLink: "#",
      category: "web"
    },
    {
      id: 3,
      title: "Ping Pong Game",
      description: "An engaging ping pong game developed and published on itch.io, featuring smooth gameplay mechanics and multiplayer support.",
      image: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Game Development", "JavaScript", "HTML5 Canvas", "Multiplayer"],
      demoLink: "https://itch.io/dashboard",
      codeLink: "#",
      category: "game"
    },
    {
      id: 4,
      title: "Car Marketplace UX Design",
      description: "A comprehensive UX design project for a buy and sell motor cars platform, focusing on user journey optimization and conversion rate improvement.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["UX Design", "Figma", "User Research", "Prototyping"],
      demoLink: "https://www.figma.com/proto/Jok9VmddEoCrtdIBCrIfDJ/hifi?node-id=6-6&starting-point-node-id=6%3A2",
      category: "ux"
    },
    {
      id: 5,
      title: "AI Chatbot Web App",
      description: "An AI-powered chatbot built with React and Node.js, providing natural language understanding and seamless user interaction.",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "AI", "Chatbot"],
      youtubeLink: "https://www.youtube.com/watch?v=pQsLXqQ7MpQ",
      codeLink: "https://dialogflow.cloud.google.com/#/agent/aboutpakistan-wk9n/intents",
      category: "web"
    },
    {
      id: 6,
      title: "Book Review Website",
      description: "A responsive book review platform built with Next.js and Tailwind CSS, allowing users to browse, review, and rate books.",
      image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Next.js", "Tailwind CSS", "React", "SSR"],
      demoLink: "https://wkahmad12.github.io/#shop",
      codeLink: "https://github.com/Wkahmad12/wkahmad12.github.io",
      category: "web"
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my diverse portfolio spanning web development, mobile apps, 
            game development, and UX design.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 text-sm font-medium ${
                filter === 'web' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Web
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-4 py-2 text-sm font-medium ${
                filter === 'mobile' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Mobile
            </button>
            <button
              onClick={() => setFilter('game')}
              className={`px-4 py-2 text-sm font-medium ${
                filter === 'game' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Games
            </button>
            <button
              onClick={() => setFilter('ux')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                filter === 'ux' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              UX Design
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <div className="flex space-x-3">
                      {project.demoLink && (
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.youtubeLink && (
                        <a
                          href={project.youtubeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
                          title="YouTube Demo"
                        >
                          <Youtube size={18} />
                        </a>
                      )}
                      {project.codeLink && (
                        <a 
                          href={project.codeLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition-colors"
                          title="Source Code"
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-gray-700 text-lg">
          These are some of my projects. For more projects, visit my{' '}
          <a
            href="https://github.com/Wkahmad12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub account
          </a>.
        </p>
      </div>
    </section>
  );
};

export default Projects;
