"use client"

import React, { useState } from 'react';
import Header from '../components/header';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'WEDDING', 'PORTRAIT', 'LANDSCAPE', 'COMMERCIAL'];

  const projects = [
    {
      title: 'Autumn Wedding',
      category: 'WEDDING',
      year: '2023',
      client: 'Brown Family',
      image: '/api/placeholder/600/800'
    },
    {
      title: 'Urban Style',
      category: 'PORTRAIT',
      year: '2023',
      client: 'Fashion Magazine',
      image: '/api/placeholder/600/800'
    },
    {
      title: 'City Lights',
      category: 'LANDSCAPE',
      year: '2023',
      client: 'NYC Tourism',
      image: '/api/placeholder/600/800'
    },
    {
      title: 'Product Launch',
      category: 'COMMERCIAL',
      year: '2023',
      client: 'Tech Corp',
      image: '/api/placeholder/600/800'
    },
    {
      title: 'Spring Collection',
      category: 'COMMERCIAL',
      year: '2023',
      client: 'Fashion Brand',
      image: '/api/placeholder/600/800'
    },
    {
      title: 'Mountain Wedding',
      category: 'WEDDING',
      year: '2023',
      client: 'Smith Family',
      image: '/api/placeholder/600/800'
    }
  ];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Projects hero" 
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-4">
              MY WORK
            </h1>
            <p className="text-xl max-w-2xl">
              A showcase of my best photography projects and collaborations.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-black py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full border ${
                  activeFilter === category
                    ? 'bg-white text-black'
                    : 'border-white text-white hover:bg-white hover:text-black'
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.title} className="group relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <p className="text-sm mb-2">{project.category} • {project.year}</p>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300">Client: {project.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-zinc-900 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s create something amazing together. Get in touch to discuss your vision.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded hover:bg-gray-200">
            Contact me →
          </button>
        </div>
      </div>
      {/* footer */}
    <footer>
      <div className='py-8 px-6 text-center'>
        <p>Copyright &copy; 2024. Suptle Solutions Ltd</p>
      </div>
    </footer>
    </div>
  );
};

export default ProjectsPage;