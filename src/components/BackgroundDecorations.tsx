
import React from 'react';

const BackgroundDecorations = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient spheres */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-600/20 via-violet-500/15 to-fuchsia-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-60 right-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 via-purple-400/15 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-violet-600/25 via-purple-500/20 to-blue-600/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-32 right-1/3 w-32 h-32 border border-purple-400/30 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-40 right-10 w-24 h-24 border border-violet-300/25 rotate-45 animate-pulse"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full animate-bounce-slow"></div>
      
      {/* Stars field */}
      <div className="absolute top-10 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-twinkle"></div>
      <div className="absolute top-24 right-1/4 w-1 h-1 bg-purple-300/80 rounded-full animate-twinkle delay-500"></div>
      <div className="absolute top-40 left-1/2 w-1.5 h-1.5 bg-violet-200/70 rounded-full animate-twinkle delay-1000"></div>
      <div className="absolute bottom-32 left-10 w-1 h-1 bg-white/50 rounded-full animate-twinkle delay-1500"></div>
      <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-purple-400/60 rounded-full animate-twinkle delay-2000"></div>
      <div className="absolute top-16 right-10 w-1 h-1 bg-fuchsia-300/70 rounded-full animate-twinkle delay-2500"></div>
      <div className="absolute top-80 left-1/3 w-1.5 h-1.5 bg-blue-300/60 rounded-full animate-twinkle delay-3000"></div>
      <div className="absolute bottom-60 right-20 w-1 h-1 bg-white/70 rounded-full animate-twinkle delay-3500"></div>
      
      {/* Additional scattered stars */}
      <div className="absolute top-44 left-16 w-1 h-1 bg-violet-400/50 rounded-full animate-twinkle delay-4000"></div>
      <div className="absolute bottom-44 left-1/2 w-1 h-1 bg-purple-200/60 rounded-full animate-twinkle delay-4500"></div>
      <div className="absolute top-72 right-32 w-1.5 h-1.5 bg-white/40 rounded-full animate-twinkle delay-5000"></div>
      <div className="absolute bottom-80 right-1/4 w-1 h-1 bg-fuchsia-200/50 rounded-full animate-twinkle delay-5500"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-28 right-16 w-8 h-8 bg-gradient-to-br from-purple-400/40 to-violet-600/30 rounded-full blur-sm animate-float"></div>
      <div className="absolute bottom-28 left-32 w-6 h-6 bg-gradient-to-br from-blue-400/35 to-purple-500/25 rounded-full blur-sm animate-float delay-1000"></div>
      <div className="absolute top-1/3 left-16 w-4 h-4 bg-gradient-to-br from-violet-500/45 to-fuchsia-400/35 rounded-full blur-sm animate-float delay-2000"></div>
      
      {/* Connecting lines/rays */}
      <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent rotate-45 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-violet-300/25 to-transparent -rotate-45 animate-pulse delay-2000"></div>
      
      {/* Large decorative circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-400/10 rounded-full animate-spin-very-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-violet-300/15 rounded-full animate-spin-reverse-slow"></div>
    </div>
  );
};

export default BackgroundDecorations;
