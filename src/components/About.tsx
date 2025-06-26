
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Award, 
  Rocket,
  DollarSign,
  BookOpen,
  BarChart3,
  Crown,
  Sparkles,
  ArrowUpRight,
  CheckCircle,
  Star,
  Trophy,
  Building,
  Globe,
  Zap,
  LineChart,
  Medal,
  Briefcase,
  PieChart,
  FileText,
  GraduationCap,
  TrendingDown,
  Calendar,
  MapPin,
  Eye,
  Play,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const [activeAchievement, setActiveAchievement] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAchievement(prev => (prev + 1) % 4);
      setCounter(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const majorAchievements = [
    {
      title: "Venture Fund Success",
      value: "$150M+",
      description: "Successfully raised and managed venture capital fund",
      detail: "Leading blockchain investments with 300% average ROI",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-emerald-500 via-green-500 to-teal-600",
      bgGlow: "bg-emerald-500/20"
    },
    {
      title: "Students Graduated",
      value: "12,000+",
      description: "Elite blockchain professionals trained and certified",
      detail: "95% employment rate in top-tier companies",
      icon: <GraduationCap className="w-8 h-8" />,
      gradient: "from-blue-500 via-cyan-500 to-purple-600",
      bgGlow: "bg-blue-500/20"
    },
    {
      title: "Portfolio Companies",
      value: "85+",
      description: "Strategic investments in breakthrough startups",
      detail: "Average company valuation growth of 500%",
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-purple-500 via-violet-500 to-pink-600",
      bgGlow: "bg-purple-500/20"
    },
    {
      title: "Research Publications",
      value: "200+",
      description: "Groundbreaking academic papers and whitepapers",
      detail: "Published in top-tier journals with 50,000+ citations",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-orange-500 via-red-500 to-pink-600",
      bgGlow: "bg-orange-500/20"
    }
  ];

  const successMetrics = [
    { label: "Fund Performance", value: "300%", suffix: "ROI", icon: <LineChart className="w-6 h-6" /> },
    { label: "Student Success", value: "95%", suffix: "Placement", icon: <Trophy className="w-6 h-6" /> },
    { label: "Market Leaders", value: "15", suffix: "Unicorns", icon: <Crown className="w-6 h-6" /> },
    { label: "Global Reach", value: "50+", suffix: "Countries", icon: <Globe className="w-6 h-6" /> }
  ];

  const pillarsOfSuccess = [
    {
      title: "Premier Blockchain Fund",
      subtitle: "Investment Excellence",
      description: "Built the most successful blockchain-focused venture fund in Eastern Europe",
      icon: <Briefcase className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-600",
      achievements: [
        "Raised $150M in Series A funding",
        "85+ portfolio companies with avg 500% growth",
        "15 unicorn companies created",
        "300% average ROI across all investments"
      ]
    },
    {
      title: "Elite Training Institute",
      subtitle: "Education Leadership",
      description: "Created the world's most comprehensive blockchain education program",
      icon: <Medal className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-600",
      achievements: [
        "12,000+ certified blockchain professionals",
        "95% job placement rate in tier-1 companies",
        "Partnership with 200+ leading corporations",
        "Alumni working at Google, Microsoft, Binance"
      ]
    },
    {
      title: "Academic Excellence",
      subtitle: "Research Innovation",
      description: "Leading global research in blockchain technology and digital economics",
      icon: <BookOpen className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-600",
      achievements: [
        "200+ peer-reviewed research papers",
        "50,000+ academic citations",
        "5 breakthrough patents in blockchain tech",
        "Collaboration with Stanford, MIT, Harvard"
      ]
    }
  ];

  const impactNumbers = [
    { number: "12K+", label: "Graduates Employed", sublabel: "At Fortune 500 companies" },
    { number: "$2.5B+", label: "Portfolio Valuation", sublabel: "Combined company value" },
    { number: "85", label: "Active Investments", sublabel: "High-growth startups" },
    { number: "15", label: "Unicorn Companies", sublabel: "Billion-dollar valuations" },
    { number: "200+", label: "Research Papers", sublabel: "Published globally" },
    { number: "50+", label: "Global Markets", sublabel: "Countries with presence" }
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-600/30 to-green-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-gradient-to-l from-blue-600/25 to-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-tr from-purple-600/20 to-violet-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Achievement Banner */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-800/60 via-green-800/40 to-emerald-800/60 rounded-full text-emerald-300 text-sm font-semibold mb-6 border border-emerald-500/30 backdrop-blur-sm shadow-2xl">
            <Trophy className="w-4 h-4 mr-2 animate-bounce" />
            Industry Leading Achievements
            <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight px-4">
            <span className="block text-white mb-2">Transforming</span>
            <span className="block bg-gradient-to-r from-emerald-300 via-green-400 to-cyan-400 bg-clip-text text-transparent leading-relaxed">
              Digital Economics
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed px-4">
            Pioneering the future through <span className="text-emerald-400 font-semibold">exceptional achievements</span> in 
            venture capital, elite education, and groundbreaking research. 
            <span className="text-cyan-400 font-medium"> Our track record speaks for itself.</span>
          </p>

          {/* Major Achievement Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {majorAchievements.map((achievement, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 ${achievement.bgGlow} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 ${activeAchievement === index ? 'opacity-70 scale-110' : 'opacity-40'}`}></div>
                <div className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-4 sm:p-6 rounded-2xl border transition-all duration-500 ${activeAchievement === index ? 'border-emerald-500/50 scale-105' : 'border-slate-700/50'} backdrop-blur-sm`}>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${achievement.gradient} rounded-xl flex items-center justify-center mb-3 mx-auto transition-all duration-500 ${activeAchievement === index ? 'scale-110 rotate-12' : ''}`}>
                    <div className="text-white">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{achievement.value}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{achievement.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Pillars of Success */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Three Pillars of Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillarsOfSuccess.map((pillar, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-800/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/90 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm group-hover:border-emerald-500/30 transition-all duration-500 h-full">
                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${pillar.gradient} rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <div className="text-white text-sm">
                        {pillar.icon}
                      </div>
                    </div>
                    <div>
                      <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mb-1 text-xs">
                        {pillar.subtitle}
                      </Badge>
                      <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  {/* Achievements List */}
                  <div className="space-y-2">
                    {pillar.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-200 text-sm">
                        <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Dashboard */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Measurable <span className="bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real numbers that demonstrate our contribution to the global digital economy
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {impactNumbers.map((metric, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-60 group-hover:opacity-80"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-6 rounded-2xl border border-emerald-500/20 backdrop-blur-sm group-hover:border-emerald-400/40 transition-all duration-300 text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-400 mb-2">{metric.number}</div>
                    <div className="text-white font-semibold text-sm mb-1">{metric.label}</div>
                    <div className="text-gray-400 text-xs">{metric.sublabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics Bar */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-gradient-to-r from-slate-800/60 to-slate-700/40 rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  {metric.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="text-emerald-400 text-sm font-semibold">{metric.suffix}</div>
                  <div className="text-gray-400 text-xs">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/60 via-gray-800/40 to-slate-800/60 rounded-[3rem] backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-green-600/5 to-cyan-600/10 rounded-[3rem]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/20 via-green-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative p-16 text-center">
            <h3 className="text-4xl font-bold text-white mb-8 leading-tight">
              Join Our Success Story
              <span className="block bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                Be Part of Excellence
              </span>
            </h3>
            
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to be part of an institution that has transformed 12,000+ careers, 
              built $2.5B+ in portfolio value, and published 200+ groundbreaking research papers?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-cyan-600 hover:from-emerald-700 hover:via-green-700 hover:to-cyan-700 text-white font-bold px-12 py-6 shadow-2xl border-0 group transition-all duration-300 hover:scale-105 rounded-2xl text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Rocket className="w-6 h-6 mr-4 group-hover:translate-x-1 transition-transform" />
                Join Our Programs
                <ArrowUpRight className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-emerald-400/50 bg-white/5 text-white hover:bg-emerald-500/20 hover:border-emerald-300 font-bold px-12 py-6 backdrop-blur-sm group transition-all duration-300 hover:scale-105 rounded-2xl text-lg shadow-2xl"
              >
                <Eye className="w-6 h-6 mr-4 group-hover:rotate-12 transition-transform" />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
