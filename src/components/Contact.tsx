
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Twitter, Github, MessageCircle, Users, Clock, Globe, Shield } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 via-slate-800/50 to-gray-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-cyan-600/20 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-full text-purple-200 text-sm font-medium mb-8 border border-purple-500/50 backdrop-blur-sm">
            <Mail className="w-4 h-4 mr-2" />
            24/7 Global Support
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Touch
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on the future of digital economy? Connect with our global team.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60"></div>
            <div className="relative bg-gradient-to-br from-gray-800/95 via-gray-700/90 to-gray-800/95 p-8 rounded-3xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group-hover:scale-105 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-300 mb-3">Email Support</h3>
              <p className="text-gray-200 text-lg font-medium mb-2">support@sidefinance.org</p>
              <p className="text-gray-400 text-sm">Response within 24 hours</p>
            </div>
          </div>

                     {/* Team Contact */}
           <div className="group relative">
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60"></div>
             <div className="relative bg-gradient-to-br from-gray-800/95 via-gray-700/90 to-gray-800/95 p-8 rounded-3xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group-hover:scale-105 backdrop-blur-sm text-center">
               <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                 <Users className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-xl font-bold text-emerald-300 mb-3">Team Contact</h3>
               <p className="text-gray-200 text-lg font-medium mb-2">team@sidefinance.org</p>
               <p className="text-gray-400 text-sm">Strategic collaborations</p>
             </div>
           </div>

          {/* Global Presence */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60"></div>
            <div className="relative bg-gradient-to-br from-gray-800/95 via-gray-700/90 to-gray-800/95 p-8 rounded-3xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-cyan-300 mb-3">Global Office</h3>
              <p className="text-gray-200 text-lg font-medium mb-2">Worldwide Remote</p>
              <p className="text-gray-400 text-sm">Operating in 25+ countries</p>
            </div>
          </div>
        </div>

                 {/* Social Media & Links */}
         <div className="max-w-4xl mx-auto mb-16">
           <h3 className="text-2xl font-bold text-white mb-8 text-center">Connect With Us</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
             <Button variant="outline" className="border-blue-400/50 bg-gray-800/50 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-105 h-12" asChild>
               <a href="https://x.com/side_finance" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                 <Twitter className="w-5 h-5 mr-2" />
                 Twitter
               </a>
             </Button>
             
             <Button variant="outline" className="border-cyan-400/50 bg-gray-800/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:scale-105 h-12" asChild>
               <a href="https://t.me/sidefinance" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                 <MessageCircle className="w-5 h-5 mr-2" />
                 Telegram
               </a>
             </Button>
             
             <Button variant="outline" className="border-gray-400/50 bg-gray-800/50 text-gray-300 hover:bg-gray-500/20 hover:border-gray-400 transition-all duration-300 hover:scale-105 h-12" asChild>
               <a href="https://github.com/arseniy985/SOLANA-SIDEFINANCE-LANDING" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                 <Github className="w-5 h-5 mr-2" />
                 GitHub
               </a>
             </Button>
             
             <Button variant="outline" className="border-emerald-400/50 bg-gray-800/50 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all duration-300 hover:scale-105 h-12" asChild>
               <a href="mailto:team@sidefinance.org" className="flex items-center justify-center">
                 <Users className="w-5 h-5 mr-2" />
                 Team
               </a>
             </Button>
           </div>
         </div>

        {/* Support Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-800/70 via-gray-700/60 to-gray-800/70 p-8 rounded-3xl border border-gray-600/40 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-700 rounded-xl flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-violet-300">Support Hours</h4>
            </div>
            <div className="space-y-3 text-gray-200">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-medium">24/7 Support</span>
              </div>
              <div className="flex justify-between">
                <span>Weekends:</span>
                <span className="font-medium">Community Support</span>
              </div>
              <div className="flex justify-between">
                <span>Response Time:</span>
                <span className="font-medium text-emerald-400">≤ 2 hours</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/70 via-gray-700/60 to-gray-800/70 p-8 rounded-3xl border border-gray-600/40 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-emerald-300">Security & Privacy</h4>
            </div>
            <div className="space-y-3 text-gray-200">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span>End-to-end encryption</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span>GDPR compliant</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span>SOC 2 Type II certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
