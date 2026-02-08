import { Code, Lightbulb, Rocket } from 'lucide-react';
import nujudLogo from '../assets/nujud_logo.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={nujudLogo}
              alt="Working"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Developing AI solutions that drive impact
            </h3>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              I'm a Computer Science graduate from King Abdulaziz University with a specialization in AI,
              and completed the AI Model Building & Development Bootcamp at Tuwaiq Academy. With hands-on experience in machine learning, deep learning,
              and computer vision.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              My approach combines strong technical foundations with creative problem-solving, ensuring that
              each project not only achieves its goals but also demonstrates innovation and technical excellence.
              I thrive in collaborative environments and am committed to continuous learning and growth.
            </p>
            <button
              type="button"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary-600 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105"
            >
              Let’s Connect
            </button>

          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-primary-50 to-cyan-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-primary-100">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mb-4">
              <Code className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Machine Learning Expertise</h4>
            <p className="text-gray-600">
              Building robust ML models using TensorFlow, PyTorch, and Scikit-learn with a focus on real-world applications.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-cyan-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-primary-100">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Computer Vision & NLP</h4>
            <p className="text-gray-600">
              Implementing cutting-edge solutions in image processing, object detection, and natural language understanding.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-cyan-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-primary-100">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">End-to-End Development</h4>
            <p className="text-gray-600">
              From data collection and model training to deployment using Streamlit and Power BI for visualization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
