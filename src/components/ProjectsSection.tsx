'use client';

interface ProjectsSectionProps {
  id: string;
}

export default function ProjectsSection({ id }: ProjectsSectionProps) {
  // SVG icons data
  const projectIcons = {
    'NovaOrbit - Shopping App': {
      viewBox: '0 0 22.82 19.446',
      path: 'M10.671 16.507a1.47 1.47 0 11-1.47 1.47 1.47 1.47 0 011.47-1.47zm6.392 0a1.47 1.47 0 11-1.471 1.47 1.47 1.47 0 011.471-1.47zM.913 1.827h2.079a.9.9 0 01.867.66L6.77 12.972a2.743 2.743 0 002.642 2.009h8.873a2.743 2.743 0 002.661-2.079c.619-2.471 1.846-7.383 1.846-7.383a.914.914 0 00-.886-1.13H9.202a.913.913 0 100 1.827h11.535l-1.562 6.249a.915.915 0 01-.889.693H9.413a.917.917 0 01-.883-.671L5.617 1.998a2.727 2.727 0 00-2.628-2H.913a.913.913 0 100 1.827z'
    },
    'T3AC - TYPO3 AI Chatbot': {
      viewBox: '0 0 20 20',
      path: 'M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z'
    },
    'T3AI - TYPO3 AI Assistant': {
      viewBox: '0 0 20 20',
      path: 'M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
    },
    'T3Planet - TYPO3 Shop': {
      viewBox: '0 0 20 20',
      path: 'M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15V9h4v6H8z'
    },
    'HDNET Client Project': {
      viewBox: '0 0 20 20',
      path: 'M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.666.804 4.332a1 1 0 01-1.53 1.057L10 18.5l-3.617 1.555a1 1 0 01-1.53-1.057l.804-4.332L6.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z'
    },
    'Accesstive Accessibility Widget': {
      viewBox: '0 0 20 20',
      path: 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
    },
    'Accesstive Live Audit Tool': {
      viewBox: '0 0 20 20',
      path: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
    },
    'Accesstive Dashboard': {
      viewBox: '0 0 20 20',
      path: 'M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
    }
  };

  const projects = [
    {
      title: 'NovaOrbit - Shopping App',
      description: 'Comprehensive full-stack shopping application featuring mobile app, admin dashboard for data management, and Node.js Express API with MongoDB integration. Developed with AI-assisted coding for enhanced efficiency and innovation.',
      technologies: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'React', 'AI-Assisted Development', 'Mobile App', 'Admin Dashboard'],
      impact: 'Delivered complete e-commerce solution with AI-powered development approach, achieving significant development efficiency improvements through intelligent code generation.',
      color: 'blue',
      url: 'https://github.com/arunnitsan/NovaOrbit'
    },
    {
      title: 'T3AC - TYPO3 AI Chatbot',
      description: 'Native TYPO3 AI Chatbot extension (T3AC) providing 24/7 support with instant engagement and AI automation. First-ever TYPO3 AI Chatbot from TYPO3 AI Universe.',
      technologies: ['TYPO3', 'AI Chatbot', 'AI Models Integration', 'Shadow-dom Templating', 'Backend Demonstration'],
      impact: 'Delivered round-the-clock customer support with instant, relevant responses, reducing response times and improving user engagement.',
      color: 'yellow',
      url: 'https://t3planet.de/en/t3ac-typo3-extension'
    },
    {
      title: 'T3AI - TYPO3 AI Assistant',
      description: 'Complete TYPO3 AI Assistant extension for generating AI content and starting content creation in minutes. Part of T3Planet\'s AI Universe ecosystem.',
      technologies: ['TYPO3', 'AI Content Generation', 'Content Management', 'AI Integration', 'TYPO3 Extensions', 'AI Models Integration', 'Backend Design'],
      impact: 'Enabled rapid content creation and AI-powered content generation within TYPO3 CMS, streamlining content workflows.',
      color: 'pink',
      url: 'https://t3planet.de/en/t3ai-typo3-extension'
    },
    {
      title: 'T3Planet - TYPO3 Shop',
      description: 'E-commerce platform showcasing deep integration and custom development within the TYPO3 CMS ecosystem. Official T3Planet website with comprehensive TYPO3 solutions.',
      technologies: ['TYPO3', 'E-commerce', 'Custom Extensions', 'PHP', 'TYPO3 Templates', 'Frontend Development', 'Backend Development'],
      impact: 'Demonstrated advanced TYPO3 CMS capabilities in e-commerce solutions and served as flagship platform for T3Planet services.',
      color: 'indigo',
      url: 'https://t3planet.de/'
    },
    {
      title: 'HDNET Client Project',
      description: 'Large-scale enterprise client project for HDNET, showcasing complex frontend architecture and extensive use of the TYPO3 system for enterprise-level solutions.',
      technologies: ['Enterprise', 'TYPO3', 'Complex Architecture', 'Large-scale', 'Client Solutions', 'Frontend Development', 'Backend Development', 'Git Collaboration'],
      impact: 'Delivered enterprise-level solution with complex frontend architecture for HDNET\'s digital presence.',
      color: 'cyan',
      url: 'https://hdnet.de/'
    },
    {
      title: 'Accesstive Accessibility Widget',
      description: 'Mission-critical accessibility audit widget built with Vite and TypeScript for real-time WCAG compliance monitoring and reporting on client websites.',
      technologies: ['Vite', 'TypeScript', 'WCAG', 'Real-time Monitoring', 'Accessibility', 'Frontend Development', 'Backend Development', 'Git Collaboration', 'Automatic Alt Text Generation'],
      impact: 'Enabled real-time accessibility compliance monitoring across multiple client sites, improving web accessibility standards.',
      color: 'orange',
      url: 'https://accesstive.com/'
    },
    {
      title: 'Accesstive Live Audit Tool',
      description: 'AI-powered live accessibility audit tool providing real-time WCAG compliance scanning and detailed accessibility reports for websites. Features comprehensive disability-specific testing and instant issue detection.',
      technologies: ['AI Audits', 'WCAG 2.0/2.1/2.2', 'Real-time Scanning', 'Accessibility Testing', 'Live Monitoring', 'Frontend Development', 'Backend Development', 'Git Collaboration', 'Axe-Core API Integration', 'Shadow-dom Templating'],
      impact: 'Delivered instant accessibility compliance reports with AI-powered scanning, enabling real-time accessibility monitoring and compliance verification.',
      color: 'emerald',
      url: 'https://accesstive.com/free-ai-audit?website=https://t3planet.de/'
    },
    {
      title: 'Accesstive Dashboard',
      description: 'Central data dashboard for sophisticated management and long-term monitoring of accessibility metrics across multiple web properties with AI-powered audit capabilities.',
      technologies: ['Dashboard', 'Data Visualization', 'Accessibility Metrics', 'Monitoring', 'AI Audits', 'Frontend Development', 'Backend Development', 'Git Collaboration', 'User Management System'],
      impact: 'Centralized accessibility monitoring and management across multiple web properties with comprehensive reporting.',
      color: 'teal',
      url: 'https://dashboard.accesstive.com/app/'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'hover:border-blue-400/50 hover:shadow-blue-500/20',
      green: 'hover:border-green-400/50 hover:shadow-green-500/20',
      purple: 'hover:border-purple-400/50 hover:shadow-purple-500/20',
      yellow: 'hover:border-yellow-400/50 hover:shadow-yellow-500/20',
      pink: 'hover:border-pink-400/50 hover:shadow-pink-500/20',
      indigo: 'hover:border-indigo-400/50 hover:shadow-indigo-500/20',
      cyan: 'hover:border-cyan-400/50 hover:shadow-cyan-500/20',
      orange: 'hover:border-orange-400/50 hover:shadow-orange-500/20',
      emerald: 'hover:border-emerald-400/50 hover:shadow-emerald-500/20',
      teal: 'hover:border-teal-400/50 hover:shadow-teal-500/20'
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
      indigo: 'text-indigo-400',
      cyan: 'text-cyan-400',
      orange: 'text-orange-400',
      emerald: 'text-emerald-400',
      teal: 'text-teal-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id={id} className="py-20 relative z-10" suppressHydrationWarning={true}>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Project Portfolio
          </span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          A comprehensive portfolio showcasing 10 impactful projects demonstrating versatility across full-stack development, AI integration, mobile applications, e-commerce solutions, and accessibility tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`group bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl flex flex-col h-full ${getColorClasses(project.color)}`}
          >
            {/* Project Icon */}
            <div className={`text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 ${getIconColor(project.color)}`}>
              {(() => {
                const iconData = projectIcons[project.title as keyof typeof projectIcons];
                if (!iconData) return null;
                
                return (
                  <svg 
                    className="w-10 h-10" 
                    fill="currentColor" 
                    viewBox={iconData.viewBox}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      fillRule="evenodd" 
                      d={iconData.path} 
                      clipRule="evenodd" 
                    />
                  </svg>
                );
              })()}
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-white/80 mb-6 leading-relaxed flex-grow">
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

            {/* Impact and Link - Always at bottom */}
            <div className="border-t border-white/20 pt-4 mt-auto">
              <h4 className="text-white font-semibold mb-2">Impact:</h4>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {project.impact}
              </p>
              
              {/* Project Link - Always at the very bottom */}
              {project.url && (
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
