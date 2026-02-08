import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import nujudPic from '../assets/nujud_professional_pic.jpeg';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-cyan-50 to-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={nujudPic}
              alt="Nujud Almaleki"
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-2xl border-4 border-primary-200"
            />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
             <span className="bg-gradient-to-r from-primary-600 via-cyan-500 to-accent-500 bg-clip-text text-transparent">Nujud Almaleki</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI & Machine Learning Engineer
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Developing applied AI solutions using Machine Learning, Deep Learning, and Computer Vision
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-cyan-500 text-white rounded-lg font-medium hover:shadow-xl transition-all hover:scale-105 shadow-lg"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl border-2 border-primary-200 font-semibold"
            >
              View Work
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Nujud123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-br from-primary-100 to-cyan-100 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Github size={24} className="text-primary-600" />
            </a>
            <a
              href="https://linkedin.com/in/nujud-almaleki"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-br from-primary-100 to-cyan-100 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Linkedin size={24} className="text-primary-600" />
            </a>
            <a
              href="mailto:nujudalmaleki@gmail.com"
              className="p-3 bg-gradient-to-br from-primary-100 to-cyan-100 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Mail size={24} className="text-primary-600" />
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
