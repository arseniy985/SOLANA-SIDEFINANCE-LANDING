
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Twitter, Github, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Research", href: "#research" },
    { name: "Education", href: "#education" },
    { name: "$SIDE Token", href: "#token" },
    { name: "Venture Fund", href: "#venture" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/38c7bb81-42e5-4be7-9177-8f17c128376a.png" 
                alt="SIDE Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold">SIDE Finance</h1>
                <p className="text-sm text-gray-400">Digital Economy Institute</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Pioneering the future of digital economy through blockchain research, 
              education, and strategic investments on Solana.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/side_finance" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer border border-gray-700"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/arseniy985/SOLANA-SIDEFINANCE-LANDING" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer border border-gray-700"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:support@sidefinance.org" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer border border-gray-700"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li>
                <p className="text-gray-400 text-sm">Email Support</p>
                <a href="mailto:support@sidefinance.org" className="text-purple-400 hover:text-purple-300 transition-colors text-sm">
                  support@sidefinance.org
                </a>
              </li>
                             <li>
                 <p className="text-gray-400 text-sm">Team Contact</p>
                 <a href="mailto:team@sidefinance.org" className="text-purple-400 hover:text-purple-300 transition-colors text-sm">
                   team@sidefinance.org
                 </a>
               </li>
              <li>
                <p className="text-gray-400 text-sm">Global Presence</p>
                <p className="text-gray-300 text-sm">Operating worldwide</p>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2024 SIDE Finance Digital Economy Institute. All rights reserved.
          </div>
          <div className="text-sm text-gray-400">
            Built on Solana • Powered by Innovation
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
