
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, ExternalLink, TrendingUp, Award, Target, Lock, Users, Shield, Star, Rocket, Brain, Zap, Globe, Eye, EyeOff, Crown, Gem, ChevronRight, BarChart3 } from 'lucide-react';

const Research = () => {
  const [activeTab, setActiveTab] = useState('public');

  const publicResearch = [
    {
      title: "The Future of Decentralized Finance",
      description: "Comprehensive analysis of emerging DeFi protocols and their potential to revolutionize traditional financial systems worldwide.",
      category: "Market Analysis",
      impact: "Global Finance",
      downloads: "15.2K",
      views: "89.5K",
      date: "March 2024",
      readTime: "12 min",
      badge: { text: "Trending", color: "from-green-500 to-emerald-600", icon: <TrendingUp className="w-3 h-3" /> }
    },
    {
      title: "Solana Ecosystem Growth Report 2024",
      description: "In-depth study measuring the exponential growth and economic impact of Solana's blockchain infrastructure on global digital commerce.",
      category: "Blockchain Research",
      impact: "Technology",
      downloads: "23.7K",
      views: "125K",
      date: "February 2024",
      readTime: "18 min",
      badge: { text: "Most Popular", color: "from-blue-500 to-cyan-600", icon: <Star className="w-3 h-3" /> }
    },
    {
      title: "Regulatory Frameworks for Digital Assets",
      description: "Policy recommendations and regulatory analysis for blockchain technology that balances innovation with consumer protection.",
      category: "Policy Research",
      impact: "Regulation",
      downloads: "8.9K",
      views: "42.3K",
      date: "January 2024",
      readTime: "15 min",
      badge: { text: "Essential", color: "from-purple-500 to-violet-600", icon: <Award className="w-3 h-3" /> }
    },
    {
      title: "Cross-Border Payment Revolution",
      description: "How blockchain technology is transforming international remittances and creating new opportunities for financial inclusion.",
      category: "Financial Innovation",
      impact: "Global Commerce",
      downloads: "11.4K",
      views: "67.8K",
      date: "December 2023",
      readTime: "14 min",
      badge: { text: "Breakthrough", color: "from-orange-500 to-red-600", icon: <Rocket className="w-3 h-3" /> }
    }
  ];

  const privateResearch = [
    {
      title: "Alpha Trading Strategies & Market Manipulation Detection",
      description: "Advanced algorithms for identifying market inefficiencies and detecting sophisticated manipulation tactics in cryptocurrency markets.",
      category: "Exclusive Analytics",
      impact: "Alpha Generation",
      subscribers: "2.1K",
      value: "$50K+",
      date: "March 2024",
      readTime: "25 min",
      badge: { text: "Alpha", color: "from-yellow-500 to-orange-600", icon: <Crown className="w-3 h-3" /> }
    },
    {
      title: "MEV Extraction Strategies & Arbitrage Opportunities",
      description: "Proprietary research on Maximum Extractable Value opportunities and advanced arbitrage strategies across multiple blockchains.",
      category: "Trading Intelligence",
      impact: "Profit Optimization",
      subscribers: "1.8K",
      value: "$75K+",
      date: "February 2024",
      readTime: "30 min",
      badge: { text: "Exclusive", color: "from-pink-500 to-rose-600", icon: <Gem className="w-3 h-3" /> }
    },
    {
      title: "Institutional Investment Flow Analysis",
      description: "Real-time tracking and analysis of institutional capital movements in crypto markets with predictive modeling.",
      category: "Market Intelligence",
      impact: "Investment Strategy",
      subscribers: "3.2K",
      value: "$100K+",
      date: "January 2024",
      readTime: "20 min",
      badge: { text: "Premium", color: "from-indigo-500 to-purple-600", icon: <BarChart3 className="w-3 h-3" /> }
    }
  ];

  const successMetrics = [
    {
      title: "Supply Chain Transformation",
      company: "Global Agricultural Network",
      result: "60% fraud reduction, 90% faster settlements",
      value: "$2.5M saved annually",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Cross-Border Payment Innovation",
      company: "International Banking Consortium",
      result: "95% cost reduction, instant settlements",
      value: "$15M operational savings",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Digital Identity Infrastructure",
      company: "Healthcare Alliance",
      result: "100% data integrity, full compliance",
      value: "$8M compliance cost reduction",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600"
    }
  ];

  const PublicResearchCard = ({ research, index }) => (
    <div className="group relative h-full">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-violet-600/10 to-fuchsia-600/20 rounded-3xl blur-lg group-hover:blur-xl group-hover:opacity-30 transition-all duration-500"></div>
      
      <Card className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.02] backdrop-blur-sm h-full overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-800/10 to-transparent"></div>
        
        {/* Header */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-3xl"></div>
        
        <CardHeader className="relative pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-700 rounded-xl flex items-center justify-center shadow-lg">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <Badge className={`bg-gradient-to-r ${research.badge.color} text-white border-0 text-xs px-2 py-1`}>
                {research.badge.icon}
                <span className="ml-1">{research.badge.text}</span>
              </Badge>
            </div>
          </div>
          
          <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors leading-tight">
            {research.title}
          </CardTitle>
          <CardDescription className="text-gray-300 leading-relaxed">
            {research.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Research details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Globe className="w-4 h-4 mr-2 text-purple-400" />
                <span>{research.category}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Brain className="w-4 h-4 mr-2 text-purple-400" />
                <span>{research.impact}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Download className="w-4 h-4 mr-2 text-purple-400" />
                <span>{research.downloads} downloads</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Eye className="w-4 h-4 mr-2 text-purple-400" />
                <span>{research.views} views</span>
              </div>
            </div>
          </div>

          {/* Meta info */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>{research.date}</span>
              <span>•</span>
              <span>{research.readTime} read</span>
            </div>
            
            <div className="flex space-x-2">
              <Button size="sm" className="bg-purple-600/80 hover:bg-purple-600 text-white border-0 shadow-md group-hover:shadow-lg transition-all duration-300">
                <Download className="w-4 h-4 mr-1" />
                Download
              </Button>
              <Button size="sm" variant="outline" className="border-purple-400/50 text-purple-200 hover:bg-purple-600/30 hover:border-purple-300">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const PrivateResearchCard = ({ research, index }) => (
    <div className="group relative h-full">
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/20 via-orange-600/10 to-red-600/20 rounded-3xl blur-lg group-hover:blur-xl group-hover:opacity-30 transition-all duration-500"></div>
      
      <Card className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 border-yellow-600/50 hover:border-yellow-500/70 transition-all duration-500 group-hover:scale-[1.02] backdrop-blur-sm h-full overflow-hidden">
        {/* Premium background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-800/10 to-transparent"></div>
        
        {/* Exclusive header */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-500/20 to-transparent rounded-bl-3xl"></div>
        
        <CardHeader className="relative pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-700 rounded-xl flex items-center justify-center shadow-lg">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <Badge className={`bg-gradient-to-r ${research.badge.color} text-white border-0 text-xs px-2 py-1`}>
                {research.badge.icon}
                <span className="ml-1">{research.badge.text}</span>
              </Badge>
            </div>
          </div>
          
          <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors leading-tight">
            {research.title}
          </CardTitle>
          <CardDescription className="text-gray-300 leading-relaxed">
            {research.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Research details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Crown className="w-4 h-4 mr-2 text-yellow-400" />
                <span>{research.category}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                <span>{research.impact}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Users className="w-4 h-4 mr-2 text-yellow-400" />
                <span>{research.subscribers} subscribers</span>
              </div>
              <div className="flex items-center text-green-400 font-semibold">
                <Gem className="w-4 h-4 mr-2" />
                <span>{research.value} value</span>
              </div>
            </div>
          </div>

          {/* Meta info */}
          <div className="flex items-center justify-between pt-4 border-t border-yellow-600/30">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>{research.date}</span>
              <span>•</span>
              <span>{research.readTime} read</span>
            </div>
            
            <div className="flex space-x-2">
              <Button size="sm" className="bg-gradient-to-r from-yellow-600 to-orange-700 hover:from-yellow-700 hover:to-orange-800 text-white border-0 shadow-md group-hover:shadow-lg transition-all duration-300">
                <Lock className="w-4 h-4 mr-1" />
                Access
              </Button>
              <Button size="sm" variant="outline" className="border-yellow-400/50 text-yellow-200 hover:bg-yellow-600/30 hover:border-yellow-300">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const SuccessCard = ({ study, index }) => (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-[2rem] group-hover:scale-105 transition-transform duration-300 blur-sm"></div>
      <div className={`relative bg-gradient-to-br ${study.color} p-[1px] rounded-[2rem] group-hover:shadow-2xl transition-all duration-300`}>
        <div className="bg-gradient-to-br from-gray-800/95 via-gray-700/90 to-gray-800/95 p-8 rounded-[2rem] backdrop-blur-sm h-full">
          {/* Floating icon */}
          <div className="relative mb-6">
            <div className={`absolute inset-0 bg-gradient-to-r ${study.color} rounded-2xl blur-lg opacity-50 group-hover:scale-110 transition-transform duration-300`}></div>
            <div className={`relative w-16 h-16 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:-translate-y-1 transition-transform duration-300`}>
              {study.icon}
            </div>
          </div>
          
          <h4 className="text-xl font-bold text-white mb-3 leading-tight">{study.title}</h4>
          <p className="text-purple-300 font-semibold mb-4 text-sm uppercase tracking-wide">{study.company}</p>
          
          {/* Results */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 mb-4 border border-white/10">
            <p className="text-gray-200 text-sm font-medium mb-2">{study.result}</p>
            <p className="text-green-400 text-sm font-bold">{study.value}</p>
          </div>
          
          <Button variant="ghost" size="sm" className="text-purple-300 hover:bg-purple-600/20 p-0 hover:text-purple-200 font-semibold group-hover:translate-x-1 transition-transform duration-200">
            Read Case Study →
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/98 via-slate-900/95 to-purple-950/98"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/15 via-transparent to-purple-900/15"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-56 h-56 bg-violet-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-32 h-32 bg-fuchsia-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header - similar to Master Blockchain Economics */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-full text-purple-200 text-sm font-medium mb-8 border border-purple-500/50 backdrop-blur-sm">
            <Brain className="w-5 h-5 mr-2" />
            Revolutionary Research Platform
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Pioneering
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Blockchain
            </span>
            <br />Research
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Access groundbreaking research that shapes the future of digital economics. 
            From public insights to exclusive intelligence for program participants.
          </p>
        </div>

        {/* Research Categories */}
        <div className="mb-16">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800/50 p-2 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('public')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'public'
                      ? 'bg-gradient-to-r from-purple-600 to-violet-700 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Public Research
                    <Badge className="ml-2 bg-purple-600/20 text-purple-400 border-purple-500/30">
                      {publicResearch.length}
                    </Badge>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('private')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'private'
                      ? 'bg-gradient-to-r from-yellow-600 to-orange-700 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Exclusive Research
                    <Badge className="ml-2 bg-yellow-600/20 text-yellow-400 border-yellow-500/30">
                      {privateResearch.length}
                    </Badge>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Research Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {(activeTab === 'public' ? publicResearch : privateResearch).map((research, index) => (
              activeTab === 'public' ? (
                <PublicResearchCard key={index} research={research} index={index} />
              ) : (
                <PrivateResearchCard key={index} research={research} index={index} />
              )
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Research Impact Stories</h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real-world applications of our research driving transformational results across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successMetrics.map((study, index) => (
              <SuccessCard key={index} study={study} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-violet-900/30 to-fuchsia-900/40 rounded-3xl"></div>
          <div className="relative p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Access Exclusive Research?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our certification program to unlock premium research, trading intelligence, and market insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white px-8 py-4">
                <Crown className="w-5 h-5 mr-2" />
                Join Program
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4">
                <FileText className="w-5 h-5 mr-2" />
                View All Research
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
