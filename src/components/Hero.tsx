
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Star, Target, CheckCircle, TrendingUp, Award, BarChart3 } from 'lucide-react';

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.2] tracking-tight">
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-extrabold pb-2">
                Solana Institute of
              </span>
              <span className="block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-extrabold pb-4">
                Digital Economics
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-32"></div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-[0.5em] px-4">
                SIDE
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-32"></div>
            </div>
          </div>
          
          {/* Value Proposition */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8">
            Transform <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">$1,000</span> Into <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">$100,000+</span>
          </h2>
          
          <p className="max-w-4xl mx-auto mb-12 text-xl text-slate-200 leading-relaxed">
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

          {/* $SIDE Token Highlight */}
          <div className="mb-16 mx-auto max-w-4xl">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/40 to-orange-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative p-8 bg-gradient-to-br from-yellow-900/60 via-orange-900/50 to-yellow-900/60 rounded-3xl border-2 border-yellow-400/50 backdrop-blur-sm shadow-2xl">
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <img 
                      src="/lovable-uploads/38c7bb81-42e5-4be7-9177-8f17c128376a.png" 
                      alt="SIDE Token" 
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white">$SIDE Token Launch</h3>
                </div>
                <p className="text-yellow-200 font-bold text-xl mb-6">
                  Dividend distributions start at $10M market cap
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-black/20 rounded-2xl">
                    <div className="text-yellow-400 font-bold text-2xl">Early Access</div>
                    <div className="text-yellow-200 text-base">Limited positions</div>
                  </div>
                  <div className="text-center p-4 bg-black/20 rounded-2xl">
                    <div className="text-yellow-400 font-bold text-2xl">Guaranteed</div>
                    <div className="text-yellow-200 text-base">Profit sharing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white px-20 py-8 rounded-3xl shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 text-xl font-bold border-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Target className="w-7 h-7 mr-4 group-hover:rotate-12 transition-transform" />
              Buy $SIDE Token
              <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-cyan-400/70 text-cyan-300 px-16 py-8 rounded-3xl backdrop-blur-sm hover:border-cyan-300 transition-all duration-300 bg-white/5 hover:bg-white/10 hover:scale-105 text-xl font-semibold"
            >
              <BarChart3 className="w-7 h-7 mr-4" />
              View Performance
            </Button>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/15 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative text-center p-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl shadow-2xl border border-cyan-400/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Proven Results</h3>
              <p className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold text-lg mb-2">300% Average ROI</p>
              <p className="text-gray-300 text-base">Consistent profits since 2018</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/15 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative text-center p-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl shadow-2xl border border-blue-400/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Elite Education</h3>
              <p className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold text-lg mb-2">12K+ Graduates</p>
              <p className="text-gray-300 text-base">95% placement rate</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-400/15 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative text-center p-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl shadow-2xl border border-purple-400/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Market Leaders</h3>
              <p className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold text-lg mb-2">15 Unicorns</p>
              <p className="text-gray-300 text-base">$1B+ companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
