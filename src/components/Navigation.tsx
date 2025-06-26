
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [{
    name: 'About',
    href: '#about'
  }, {
    name: 'Research',
    href: '#research'
  }, {
    name: 'Education',
    href: '#education'
  }, {
    name: 'Token $SIDE',
    href: '#token'
  }, {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/38c7bb81-42e5-4be7-9177-8f17c128376a.png" 
              alt="SIDE Logo" 
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-white">SIDE Finance</h1>
              <p className="text-xs text-gray-300">Digital Economy Institute</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(item => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:bg-gray-800/30"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map(item => (
              <a 
                key={item.name} 
                href={item.href} 
                className="block px-4 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-200" 
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
