'use client';

import ProfessionalImage from './ProfessionalImage';

interface HeroSectionProps {
  id: string;
}

export default function HeroSection({ id }: HeroSectionProps) {
  return (
    <section id={id} className="py-20 md:py-32 relative z-10">
      <div className="text-center mb-16">
        {/* Professional Image */}
        <div className="mb-12">
          <ProfessionalImage size="xl" />
        </div>

        {/* Epic Main Title */}
        <h1 className="text-7xl md:text-9xl font-black tracking-tight mb-8">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
            ARUN SOLANKI
          </span>
        </h1>
        
        {/* Dynamic Subtitle */}
        <div className="relative mb-8">
          <p className="text-3xl md:text-4xl font-bold mb-6 text-white/95 drop-shadow-lg">
            Frontend Team Leader & Enterprise CMS Specialist
          </p>
          <div className="w-48 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Compelling Description */}
        <div className="max-w-5xl mx-auto mb-16">
          <p className="text-xl text-white/90 leading-relaxed mb-6">
            🚀 <strong className="text-yellow-300">Serving as the Frontend Team Leader</strong> at NITSAN TECHNOLOGY, I fuse deep expertise in <span className="text-blue-300 font-semibold">TYPO3 CMS</span> and core web foundations with modern framework capabilities (React/Vue), delivering <span className="text-green-300 font-semibold">secure</span>, <span className="text-purple-300 font-semibold">highly available</span>, and <span className="text-pink-300 font-semibold">complex enterprise</span> digital solutions.
          </p>
          <p className="text-lg text-white/80 italic">
            &ldquo;Precision & Scale in Enterprise Development&rdquo;
          </p>
        </div>

        {/* Stunning Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="group bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-xl px-8 py-8 rounded-3xl border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25">
            <div className="text-5xl font-black text-blue-300 mb-3 group-hover:scale-125 transition-transform duration-300">6+</div>
            <div className="text-white/90 font-bold text-lg">Years Experience</div>
            <div className="text-sm text-blue-200/80 mt-2">Enterprise Development</div>
            <div className="mt-4 w-full bg-white/20 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-xl px-8 py-8 rounded-3xl border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/25">
            <div className="text-5xl font-black text-yellow-300 mb-3 group-hover:scale-125 transition-transform duration-300">⭐</div>
            <div className="text-white/90 font-bold text-lg">Shining Star</div>
            <div className="text-sm text-yellow-200/80 mt-2">Award 2023</div>
            <div className="mt-4 w-full bg-white/20 rounded-full h-2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl px-8 py-8 rounded-3xl border border-green-400/30 hover:border-green-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/25">
            <div className="text-5xl font-black text-green-300 mb-3 group-hover:scale-125 transition-transform duration-300">50+</div>
            <div className="text-white/90 font-bold text-lg">Projects</div>
            <div className="text-sm text-green-200/80 mt-2">Successfully Delivered</div>
            <div className="mt-4 w-full bg-white/20 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl px-8 py-8 rounded-3xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25">
            <div className="text-5xl font-black text-purple-300 mb-3 group-hover:scale-125 transition-transform duration-300">5+</div>
            <div className="text-white/90 font-bold text-lg">Team Members</div>
            <div className="text-sm text-purple-200/80 mt-2">Currently Leading</div>
            <div className="mt-4 w-full bg-white/20 rounded-full h-2">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="group bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-xl p-8 rounded-3xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
          <div className="text-blue-400 text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">📧</div>
          <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
          <p className="text-white/80 hover:text-white transition-colors text-lg">arunsolanki1463@gmail.com</p>
        </div>
        
        <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl p-8 rounded-3xl border border-green-400/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
          <div className="text-green-400 text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">📍</div>
          <h3 className="text-2xl font-bold text-white mb-4">Location</h3>
          <p className="text-white/80 hover:text-white transition-colors text-lg">Bhavnagar, Gujarat, India</p>
        </div>
        
        <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl p-8 rounded-3xl border border-purple-400/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
          <div className="text-purple-400 text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">💼</div>
          <h3 className="text-2xl font-bold text-white mb-4">Company</h3>
          <p className="text-white/80 hover:text-white transition-colors text-lg">NITSAN TECHNOLOGY</p>
        </div>
      </div>
    </section>
  );
}
