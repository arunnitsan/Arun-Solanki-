'use client';

import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, DoughnutController, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, DoughnutController, ArcElement);

interface SkillsSectionProps {
  id: string;
}

export default function SkillsSection({ id }: SkillsSectionProps) {
  // Skills data
  const skillsData = {
    labels: [
      'Problem solving', 
      'Responsive design',
      'Web application architecture', 
      'Web accessibility standards', 
      'JavaScript frameworks', 
      'React development',
      'TypeScript usage',
      'Code review practices',
      'Cross-platform applications', 
      'UI/UX collaboration'
    ],
    datasets: [{
      label: 'Skill Level',
      data: [9.9, 9.8, 9.7, 9.7, 9.6, 9.5, 9.5, 9.5, 9.0, 9.0],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(147, 51, 234, 0.8)',
        'rgba(236, 72, 153, 0.8)',
        'rgba(34, 197, 94, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(6, 182, 212, 0.8)',
        'rgba(168, 85, 247, 0.8)'
      ],
      borderColor: [
        'rgba(59, 130, 246, 1)',
        'rgba(147, 51, 234, 1)',
        'rgba(236, 72, 153, 1)',
        'rgba(34, 197, 94, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(239, 68, 68, 1)',
        'rgba(139, 92, 246, 1)',
        'rgba(6, 182, 212, 1)',
        'rgba(168, 85, 247, 1)'
      ],
      borderWidth: 2,
      borderRadius: 8,
      borderSkipped: false,
    }]
  };

  const techExpertiseData = {
    labels: ['Frontend Development', 'CMS & Tools', 'Accessibility', 'Team Leadership'],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(147, 51, 234, 0.8)',
        'rgba(34, 197, 94, 0.8)',
        'rgba(245, 158, 11, 0.8)'
      ],
      borderColor: [
        'rgba(59, 130, 246, 1)',
        'rgba(147, 51, 234, 1)',
        'rgba(34, 197, 94, 1)',
        'rgba(245, 158, 11, 1)'
      ],
      borderWidth: 2,
      cutout: '60%'
    }]
  };

  const chartOptions = {
    indexAxis: 'y' as const,
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
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
        color: '#ffffff'
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: false },
        ticks: { color: '#ffffff' }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        ticks: { color: '#ffffff', font: { weight: 'bold' as const } }
      }
    }
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
          color: '#ffffff'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        callbacks: {
          label: function(context: { label: string; parsed: number }) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      }
    }
  };

  return (
    <section id={id} className="py-20 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Core Competencies
          </span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          My expertise goes beyond code, focusing on the architectural design, accessibility, and problem-solving strategies necessary to build and maintain high-quality, large-scale web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Skills Chart */}
        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Self-Assessed Proficiency (out of 10)</h3>
          <div className="h-96">
            <Bar ref={undefined} data={skillsData} options={chartOptions} />
          </div>
        </div>

        {/* Technology Distribution */}
        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Technology Distribution</h3>
          <div className="h-96">
            <Doughnut data={techExpertiseData} options={techExpertiseOptions} />
          </div>
        </div>
      </div>

      {/* Skills Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="group bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
          <div className="text-blue-400 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.666.804 4.332a1 1 0 01-1.53 1.057L10 18.5l-3.617 1.555a1 1 0 01-1.53-1.057l.804-4.332L6.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-white mb-3">Frontend Development</h4>
          <ul className="text-white/80 space-y-2 text-sm">
            <li>React.js, Next.js</li>
            <li>TypeScript, JavaScript</li>
            <li>HTML5, CSS3, SCSS</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="group bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
          <div className="text-purple-400 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-white mb-3">CMS & Tools</h4>
          <ul className="text-white/80 space-y-2 text-sm">
            <li>TYPO3 (Senior Level)</li>
            <li>WordPress</li>
            <li>Git, GitHub</li>
            <li>Jira, Vercel</li>
          </ul>
        </div>

        <div className="group bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
          <div className="text-green-400 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-white mb-3">Accessibility</h4>
          <ul className="text-white/80 space-y-2 text-sm">
            <li>WCAG 2.1</li>
            <li>ARIA</li>
            <li>Screen Readers</li>
            <li>Audit Tools</li>
          </ul>
        </div>

        <div className="group bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
          <div className="text-yellow-400 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-white mb-3">Team Leadership</h4>
          <ul className="text-white/80 space-y-2 text-sm">
            <li>Team Management</li>
            <li>Mentoring</li>
            <li>Project Coordination</li>
            <li>Agile</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
