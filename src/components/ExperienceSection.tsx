'use client';

interface ExperienceSectionProps {
  id: string;
}

export default function ExperienceSection({ id }: ExperienceSectionProps) {
  const experiences = [
    {
      title: 'Team Leader (Frontend)',
      company: 'NITSAN TECHNOLOGY',
      period: '2025 - Current',
      description: 'Lead 5+ developers, defining technical standards, project roadmaps, and sprint execution.',
      achievements: [
        'Technical & Team Strategy: Lead 5+ developers, defining technical standards, project roadmaps, and sprint execution',
        'Project Coordination: Act as the primary technical point of contact for complex project handoffs and architectural decision-making',
        'Talent Development: Responsible for coaching and performance management, focused on elevating team skill sets in modern frameworks (React/Vue)'
      ]
    },
    {
      title: 'Super Senior Developer',
      company: 'NITSAN TECHNOLOGY',
      period: '2023 - 2025',
      description: 'Drove the technical direction for major enterprise projects, ensuring scalable and maintainable frontend architecture.',
      achievements: [
        'Architectural Leadership: Drove the technical direction for major enterprise projects, ensuring scalable and maintainable frontend architecture',
        'Advanced Technology Integration: Spearheaded the development of a key cross-platform mobile application using React Native and integrating AI functionality',
        'Standards & Quality: Designed and implemented a high-performance, TypeScript-based WCAG compliance audit tool'
      ]
    },
    {
      title: 'Senior Frontend Developer',
      company: 'NITSAN TECHNOLOGY',
      period: '2022 - 2023',
      description: 'Led the adoption and implementation of modern dynamic UIs using React and Vue.js in production environments.',
      achievements: [
        'Framework Specialization: Led the adoption and implementation of modern dynamic UIs using React and Vue.js in production environments',
        'Mentorship & Review: Responsible for performing rigorous code reviews and mentoring junior and mid-level developers',
        'Complex CMS Customization: Delivered complex feature customizations and integrations within the existing TYPO3 CMS stack'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'NITSAN TECHNOLOGY',
      period: '2019 - 2022',
      description: 'Established a strong base in HTML5, CSS3, and JavaScript, focusing on performance and cross-browser compatibility.',
      achievements: [
        'Core Foundations: Established a strong base in HTML5, CSS3, and JavaScript, focusing on performance and cross-browser compatibility',
        'TYPO3 Development: Gained deep foundational experience in TYPO3 CMS development and theme creation',
        'Collaboration: Served as the primary implementation link between UI/UX designers and backend integration teams'
      ]
    }
  ];

  return (
    <section id={id} className="py-20 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Journey
          </span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          A clear progression showing continuous growth from deep technical development into a strategic leadership role.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 group">
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              
              {/* Content Card */}
              <div className="ml-16 bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-blue-300 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="text-white/60 font-medium">{exp.period}</div>
                </div>
                
                <p className="text-white/80 mb-6 leading-relaxed">{exp.description}</p>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-white/70">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
