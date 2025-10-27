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
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 sm:mb-8">
          <span className="bg-gradient-to-r from-slate-100 via-blue-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-2xl">
            ARUN SOLANKI
          </span>
        </h1>
        
        {/* Dynamic Subtitle */}
        <div className="relative mb-8">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white/95 drop-shadow-lg px-4">
            Frontend Team Leader & Enterprise CMS Specialist
          </p>
          <div className="w-48 h-2 bg-gradient-to-r from-slate-300 via-blue-400 to-indigo-500 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Compelling Description */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16 px-4">
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-4 sm:mb-6">
            <svg className="inline w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipRule="evenodd" />
            </svg>
            <strong className="text-yellow-300">Serving as the Frontend Team Leader</strong> at NITSAN TECHNOLOGY, I fuse deep expertise in <span className="text-blue-300 font-semibold">TYPO3 CMS</span> and core web foundations with modern framework capabilities (React), delivering <span className="text-green-300 font-semibold">secure</span>, <span className="text-purple-300 font-semibold">highly available</span>, and <span className="text-pink-300 font-semibold">complex enterprise</span> digital solutions.
          </p>
          <p className="text-base sm:text-lg text-white/80 italic">
            &ldquo;Precision & Scale in Enterprise Development&rdquo;
          </p>
        </div>

        {/* Stunning Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16 px-4">
          <div className="group bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl px-4 sm:px-8 py-6 sm:py-8 rounded-2xl sm:rounded-3xl border border-slate-600/30 hover:border-blue-500/60 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25">
            <div className="text-3xl sm:text-5xl font-black text-blue-300 mb-2 sm:mb-3 group-hover:scale-125 transition-transform duration-300">6+</div>
            <div className="text-white/90 font-bold text-sm sm:text-lg">Years of Enterprise Development</div>
            <div className="mt-2 sm:mt-4 w-full bg-white/20 rounded-full h-1 sm:h-2">
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-1 sm:h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-amber-800/30 to-orange-900/30 backdrop-blur-xl px-4 sm:px-8 py-6 sm:py-8 rounded-2xl sm:rounded-3xl border border-amber-600/30 hover:border-yellow-400/60 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/25">
            <div className="text-3xl sm:text-5xl font-black text-yellow-300 mb-2 sm:mb-3 group-hover:scale-125 transition-transform duration-300">★</div>
            <div className="text-white/90 font-bold text-sm sm:text-lg">&ldquo;Shining Star&rdquo; Award Winner (2023)</div>
            <div className="mt-2 sm:mt-4 w-full bg-white/20 rounded-full h-1 sm:h-2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-1 sm:h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-emerald-800/30 to-green-900/30 backdrop-blur-xl px-4 sm:px-8 py-6 sm:py-8 rounded-2xl sm:rounded-3xl border border-emerald-600/30 hover:border-green-400/60 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-green-500/25">
            <div className="text-3xl sm:text-5xl font-black text-green-300 mb-2 sm:mb-3 group-hover:scale-125 transition-transform duration-300">50+</div>
            <div className="text-white/90 font-bold text-sm sm:text-lg">Projects</div>
            <div className="text-xs sm:text-sm text-green-200/80 mt-1 sm:mt-2">Successfully Delivered</div>
            <div className="mt-2 sm:mt-4 w-full bg-white/20 rounded-full h-1 sm:h-2">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-1 sm:h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-indigo-800/30 to-purple-900/30 backdrop-blur-xl px-4 sm:px-8 py-6 sm:py-8 rounded-2xl sm:rounded-3xl border border-indigo-600/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25">
            <div className="text-3xl sm:text-5xl font-black text-purple-300 mb-2 sm:mb-3 group-hover:scale-125 transition-transform duration-300">5+</div>
            <div className="text-white/90 font-bold text-sm sm:text-lg">Team Members</div>
            <div className="text-xs sm:text-sm text-purple-200/80 mt-1 sm:mt-2">Currently Leading</div>
            <div className="mt-2 sm:mt-4 w-full bg-white/20 rounded-full h-1 sm:h-2">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-1 sm:h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16 px-4">
        <div className="group bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-600/20 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
          <div className="text-blue-400 text-3xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-125 transition-transform duration-300">
            <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">Email</h3>
          <p className="text-white/80 hover:text-white transition-colors text-sm sm:text-lg">arunsolanki1463@gmail.com</p>
        </div>
        
        <div className="group bg-gradient-to-br from-emerald-800/20 to-green-900/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-emerald-600/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
          <div className="text-green-400 text-3xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-125 transition-transform duration-300">
            <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">Location</h3>
          <p className="text-white/80 hover:text-white transition-colors text-sm sm:text-lg">Bhavnagar, Gujarat, India</p>
        </div>
        
        <div className="group bg-gradient-to-br from-indigo-800/20 to-purple-900/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-indigo-600/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
          <div className="text-purple-400 text-3xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-125 transition-transform duration-300">
            <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">Company</h3>
          <p className="text-white/80 hover:text-white transition-colors text-sm sm:text-lg">NITSAN TECHNOLOGY</p>
        </div>
      </div>
    </section>
  );
}
