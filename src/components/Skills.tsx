export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'SQL', 'Java'],
    },
    {
      title: 'ML & AI',
      skills: [
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'Deep Learning (CNNs, LSTMs)',
        'Computer Vision (YOLO, Segmentation)',
        'NLP (Embeddings, Classification)',
      ],
    },
    {
      title: 'Tools & Deployment',
      skills: ['Streamlit', 'FastAPI', 'Power BI', 'Git & GitHub', 'Google Colab', 'Figma', 'Canva'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-primary-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A snapshot of the tools and technologies I use to build practical AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-xl shadow-md p-8 border border-primary-50 hover:border-primary-200 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-primary-50 to-cyan-50 text-primary-700 text-xs font-medium rounded-full border border-primary-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
