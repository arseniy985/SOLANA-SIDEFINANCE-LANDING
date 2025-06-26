
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    "Research": [
      "Latest Reports",
      "Case Studies",
      "White Papers",
      "Research Team"
    ],
    "Education": [
      "Online Courses",
      "Workshops",
      "Certification",
      "Events"
    ],
    "Venture Fund": [
      "Portfolio",
      "Investment Criteria",
      "Apply for Funding",
      "Success Stories"
    ],
    "About": [
      "Our Mission",
      "Team",
      "Careers",
      "Press"
    ]
  };

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
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
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer border border-gray-700">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer border border-gray-700">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer border border-gray-700">
                <Github className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer border border-gray-700">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2024 SIDE Finance Digital Economy Institute. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
