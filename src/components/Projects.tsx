import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

import marsadCard from '../assets/projects/marsad/cover.png';
import emadCard from '../assets/projects/emad/cover.png';
import mutqinCard from '../assets/projects/mutqin/cover.png';
import nlpCard from '../assets/projects/nlp/cover.png';
import cataractCard from '../assets/projects/cataract/cover.png';
import forecastingCard from '../assets/projects/forecast/cover.png';

export default function Projects() {
  const projects = [
    {
      title: 'MARSAD: AI-Powered Satellite Image Analysis',
      description:
        'Web app for urban forestation integrating AI-powered object detection and segmentation models. Achieved 67% recall and 60% precision using YOLO-based models.',
      image: marsadCard,
      tags: ['YOLO', 'Computer Vision', 'Python', 'Deep Learning'],
      github: 'https://github.com/Nujud123/MARSAD-AI-Implementation/tree/main',
      //live: '/marsad',
    },
    {
      title: 'EMAD: Intelligent Architectural Compliance',
      description:
        'AI system that analyzes architectural floor plans and validates compliance with Saudi Building Code. Built OCR and information retrieval pipeline.',
      image: emadCard,
      tags: ['OCR', 'NLP', 'Machine Learning', 'Information Retrieval'],
      github: 'https://github.com/Nujud123/cad_compliance_rag',
      //live: '/emad',
    },
    {
      title: 'MUTQIN: Identity & Professional Photo Generation',
      description:
        'End-to-end computer vision pipeline combining detection, segmentation, and enhancement models. Fine-tuned MobileNet backbone for ID validation.',
      image: mutqinCard,
      tags: ['Computer Vision', 'MobileNet', 'Deep Learning', 'Image Enhancement'],
      github: 'https://github.com/BayaderJ/CVProject_TA',
      //live: '/mutqin',
    },
    {
      title: 'NLP-Based Review Sentiment & Rating System',
      description:
        'Full NLP pipeline with preprocessing, vectorization, and embeddings. Achieved 84% accuracy on sentiment classification and MAE of 0.48 on rating prediction.',
      image: nlpCard,
      tags: ['NLP', 'Text Processing', 'Sentiment Analysis', 'Embeddings'],
      github: 'https://github.com/Raghad-Alfarsi/Sentiment_Analysis_Rating_Prediction',
     // live: '/nlp-review',
    },
    {
      title: 'Cataract Detection & Segmentation System',
      description:
        'CNN-based classification model achieving 96% accuracy. Fine-tuned Mask R-CNN for cataract segmentation with 89% Average Precision.',
      image: cataractCard,
      tags: ['CNN', 'Mask R-CNN', 'Medical AI', 'Computer Vision'],
      github: 'https://github.com/AroubAlRizq/AI2Project',
      //live: '/cataract',
    },
    {
      title: 'Daily Sales Forecasting (Time-Series)',
      description:
        'Built and compared SARIMAX and LSTM models for sales forecasting. Achieved best performance with LSTM (MAE = 384), outperforming baseline.',
      image: forecastingCard,
      tags: ['LSTM', 'Time Series', 'SARIMAX', 'Forecasting'],
      github: 'https://github.com/Linah003/Sales-and-Visitor-Forecasting-',
     // live: '/forecast',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-primary-50 hover:border-primary-200"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* hover buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  
                  {/* GitHub external link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-full hover:shadow-lg transition-all hover:scale-110"
                  >
                    <Github size={20} className="text-white" />
                  </a>

                  
                </div>
              </div>

              {/* TEXT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-primary-50 to-cyan-50 text-primary-700 text-xs font-medium rounded-full border border-primary-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
