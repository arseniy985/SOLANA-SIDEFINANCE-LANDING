
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, MessageCircle, Users, Video } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 via-slate-800/50 to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get in
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Touch
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to collaborate on the future of digital economy? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800/90 via-slate-800/85 to-gray-900/90 border border-purple-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
              <CardDescription className="text-gray-300">
                Whether you're interested in our research, want to collaborate, or need consulting services.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-200 mb-2 block">First Name</label>
                  <Input placeholder="John" className="border-gray-600 focus:border-purple-400 bg-gray-700/50 text-white placeholder:text-gray-400" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-200 mb-2 block">Last Name</label>
                  <Input placeholder="Doe" className="border-gray-600 focus:border-purple-400 bg-gray-700/50 text-white placeholder:text-gray-400" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-200 mb-2 block">Email</label>
                <Input type="email" placeholder="john@example.com" className="border-gray-600 focus:border-purple-400 bg-gray-700/50 text-white placeholder:text-gray-400" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-200 mb-2 block">Subject</label>
                <Input placeholder="Research Collaboration" className="border-gray-600 focus:border-purple-400 bg-gray-700/50 text-white placeholder:text-gray-400" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-200 mb-2 block">Message</label>
                <Textarea placeholder="Tell us about your project or inquiry..." className="border-gray-600 focus:border-purple-400 bg-gray-700/50 text-white placeholder:text-gray-400 min-h-[120px]" />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white font-semibold py-3 shadow-lg">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg flex items-center justify-center shadow-md">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-200">support@sidefinance.org</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg flex items-center justify-center shadow-md">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-gray-200">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg flex items-center justify-center shadow-md">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Address</p>
                    <p className="text-gray-200">123 Innovation Drive<br />San Francisco, CA 94102</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="space-y-3">
                {/* Первый ряд */}
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="border-purple-400/50 bg-gray-800/50 text-white hover:bg-purple-500/20 hover:border-purple-400">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="border-purple-400/50 bg-gray-800/50 text-white hover:bg-purple-500/20 hover:border-purple-400">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Telegram
                  </Button>
                  <Button variant="outline" size="sm" className="border-purple-400/50 bg-gray-800/50 text-white hover:bg-purple-500/20 hover:border-purple-400">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Discord
                  </Button>
                </div>
                
                {/* Второй ряд */}
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="border-purple-400/50 bg-gray-800/50 text-white hover:bg-purple-500/20 hover:border-purple-400">
                    <Users className="w-4 h-4 mr-2" />
                    Partnership
                  </Button>
                  <Button variant="outline" size="sm" className="border-purple-400/50 bg-gray-800/50 text-white hover:bg-purple-500/20 hover:border-purple-400">
                    <Video className="w-4 h-4 mr-2" />
                    TikTok
                  </Button>
                  <Button variant="outline" size="sm" className="border-purple-400/50 bg-gray-800/50 text-white hover:bg-purple-500/20 hover:border-purple-400">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/70 via-gray-700/60 to-gray-800/70 p-6 rounded-xl border border-gray-600/40 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-white mb-2">Office Hours</h4>
              <div className="space-y-2 text-sm text-gray-200">
                <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
