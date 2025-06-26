
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Calendar, Award, TrendingUp, Shield, Target, Zap, DollarSign, Star, Clock, PlayCircle, Flame, Gift, Crown, Rocket, MapPin, ExternalLink, Download, CheckCircle, Globe, Briefcase } from 'lucide-react';

const Education = () => {
  const [activeCategory, setActiveCategory] = useState('free');

  const freeCourses = [{
    title: "Blockchain Fundamentals",
    description: "Complete introduction to blockchain technology, cryptocurrencies, and decentralized systems.",
    duration: "6 weeks",
    students: 2500,
    rating: 4.9,
    price: "FREE",
    features: ["Certificate included", "24/7 Support", "Lifetime access"],
    icon: <BookOpen className="w-6 h-6" />,
    gradient: "from-red-500 to-orange-600",
    badge: {
      text: "Most Popular",
      color: "from-emerald-500 to-teal-600",
      icon: <Star className="w-3 h-3 mr-1" />
    }
  }, {
    title: "Cryptocurrency Safety Guide",
    description: "Essential security practices for protecting your crypto assets and avoiding scams.",
    duration: "2 weeks",
    students: 1800,
    rating: 4.8,
    price: "FREE",
    features: ["Security checklist", "Wallet setup guide", "Scam detection"],
    icon: <Shield className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-600",
    badge: {
      text: "Essential",
      color: "from-orange-500 to-red-600",
      icon: <Shield className="w-3 h-3 mr-1" />
    }
  }, {
    title: "Solana Token Creation Basics",
    description: "Learn the fundamentals of creating tokens on Solana blockchain for beginners.",
    duration: "4 weeks",
    students: 950,
    rating: 4.7,
    price: "FREE",
    features: ["Hands-on projects", "Code examples", "Community support"],
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-purple-500 to-violet-600",
    badge: {
      text: "Trending",
      color: "from-pink-500 to-rose-600",
      icon: <Flame className="w-3 h-3 mr-1" />
    }
  }];

  const paidCourses = [{
    title: "Advanced Token Economics & Growth",
    description: "Master advanced strategies for creating viral tokens with sustainable growth mechanisms and community building.",
    duration: "12 weeks",
    students: 450,
    rating: 5.0,
    price: "$1,299",
    originalPrice: "$1,999",
    features: ["1-on-1 mentoring", "Launch support", "Marketing strategies", "Growth hacking"],
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-600",
    badge: {
      text: "Bestseller",
      color: "from-orange-500 to-red-600",
      icon: <TrendingUp className="w-3 h-3 mr-1" />
    }
  }, {
    title: "Futures Trading Mastery",
    description: "Professional futures trading course with advanced strategies, risk management, and market psychology.",
    duration: "10 weeks",
    students: 680,
    rating: 4.9,
    price: "$899",
    originalPrice: "$1,299",
    features: ["Live trading sessions", "Risk calculator tools", "Weekly analysis", "Telegram signals"],
    icon: <Target className="w-6 h-6" />,
    gradient: "from-yellow-500 to-orange-600",
    badge: {
      text: "Best Value",
      color: "from-green-500 to-emerald-600",
      icon: <Gift className="w-3 h-3 mr-1" />
    }
  }, {
    title: "Crypto Sniping & MEV Strategies",
    description: "Professional course on identifying and capturing profitable opportunities in the crypto market.",
    duration: "8 weeks",
    students: 280,
    rating: 4.8,
    price: "$1,599",
    originalPrice: "$2,299",
    features: ["Private tools access", "Bot strategies", "Alpha calls", "VIP community"],
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-600",
    badge: {
      text: "Exclusive",
      color: "from-pink-500 to-rose-600",
      icon: <Award className="w-3 h-3 mr-1" />
    }
  }, {
    title: "Enterprise DeFi Development",
    description: "Build enterprise-grade DeFi protocols with advanced smart contract architecture and security.",
    duration: "16 weeks",
    students: 125,
    rating: 5.0,
    price: "$2,499",
    originalPrice: "$3,499",
    features: ["Enterprise projects", "Security audits", "Job placement", "Lifetime updates"],
    icon: <Award className="w-6 h-6" />,
    gradient: "from-indigo-500 to-purple-600",
    badge: {
      text: "Enterprise",
      color: "from-indigo-500 to-purple-600",
      icon: <Crown className="w-3 h-3 mr-1" />
    }
  }];

  const upcomingEvents = [{
    title: "Solana Digital Economy Summit 2024",
    date: "June 15-17, 2024",
    location: "San Francisco, CA",
    type: "Conference",
    description: "Join industry leaders discussing the future of Solana ecosystem and digital economics innovations.",
    attendees: 2500,
    price: "$299",
    status: "Early Bird",
    features: ["3-day access", "Networking events", "Speaker sessions", "Workshop access"]
  }, {
    title: "Blockchain Regulation Workshop",
    date: "May 20, 2024",
    location: "Online",
    type: "Workshop",
    description: "Navigate the evolving regulatory landscape of blockchain technology and compliance requirements.",
    attendees: 150,
    price: "FREE",
    status: "Limited Spots",
    features: ["Expert speakers", "Q&A sessions", "Certificate", "Recording access"]
  }, {
    title: "DeFi Innovation Hackathon",
    date: "July 1-3, 2024",
    location: "New York, NY",
    type: "Hackathon",
    description: "Build the next generation of DeFi protocols with mentorship from industry experts.",
    attendees: 500,
    price: "$99",
    status: "Hot",
    features: ["48-hour coding", "Mentorship", "Prize pool", "Demo day"]
  }];

  const CourseCard = ({ course, isFree }) => (
    <div className="group relative h-full">
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${course.gradient} rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
      
      <Card className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 border-gray-700/50 hover:border-gray-600/80 transition-all duration-500 group-hover:scale-[1.02] backdrop-blur-sm h-full overflow-hidden flex flex-col">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-800/20 to-transparent"></div>
        
        {/* Badge at the top */}
        <div className="absolute top-4 right-4 z-10">
          <Badge className={`bg-gradient-to-r ${course.badge.color} text-white border-0 shadow-lg text-xs px-2 py-1`}>
            {course.badge.icon}
            {course.badge.text}
          </Badge>
        </div>

        <CardHeader className="relative pb-4 flex-none">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-14 h-14 bg-gradient-to-r ${course.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
              {course.icon}
            </div>
          </div>
          
          <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
            {course.title}
          </CardTitle>
          <CardDescription className="text-gray-300 leading-relaxed">
            {course.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative space-y-6 flex-grow flex flex-col">
          {/* Course stats */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-400">
              <Clock className="w-4 h-4 mr-1" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Users className="w-4 h-4 mr-1" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 mr-1 fill-current" />
              <span className="font-medium">{course.rating}</span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2 flex-grow">
            {course.features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-300">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full mr-3"></div>
                {feature}
              </div>
            ))}
          </div>

          {/* Price and action */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-700/50 flex-none">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className={`text-2xl font-bold ${isFree ? 'text-emerald-400' : 'text-purple-400'}`}>
                  {course.price}
                </span>
                {course.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                )}
              </div>
              {course.originalPrice && (
                <span className="text-xs text-green-400">
                  Save {Math.round((1 - parseInt(course.price.replace(/[$,]/g, '')) / parseInt(course.originalPrice.replace(/[$,]/g, ''))) * 100)}%
                </span>
              )}
            </div>
            
            <Button className={`${isFree ? 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800' : 'bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800'} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
              {isFree ? (
                <>
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Start Free
                </>
              ) : (
                <>
                  <DollarSign className="w-4 h-4 mr-2" />
                  Enroll Now
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const EventCard = ({ event, index }) => {
    const getStatusColor = (status) => {
      switch (status) {
        case 'Early Bird': return 'from-green-500 to-emerald-600';
        case 'Limited Spots': return 'from-orange-500 to-red-600';
        case 'Hot': return 'from-pink-500 to-rose-600';
        default: return 'from-purple-500 to-violet-600';
      }
    };

    const getTypeIcon = (type) => {
      switch (type) {
        case 'Conference': return <Users className="w-5 h-5" />;
        case 'Workshop': return <BookOpen className="w-5 h-5" />;
        case 'Hackathon': return <Zap className="w-5 h-5" />;
        default: return <Calendar className="w-5 h-5" />;
      }
    };

    return (
      <div className="group relative h-full">
        {/* Animated background glow */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${getStatusColor(event.status)} rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
        
        <Card className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 border-gray-700/50 hover:border-gray-600/80 transition-all duration-500 group-hover:scale-[1.02] backdrop-blur-sm h-full overflow-hidden flex flex-col">
          {/* Badge at the top */}
          <div className="absolute top-4 right-4 z-10">
            <Badge className={`bg-gradient-to-r ${getStatusColor(event.status)} text-white border-0 text-xs px-2 py-1`}>
              {event.status}
            </Badge>
          </div>

          {/* Header section */}
          <div className="p-6 pb-4 flex-none">
            <div className="flex items-center mb-4">
              <div className={`flex items-center px-3 py-1.5 bg-gradient-to-r ${getStatusColor(event.status)} rounded-full text-white text-sm font-medium`}>
                {getTypeIcon(event.type)}
                <span className="ml-2">{event.type}</span>
              </div>
            </div>
            
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              {event.title}
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {event.description}
            </p>
          </div>

          {/* Event details */}
          <div className="px-6 pb-4 space-y-3 flex-grow">
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar className="w-4 h-4 mr-3 text-purple-400" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <MapPin className="w-4 h-4 mr-3 text-purple-400" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <Users className="w-4 h-4 mr-3 text-purple-400" />
              <span>{event.attendees} attendees expected</span>
            </div>

            {/* Features */}
            <div className="space-y-2 mt-4">
              {event.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full mr-3"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom section with price and action */}
          <div className="px-6 pb-6 flex-none">
            <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
              <div className="flex flex-col">
                <span className={`text-xl font-bold ${event.price === 'FREE' ? 'text-emerald-400' : 'text-purple-400'}`}>
                  {event.price}
                </span>
                {event.price === 'FREE' && (
                  <span className="text-xs text-emerald-400">Registration required</span>
                )}
              </div>
              
              <Button className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ExternalLink className="w-4 h-4 mr-2" />
                Register Now
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Enhanced background with more depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/98 via-slate-900/95 to-purple-950/98"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/15 via-transparent to-purple-900/15"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-56 h-56 bg-violet-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-32 h-32 bg-fuchsia-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-full text-purple-200 text-sm font-medium mb-8 border border-purple-500/50 backdrop-blur-sm">
            <BookOpen className="w-5 h-5 mr-2" />
            World-Class Education Platform
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Master
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Blockchain
            </span>
            <br />Economics
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            From beginner fundamentals to advanced professional strategies. 
            Join thousands of students building the future of digital finance.
          </p>
        </div>

        {/* Enhanced course categories */}
        <div className="mb-16">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800/50 p-2 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveCategory('free')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === 'free'
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Free Courses
                    <Badge className="ml-2 bg-emerald-600/20 text-emerald-400 border-emerald-500/30">
                      {freeCourses.length}
                    </Badge>
                  </div>
                </button>
                <button
                  onClick={() => setActiveCategory('paid')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === 'paid'
                      ? 'bg-gradient-to-r from-purple-600 to-violet-700 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Professional Courses
                    <Badge className="ml-2 bg-purple-600/20 text-purple-400 border-purple-500/30">
                      {paidCourses.length}
                    </Badge>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Course grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeCategory === 'free' ? freeCourses : paidCourses).map((course, index) => (
              <CourseCard key={index} course={course} isFree={activeCategory === 'free'} />
            ))}
          </div>
        </div>

        {/* Redesigned Upcoming Events */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Upcoming Events</h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join our exclusive events and connect with industry leaders, learn from experts, and build the future together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* Fixed SIDE Certification Program - ensuring "Program" text is fully visible */}
        <div className="mt-20 relative">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/80 to-indigo-900 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                    <Award className="w-4 h-4 mr-2" />
                    Professional Certification
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    SIDE Certification
                  </h3>
                  <h3 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                    <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">
                      Program
                    </span>
                  </h3>
                  
                  <p className="text-xl text-gray-200 leading-relaxed mb-8">
                    Earn industry-recognized credentials in blockchain economics and digital business innovation. 
                    Designed in partnership with leading academic institutions and industry experts.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">5K+</div>
                    <div className="text-sm text-gray-300">Certified Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">98%</div>
                    <div className="text-sm text-gray-300">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">50+</div>
                    <div className="text-sm text-gray-300">Partner Companies</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {[
                    { icon: <CheckCircle className="w-5 h-5" />, text: "Industry-recognized certification" },
                    { icon: <Globe className="w-5 h-5" />, text: "Global network of professionals" },
                    { icon: <Briefcase className="w-5 h-5" />, text: "Career advancement opportunities" },
                    { icon: <Award className="w-5 h-5" />, text: "Expert-led curriculum" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-200">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4 text-purple-300">
                        {feature.icon}
                      </div>
                      <span className="text-lg">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white px-8 py-4">
                    <Award className="w-5 h-5 mr-2" />
                    View Certification Tracks
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4">
                    <Download className="w-5 h-5 mr-2" />
                    Download Curriculum
                  </Button>
                </div>
              </div>

              {/* Right side - Visual */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                  {/* Certificate mockup */}
                  <div className="bg-white rounded-lg p-6 shadow-2xl">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center mx-auto">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">SIDE Institute</h4>
                        <p className="text-gray-600 text-sm">Certificate of Completion</p>
                      </div>
                      <div className="py-4 border-t border-b border-gray-200">
                        <p className="text-lg font-semibold text-gray-900">Blockchain Economics</p>
                        <p className="text-sm text-gray-600">Professional Certification</p>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Certificate ID: #SE2024</span>
                        <span>Issued: 2024</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-float">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
