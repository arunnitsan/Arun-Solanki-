'use client';

import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationContactSection from '@/components/EducationContactSection';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll handling with debouncing
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Loading effect with staggered animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white antialiased transition-all duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${isScrolling ? 'scroll-smooth' : ''}`}
      data-theme="dark"
    >
      {/* Advanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic Gradient Orbs */}
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-slate-600 to-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
          }}
        ></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '20px 20px',
              animation: 'shimmer 20s linear infinite',
            }}
          ></div>
        </div>
        
        {/* Floating Particles with Physics */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-60 animate-bounce"></div>
        <div 
          className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full opacity-80 animate-bounce"
          style={{ animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-70 animate-bounce"
          style={{ animationDelay: '2s' }}
        ></div>
        <div 
          className="absolute top-60 left-1/3 w-1 h-1 bg-pink-400 rounded-full opacity-90 animate-bounce"
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div 
          className="absolute top-80 right-1/4 w-1 h-1 bg-cyan-400 rounded-full opacity-80 animate-bounce"
          style={{ animationDelay: '1.5s' }}
        ></div>
        <div 
          className="absolute bottom-60 right-20 w-1 h-1 bg-yellow-400 rounded-full opacity-70 animate-bounce"
          style={{ animationDelay: '2.5s' }}
        ></div>

        {/* Interactive Mouse Follower */}
        <div 
          className="absolute w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
            opacity: isScrolling ? 0.3 : 0.6,
          }}
        ></div>
      </div>

      {/* Advanced Navigation */}
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl pt-20 relative z-10">
        {/* Hero Section with Advanced Animations */}
        <div className="animate-slide-in-up">
          <HeroSection id="overview" />
        </div>

        {/* Skills Section with Staggered Animation */}
        <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          <SkillsSection id="skills" />
        </div>

        {/* Experience Section */}
        <div className="animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          <ExperienceSection id="experience" />
        </div>

        {/* Projects Section */}
        <div className="animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
          <ProjectsSection id="projects" />
        </div>

        {/* Education & Contact Section */}
        <div className="animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
          <EducationContactSection id="education" />
        </div>

        {/* Advanced Footer */}
        <footer className="py-16 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="glass-card p-8 relative overflow-hidden group">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                &ldquo;Passionate about creating exceptional user experiences through innovative frontend solutions&rdquo;
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-6 mb-6">
                <a 
                  href="https://www.linkedin.com/in/solanki-arun/" 
                  className="text-white/60 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/arunnitsan" 
                  className="text-white/60 hover:text-gray-300 transition-colors duration-300 hover:scale-110 transform"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:arunsolanki1463@gmail.com" 
                  className="text-white/60 hover:text-green-400 transition-colors duration-300 hover:scale-110 transform"
                  aria-label="Email Contact"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                </a>
              </div>
              
              <div className="border-t border-white/10 pt-6">
                <p className="text-white/60 text-sm">
                  © 2025 Arun Solanki. Interactive Resume built with React & Next.js.
                </p>
                <p className="text-white/40 text-xs mt-2">
                  Designed with ❤️ using modern web technologies
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Scroll Progress and Back to Top */}
      <ScrollProgress />
    </div>
  );
}