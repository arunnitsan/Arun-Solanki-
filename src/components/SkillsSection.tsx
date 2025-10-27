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
      data: [9.5, 9.2, 9.0, 8.8, 9.3, 9.1, 8.9, 8.7, 8.5, 8.6],
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
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
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
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
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
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 4 4 0 015.3-3.7A9.963 9.963 0 0110 4c4.042 0 7.5 2.5 9 6a8.97 8.97 0 01-1 4zM8 9a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm-4 4a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
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
              <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-white mb-3">Team Leadership</h4>
          <ul className="text-white/80 space-y-2 text-sm">
            <li>Team Management</li>
            <li>Mentoring</li>
            <li>Task Distribution</li>
            <li>Code Review</li>
            <li>Project Estimation</li>
            <li>Agile Methodology</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
