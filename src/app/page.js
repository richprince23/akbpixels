/* eslint-disable @next/next/no-img-element */
'use client'

import { Camera, Video, Image, User } from 'lucide-react';
import Link from 'next/link'
import Header from './components/header';

const LandingPage = () => {
  const projects = [
    {
      title: 'Autumn Wedding',
      category: 'WEDDING',
      year: '2024',
      image: '/images/projects/IMG_7990.jpeg'
    },
    {
      title: 'Urban Style',
      category: 'PORTRAIT',
      year: '2023',
      image: '/images/projects/water3.jpg'
    },
    {
      title: 'Nature Vibes',
      category: 'LANDSCAPE',
      year: '2024',
      image: '/images/projects/water2.jpg'
    }
  ];

  const services = [
    {
      title: 'Videography',
      description: 'Step into a realm where photography transcends into storytelling. Our videography captures the essence of your moments.',
      icon: Video
    },
    {
      title: 'Photography',
      description: 'Professional photography services for events, portraits, and commercial needs.',
      icon: Camera
    },
    {
      title: 'Interior shots',
      description: 'From breathtaking interior shots that tell a story to the elegance of studio portraits.',
      icon: Image
    },
    {
      title: 'Studio portraits',
      description: 'Step into our studio, where every portrait is a masterpiece. From business headshots to family portraits.',
      icon: User
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="relative h-screen">
        <img
          src="/images/IMG_771845.jpg"
          alt="Camera background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-50 object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
              I&apos;M PROFESSIONAL<br />PHOTOGRAPHER
            </h1>
            <p className="text-xl max-w-2xl mb-8">
              Based in London, I specialize in ceremonial, landscape, advertorial and conceptual photography. Here you will be able to find my latest shots.
            </p>
            <Link href="#contact">
              <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
                Get in touch →
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-20 bg-black" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16">SERVICES I PROVIDE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-zinc-900 p-8 rounded-lg">
                <service.icon className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-zinc-900" id="portfolio">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold">SELECTED PROJECTS</h2>
            <Link href="/projects" className="text-sm hover:text-gray-300">
              More projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group relative">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <p className="text-sm mb-2">{project.category} • {project.year}</p>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-black" id="contact">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">GET IN TOUCH</h2>
            <p className="text-gray-400 mb-8">
              Feel free to reach out if you want to collaborate with us, or simply have a chat.
            </p>
            <div className="space-y-4">
              <p><a href="tel:+447399068099">+447399068099</a></p>
              <p><a href="mailto:akbpixels@gmail.com">akbpixels@gmail.com</a></p>
              <p>2-4 Deacon Street</p>
              <p>Elephant Park, Elephant and Castle</p>
              <p>London</p>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full bg-zinc-900 p-4 rounded" />
            <input type="email" placeholder="Email address" className="w-full bg-zinc-900 p-4 rounded" />
            <input type="tel" placeholder="Phone number" className="w-full bg-zinc-900 p-4 rounded" />
            <textarea placeholder="Message..." className="w-full bg-zinc-900 p-4 rounded h-32" />
            <button className="bg-white text-black px-8 py-3 rounded hover:bg-gray-200">
              Send
            </button>
          </form>
        </div>
      </div>

      <footer>
        <div className="py-8 px-6 text-center">
          <p>Copyright &copy; 2024. Suptle Solutions Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;