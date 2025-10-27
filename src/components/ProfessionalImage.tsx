'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProfessionalImageProps {
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'xl';
}

export default function ProfessionalImage({ className = '', size = 'large' }: ProfessionalImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-32 h-32',
    large: 'w-48 h-48',
    xl: 'w-64 h-64'
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Advanced Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-all duration-700 animate-glow"></div>
      
      {/* Secondary Glow Ring */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-500 scale-110"></div>
      
      {/* Image Container */}
      <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 group-hover:scale-110 transition-all duration-700 shadow-2xl backdrop-blur-glass`}>
        <Image
          src="/arun-image.jpg"
          alt="Arun Solanki - Frontend Team Leader"
          width={256}
          height={256}
          className={`object-cover w-full h-full transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          onLoad={() => setIsLoaded(true)}
          priority
        />
        
        {/* Loading Skeleton with Shimmer */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </div>
        )}
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Floating Achievement Badges with Advanced Animations */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-bounce shadow-lg border-2 border-white/30 group-hover:scale-125 transition-transform duration-300">
        <span className="text-white text-lg font-bold animate-heartbeat">✓</span>
      </div>
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce shadow-lg border-2 border-white/30 group-hover:scale-125 transition-transform duration-300">
        <span className="text-white text-xl font-bold animate-wiggle">⭐</span>
      </div>
      <div className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center animate-bounce shadow-lg border-2 border-white/30 group-hover:scale-125 transition-transform duration-300">
        <span className="text-white text-sm font-bold animate-pulse-fast">🚀</span>
      </div>
      
      {/* Additional Floating Elements */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-float opacity-60"></div>
      <div className="absolute -bottom-8 right-1/4 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}
