'use client';

import { useRef, useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, DoughnutController, ArcElement } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, DoughnutController, ArcElement);

export default function Home() {
  const chartRef = useRef<ChartJS<'bar'>>(null);
  const [activeSection, setActiveSection] = useState('overview');

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle scroll for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced skills data with more comprehensive categories
  const skillsData = {
    labels: [
      'HTML5, CSS3, SCSS', 
      'JavaScript, TypeScript',
      'React.js, Next.js', 
      'TYPO3 CMS Integration', 
      'Bootstrap, Tailwind CSS',
      'Git, GitHub, Jira',
      'Vercel, Netlify',
      'WCAG Accessibility',
      'Node.js, Express',
      'MySQL, MongoDB'
    ],
    datasets: [{
      label: 'Skill Level',
      data: [9.8, 9.7, 9.5, 9.6, 9.4, 9.2, 9.0, 9.3, 8.5, 8.0],
      backgroundColor: [
        '#3585B4', '#2E86AB', '#A23B72', '#F18F01', '#C73E1D',
        '#3585B4', '#2E86AB', '#A23B72', '#F18F01', '#C73E1D'
      ],
      borderColor: '#0B2D48',
      borderWidth: 2,
      borderRadius: 6
    }]
  };

  // Technology expertise doughnut chart
  const techExpertiseData = {
    labels: ['Frontend Development', 'TYPO3 CMS', 'React Ecosystem', 'Accessibility', 'Team Leadership'],
    datasets: [{
      data: [35, 25, 20, 15, 5],
      backgroundColor: [
        '#3585B4',
        '#2E86AB', 
        '#A23B72',
        '#F18F01',
        '#C73E1D'
      ],
      borderWidth: 0,
      cutout: '60%'
    }]
  };

  const techExpertiseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          font: { size: 12, weight: 'bold' as const },
          color: '#0B2D48'
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: { label: string; parsed: number }) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      }
    }
  };

  const chartOptions = {
    indexAxis: 'y' as const,
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          title: function(tooltipItems: unknown[]) {
            const item = tooltipItems[0] as { chart: { data: { labels: string[] } }; dataIndex: number };
            const label = item.chart.data.labels[item.dataIndex];
            if (Array.isArray(label)) {
              return label.join(' ');
            }
            return label;
          }
        }
      },
      legend: { display: false },
      title: {
        display: true,
        text: 'Self-Assessed Proficiency (out of 10)',
        padding: { bottom: 20 },
        font: { size: 14 },
        color: '#205375'
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: false },
        ticks: { color: '#205375' }
      },
      y: {
        grid: { color: '#A2D2FF' },
        ticks: { color: '#0B2D48', font: { weight: 'bold' as const } }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-800 antialiased">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-slate-800">Arun Solanki</div>
            <div className="hidden md:flex space-x-8">
              {['overview', 'skills', 'experience', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === section 
                      ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <button className="text-slate-600">☰</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl pt-20">
        
        {/* Hero Section */}
        <section id="overview" className="py-20 md:py-32">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-blue-600">
                AS
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              ARUN SOLANKI
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-slate-600 mb-4">Frontend Team Leader</p>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto mb-8">
              Passionate about creating exceptional user experiences through innovative frontend solutions. 
              Leading teams to deliver scalable, accessible, and performant web applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-slate-200">
                <span className="text-2xl font-bold text-blue-600">6+</span>
                <span className="ml-2 text-slate-600">Years Experience</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-slate-200">
                <span className="text-2xl font-bold text-purple-600">★</span>
                <span className="ml-2 text-slate-600">Shining Star 2023</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-slate-200">
                <span className="text-2xl font-bold text-indigo-600">50+</span>
                <span className="ml-2 text-slate-600">Projects Delivered</span>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="text-blue-600 text-2xl mb-3">📧</div>
              <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
              <p className="text-slate-600">arun.solanki@nitsan.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="text-green-600 text-2xl mb-3">📍</div>
              <h3 className="font-semibold text-slate-800 mb-2">Location</h3>
              <p className="text-slate-600">Bhavnagar, Gujarat, India</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="text-purple-600 text-2xl mb-3">💼</div>
              <h3 className="font-semibold text-slate-800 mb-2">Company</h3>
              <p className="text-slate-600">NITSAN TECHNOLOGY</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive skill set spanning modern frontend technologies, CMS integration, and team leadership
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Skills Bar Chart */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Skill Proficiency</h3>
              <div className="relative w-full h-[500px]">
                <Bar ref={chartRef} data={skillsData} options={chartOptions} />
              </div>
            </div>

            {/* Technology Expertise */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Technology Distribution</h3>
              <div className="relative w-full h-[500px]">
                <Doughnut data={techExpertiseData} options={techExpertiseOptions} />
              </div>
            </div>
          </div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Frontend</h3>
              <p className="text-blue-100">React, Next.js, TypeScript, HTML5, CSS3, SCSS</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-2">CMS & Tools</h3>
              <p className="text-purple-100">TYPO3, WordPress, Git, Jira, Vercel</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">♿</div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-green-100">WCAG 2.1, ARIA, Screen Readers, Audit Tools</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">Leadership</h3>
              <p className="text-orange-100">Team Management, Mentoring, Project Coordination</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A progressive career path showcasing growth from Junior Developer to Frontend Team Leader
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              
              <div className="space-y-12">
                {/* Current Role */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-16 bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">2024 – Current</span>
                        <h3 className="text-2xl font-bold text-slate-800 mt-2">Frontend Team Leader</h3>
                        <p className="text-slate-600 font-medium">NITSAN TECHNOLOGY, Bhavnagar</p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">Current Role</span>
                      </div>
                    </div>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        Leading a team of 5+ frontend developers and coordinating project deliverables across multiple client projects
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        Mentoring junior developers and establishing coding standards and best practices for the team
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        Managing project timelines and ensuring quality delivery of complex TYPO3 and React applications
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        Collaborating with stakeholders to define technical requirements and architecture decisions
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Super Senior Role */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 top-2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-16 bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Aug 2023 – 2024</span>
                        <h3 className="text-2xl font-bold text-slate-800 mt-2">Super Senior Frontend Developer</h3>
                        <p className="text-slate-600 font-medium">NITSAN TECHNOLOGY, Bhavnagar</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        Developed complex TYPO3 extensions including T3AI, T3AC, T3AA, and TAL for enhanced CMS functionality
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        Architected and built high-performance accessibility audit tools with Vite and TypeScript
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        Led development of customer projects including HDNET and EnviTech with custom TYPO3 integrations
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        Implemented advanced SCSS architecture and component-based development workflows
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Senior Role */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 top-2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-16 bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Jan 2022 – Aug 2023</span>
                        <h3 className="text-2xl font-bold text-slate-800 mt-2">Senior Frontend Developer</h3>
                        <p className="text-slate-600 font-medium">NITSAN TECHNOLOGY, Bhavnagar</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-3 mt-1">•</span>
                        Developed dynamic web applications using React, Vue.js, and TypeScript for interactive user experiences
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-3 mt-1">•</span>
                        Built T3Planet e-commerce platform with deep TYPO3 CMS integration and custom extensions
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-3 mt-1">•</span>
                        Created Accesstive accessibility widget and live audit tools for WCAG compliance testing
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-3 mt-1">•</span>
                        Collaborated with UI/UX designers to translate wireframes into pixel-perfect, responsive interfaces
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Junior Role */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 top-2 w-4 h-4 bg-slate-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-16 bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <span className="text-sm font-semibold text-slate-600 bg-slate-50 px-3 py-1 rounded-full">June 2019 – Jan 2022</span>
                        <h3 className="text-2xl font-bold text-slate-800 mt-2">Junior Frontend Developer</h3>
                        <p className="text-slate-600 font-medium">NITSAN TECHNOLOGY, Bhavnagar</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-slate-500 mr-3 mt-1">•</span>
                        Developed responsive websites using HTML, CSS, JavaScript, and Bootstrap frameworks
                      </li>
                      <li className="flex items-start">
                        <span className="text-slate-500 mr-3 mt-1">•</span>
                        Customized WordPress projects with Elementor Pro for client-specific requirements
                      </li>
                      <li className="flex items-start">
                        <span className="text-slate-500 mr-3 mt-1">•</span>
                        Learned TYPO3 CMS fundamentals and contributed to various client projects
                      </li>
                      <li className="flex items-start">
                        <span className="text-slate-500 mr-3 mt-1">•</span>
                        Participated in code reviews and adopted Git version control and Jira project management
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Project Showcase
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Key projects demonstrating expertise in TYPO3 CMS, React development, and accessibility solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* T3Planet */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🛒</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">T3Planet E-commerce</h3>
              <p className="text-slate-600 mb-4">Comprehensive e-commerce platform for TYPO3 products with deep CMS integration, custom extensions, and responsive design.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">TYPO3</span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">React</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">E-commerce</span>
              </div>
              <div className="text-sm text-slate-500">
                <strong>Impact:</strong> Increased sales by 40% through improved user experience
              </div>
            </div>

            {/* Accesstive */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">♿</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Accesstive Widget</h3>
              <p className="text-slate-600 mb-4">High-performance accessibility widget with live audit capabilities for real-time WCAG compliance testing.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">Accessibility</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">TypeScript</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">WCAG 2.1</span>
              </div>
              <div className="text-sm text-slate-500">
                <strong>Impact:</strong> Helped 100+ websites achieve WCAG compliance
              </div>
            </div>

            {/* TYPO3 Extensions */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚙️</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">TYPO3 Extensions Suite</h3>
              <p className="text-slate-600 mb-4">Developed multiple TYPO3 extensions including T3AI, T3AC, T3AA, and TAL for enhanced CMS functionality.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded">TYPO3</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">PHP</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">Extensions</span>
              </div>
              <div className="text-sm text-slate-500">
                <strong>Impact:</strong> 10,000+ downloads across all extensions
              </div>
            </div>

            {/* HDNET */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏢</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">HDNET Client Project</h3>
              <p className="text-slate-600 mb-4">Large-scale client project with complex TYPO3 integrations, custom frontend components, and responsive design.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">TYPO3</span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">SCSS</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">Enterprise</span>
              </div>
              <div className="text-sm text-slate-500">
                <strong>Impact:</strong> Reduced page load time by 60%
              </div>
            </div>

            {/* EnviTech */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌱</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">EnviTech Website</h3>
              <p className="text-slate-600 mb-4">Environmental technology company website with custom TYPO3 development and modern frontend architecture.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">TYPO3</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">JavaScript</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">Responsive</span>
              </div>
              <div className="text-sm text-slate-500">
                <strong>Impact:</strong> 95% mobile traffic increase
              </div>
            </div>

            {/* Live Audit */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Accesstive Live Audit</h3>
              <p className="text-slate-600 mb-4">Real-time accessibility auditing tool with comprehensive WCAG compliance reporting and dashboard analytics.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">Analytics</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">Dashboard</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">Real-time</span>
              </div>
              <div className="text-sm text-slate-500">
                <strong>Impact:</strong> 50% faster accessibility audits
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education & Certifications
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Academic background and professional certifications that support my technical expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <div className="text-4xl mb-6">🎓</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold text-slate-800">Bachelor of Technology (B.Tech)</h4>
                  <p className="text-slate-600">Computer Science & Engineering</p>
                  <p className="text-sm text-slate-500">2015 - 2019</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-lg font-semibold text-slate-800">Higher Secondary School</h4>
                  <p className="text-slate-600">Science Stream</p>
                  <p className="text-sm text-slate-500">2013 - 2015</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <div className="text-4xl mb-6">🏆</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Certifications & Awards</h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-2xl mr-3">⭐</span>
                  <div>
                    <h4 className="font-semibold text-slate-800">Shining Star of the Year</h4>
                    <p className="text-sm text-slate-600">NITSAN TECHNOLOGY - 2023</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-2xl mr-3">♿</span>
                  <div>
                    <h4 className="font-semibold text-slate-800">WCAG 2.1 Accessibility</h4>
                    <p className="text-sm text-slate-600">Web Content Accessibility Guidelines</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-2xl mr-3">⚙️</span>
                  <div>
                    <h4 className="font-semibold text-slate-800">TYPO3 Certified Integrator</h4>
                    <p className="text-sm text-slate-600">Senior Level Certification</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                  <span className="text-2xl mr-3">⚛️</span>
                  <div>
                    <h4 className="font-semibold text-slate-800">React.js Professional</h4>
                    <p className="text-sm text-slate-600">Advanced React Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Ready to discuss your next project or explore new opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <p className="text-slate-600">arun.solanki@nitsan.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Location</h4>
                    <p className="text-slate-600">Bhavnagar, Gujarat, India</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 text-xl">💼</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Company</h4>
                    <p className="text-slate-600">NITSAN TECHNOLOGY</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Availability</h4>
                    <p className="text-slate-600">Open to new opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">6+</div>
                  <div className="text-blue-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-blue-100">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-blue-100">Team Members Led</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">Client Satisfaction</div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <p className="text-blue-100 text-center">
                  &ldquo;Passionate about creating exceptional user experiences through innovative frontend solutions.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-slate-200 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Arun Solanki</h3>
              <p className="text-slate-600">Frontend Team Leader & TYPO3 Expert</p>
            </div>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="mailto:arun.solanki@nitsan.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                📧 Email
              </a>
              <a href="https://linkedin.com/in/arun-solanki" className="text-slate-600 hover:text-blue-600 transition-colors">
                💼 LinkedIn
              </a>
              <a href="https://github.com/arun-solanki" className="text-slate-600 hover:text-blue-600 transition-colors">
                🐙 GitHub
              </a>
            </div>
            <p className="text-slate-500 text-sm">
              &copy; 2025 Arun Solanki. Interactive Resume built with React & Next.js
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}