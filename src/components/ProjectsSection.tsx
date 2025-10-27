'use client';

interface ProjectsSectionProps {
  id: string;
}

export default function ProjectsSection({ id }: ProjectsSectionProps) {
  const projects = [
    {
      title: 'AI-Powered React Native App',
      description: 'Cross-platform mobile solution leveraging React Native, featuring secure user authentication and personalized content driven by AI algorithms.',
      technologies: ['React Native', 'AI Integration', 'Authentication', 'Cross-platform'],
      impact: 'Delivered scalable mobile solution with AI-driven personalization features.',
      color: 'blue'
    },
    {
      title: 'Accessibility Audit Widget',
      description: 'A mission-critical, high-performance tool built with Vite and TypeScript for real-time WCAG compliance monitoring and reporting on client sites.',
      technologies: ['Vite', 'TypeScript', 'WCAG', 'Real-time Monitoring'],
      impact: 'Enabled real-time accessibility compliance monitoring across multiple client sites.',
      color: 'green'
    },
    {
      title: 'T3Planet - TYPO3 Shop',
      description: 'E-commerce platform showcasing deep integration and custom development within the TYPO3 CMS for product sales and management.',
      technologies: ['TYPO3', 'E-commerce', 'Custom Extensions', 'PHP'],
      impact: 'Demonstrated advanced TYPO3 CMS capabilities in e-commerce solutions.',
      color: 'purple'
    },
    {
      title: 'Accesstive Dashboard',
      description: 'A central data dashboard used for sophisticated management and long-term monitoring of accessibility metrics across multiple web properties.',
      technologies: ['Dashboard', 'Data Visualization', 'Accessibility Metrics', 'Monitoring'],
      impact: 'Centralized accessibility monitoring and management across multiple web properties.',
      color: 'yellow'
    },
    {
      title: 'TYPO3 Chatbot Integration',
      description: 'Development of an intelligent chatbot solution engineered to integrate seamlessly and provide support directly within TYPO3-powered interfaces.',
      technologies: ['TYPO3', 'Chatbot', 'AI', 'Integration'],
      impact: 'Enhanced user support capabilities within TYPO3-powered interfaces.',
      color: 'pink'
    },
    {
      title: 'HDNET Client Project',
      description: 'Execution of a large-scale, enterprise client project, showcasing complex frontend architecture and extensive use of the TYPO3 system.',
      technologies: ['Enterprise', 'TYPO3', 'Complex Architecture', 'Large-scale'],
      impact: 'Delivered enterprise-level solution with complex frontend architecture.',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'hover:border-blue-400/50 hover:shadow-blue-500/20',
      green: 'hover:border-green-400/50 hover:shadow-green-500/20',
      purple: 'hover:border-purple-400/50 hover:shadow-purple-500/20',
      yellow: 'hover:border-yellow-400/50 hover:shadow-yellow-500/20',
      pink: 'hover:border-pink-400/50 hover:shadow-pink-500/20',
      indigo: 'hover:border-indigo-400/50 hover:shadow-indigo-500/20'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'text-blue-400',
      green: 'text-green-400',
      purple: 'text-purple-400',
      yellow: 'text-yellow-400',
      pink: 'text-pink-400',
      indigo: 'text-indigo-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id={id} className="py-20 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Project Showcase
          </span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Highlighting key projects that demonstrate technical expertise and business impact
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`group bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${getColorClasses(project.color)}`}
          >
            {/* Project Icon */}
            <div className={`text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 ${getIconColor(project.color)}`}>
              {project.title === 'AI-Powered React Native App' && '⚛'}
              {project.title === 'Accessibility Audit Widget' && '✔'}
              {project.title === 'T3Planet - TYPO3 Shop' && '🛍'}
              {project.title === 'Accesstive Dashboard' && '📊'}
              {project.title === 'TYPO3 Chatbot Integration' && '💬'}
              {project.title === 'HDNET Client Project' && '💻'}
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-white/80 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="border-t border-white/20 pt-4">
              <h4 className="text-white font-semibold mb-2">Impact:</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
