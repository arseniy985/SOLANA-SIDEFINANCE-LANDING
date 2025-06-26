
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-gradient-to-l from-blue-500/20 to-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-900/90 to-slate-800/90 rounded-full text-cyan-300 text-sm font-semibold mb-12 border border-cyan-400/50 backdrop-blur-sm shadow-2xl">
            <Shield className="w-5 h-5 mr-3 text-cyan-400" />
            Leading Solana Investment Platform Since 2018
            <Star className="w-5 h-5 ml-3 text-yellow-400" />
          </div>
          
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/38c7bb81-42e5-4be7-9177-8f17c128376a.png" 
              alt="SIDE Logo" 
              className="h-20 w-auto"
            />
          </div>
          
          {/* Main SIDE Acronym Expansion */}
          <div className="mb-12 py-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.2] tracking-tight font-space-grotesk">
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-bold pb-2">
                Solana Institute of
              </span>
              <span className="block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-bold pb-4">
                Digital Economics
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-32"></div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-[0.5em] px-4 font-dune-rise">
                SIDE
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-32"></div>
            </div>
          </div>
          
          {/* Value Proposition */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 font-space-grotesk">
            Transform <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">$1,000</span> Into <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">$100,000+</span>
          </h2>
          
          <p className="max-w-4xl mx-auto mb-12 text-xl text-slate-200 leading-relaxed font-space-grotesk">
            The world's most successful Solana-focused investment institute. 
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold"> 300% average ROI</span> backed by real results and proven track record.
          </p>
          
          {/* Key Numbers */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 px-8 py-6 rounded-3xl border border-cyan-400/30 backdrop-blur-sm shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">$150M+</div>
              <div className="text-slate-300 text-sm font-medium">Fund Raised</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 px-8 py-6 rounded-3xl border border-purple-400/30 backdrop-blur-sm shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">12K+</div>
              <div className="text-slate-300 text-sm font-medium">Students</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 px-8 py-6 rounded-3xl border border-blue-400/30 backdrop-blur-sm shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">300%</div>
              <div className="text-slate-300 text-sm font-medium">Avg ROI</div>
            </div>
          </div>


        </div>

      </div>
    </section>
  );
};

export default Hero;
