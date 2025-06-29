import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Twitter, Github, MessageCircle, Users, Clock, Globe, Shield, Sparkles, Star } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 via-slate-800/50 to-gray-900/50 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-cyan-600/30 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-32 w-4 h-4 bg-purple-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-70" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 right-20 w-2 h-2 bg-emerald-400 rounded-full animate-float opacity-80" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-full text-purple-200 text-sm font-medium mb-8 border border-purple-500/50 backdrop-blur-sm shadow-2xl">
            <Mail className="w-4 h-4 mr-2" />
            24/7 Global Support
            <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 relative">
            Get in
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Touch
            </span>
            {/* Decorative stars */}
            <Star className="absolute -top-4 -right-8 w-6 h-6 text-yellow-400 animate-pulse opacity-70" />
            <Star className="absolute -bottom-2 -left-6 w-4 h-4 text-purple-400 animate-pulse opacity-60" style={{animationDelay: '1s'}} />
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on the future of digital economy? Connect with our global team and experience world-class support.
          </p>
        </div>

        {/* Enhanced Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-violet-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60 group-hover:opacity-80"></div>
            <div className="relative bg-gradient-to-br from-gray-800/95 via-gray-700/90 to-gray-800/95 p-8 rounded-3xl border border-purple-500/40 hover:border-purple-400/60 transition-all duration-500 group-hover:scale-105 backdrop-blur-sm text-center group-hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-300 mb-3">Email Support</h3>
              <p className="text-gray-200 text-lg font-medium mb-2">support@sidefinance.org</p>
              <p className="text-gray-400 text-sm">Response within 24 hours</p>
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-purple-400/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Sparkles className="w-4 h-4 text-purple-300" />
              </div>
            </div>
          </div>

          {/* Team Contact */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 to-teal-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60 group-hover:opacity-80"></div>
            <div className="relative bg-gradient-to-br from-gray-800/95 via-gray-700/90 to-gray-800/95 p-8 rounded-3xl border border-emerald-500/40 hover:border-emerald-400/60 transition-all duration-500 group-hover:scale-105 backdrop-blur-sm text-center group-hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-emerald-300 mb-3">Team Contact</h3>
              <p className="text-gray-200 text-lg font-medium mb-2">team@sidefinance.org</p>
              <p className="text-gray-400 text-sm">Strategic collaborations</p>
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-400/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Star className="w-4 h-4 text-emerald-300" />
              </div>
            </div>
          </div>

          {/* Global Presence */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60 group-hover:opacity-80"></div>
            <div className="relative bg-gradient-to-br from-gray-800/95 via-gray-700/90 to-gray-800/95 p-8 rounded-3xl border border-cyan-500/40 hover:border-cyan-400/60 transition-all duration-500 group-hover:scale-105 backdrop-blur-sm text-center group-hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-6">
                <Globe className="w-8 h-8 text-white animate-spin" style={{animationDuration: '8s'}} />
              </div>
              <h3 className="text-xl font-bold text-cyan-300 mb-3">Global Office</h3>
              <p className="text-gray-200 text-lg font-medium mb-2">Worldwide Remote</p>
              <p className="text-gray-400 text-sm">Operating in 25+ countries</p>
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Globe className="w-4 h-4 text-cyan-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Social Media & Links */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Connect With Our Community</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Button variant="outline" className="border-blue-400/50 bg-gray-800/50 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-105 h-14 shadow-lg hover:shadow-xl" asChild>
              <a href="https://x.com/side_finance" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Twitter className="w-5 h-5 mr-2" />
                Twitter
              </a>
            </Button>
            
            <Button variant="outline" className="border-cyan-400/50 bg-gray-800/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:scale-105 h-14 shadow-lg hover:shadow-xl" asChild>
              <a href="https://t.me/sidefinance" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Telegram
              </a>
            </Button>
            
            <Button variant="outline" className="border-gray-400/50 bg-gray-800/50 text-gray-300 hover:bg-gray-500/20 hover:border-gray-400 transition-all duration-300 hover:scale-105 h-14 shadow-lg hover:shadow-xl" asChild>
              <a href="https://github.com/arseniy985/SOLANA-SIDEFINANCE-LANDING" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            
            <Button variant="outline" className="border-emerald-400/50 bg-gray-800/50 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all duration-300 hover:scale-105 h-14 shadow-lg hover:shadow-xl" asChild>
              <a href="mailto:team@sidefinance.org" className="flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Team
              </a>
            </Button>
          </div>
        </div>

        {/* Enhanced Support Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50"></div>
            <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-700/70 to-gray-800/80 p-8 rounded-3xl border border-gray-600/50 backdrop-blur-sm group-hover:border-violet-500/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-violet-300">Support Hours</h4>
              </div>
              <div className="space-y-3 text-gray-200">
                <div className="flex justify-between items-center p-2 rounded-lg bg-white/5">
                  <span>Monday - Friday:</span>
                  <span className="font-medium text-emerald-400">24/7 Support</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg bg-white/5">
                  <span>Weekends:</span>
                  <span className="font-medium text-yellow-400">Community Support</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg bg-white/5">
                  <span>Response Time:</span>
                  <span className="font-medium text-emerald-400">≤ 2 hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50"></div>
            <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-700/70 to-gray-800/80 p-8 rounded-3xl border border-gray-600/50 backdrop-blur-sm group-hover:border-emerald-500/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-emerald-300">Security & Privacy</h4>
              </div>
              <div className="space-y-3 text-gray-200">
                <div className="flex items-center p-2 rounded-lg bg-white/5">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center p-2 rounded-lg bg-white/5">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span>GDPR compliant</span>
                </div>
                <div className="flex items-center p-2 rounded-lg bg-white/5">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span>SOC 2 Type II certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
