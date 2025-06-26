
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, DollarSign, Rocket, Building, Send, Calendar, Target, Globe, Shield, Star, Zap, ArrowUpRight, CheckCircle, Users } from 'lucide-react';

const VentureFund = () => {
  const portfolioCompanies = [
    {
      company: "BlockChain Dynamics",
      sector: "Enterprise Blockchain",
      stage: "Pre-IPO",
      valuation: "$120M",
      description: "Leading enterprise blockchain solutions provider preparing for NYSE listing",
      exitStrategy: "IPO Q2 2025",
      logo: "🏢"
    },
    {
      company: "DeFi Solutions Corp",
      sector: "Financial Technology",
      stage: "Series C",
      valuation: "$85M",
      description: "Institutional DeFi platform targeting Fortune 500 companies",
      exitStrategy: "Strategic Acquisition",
      logo: "💎"
    },
    {
      company: "CryptoScale",
      sector: "Infrastructure",
      stage: "Growth",
      valuation: "$45M",
      description: "Next-generation blockchain infrastructure for enterprise adoption",
      exitStrategy: "IPO 2026",
      logo: "⚡"
    }
  ];

  const fundHighlights = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "IPO Preparation",
      description: "Specialized in preparing blockchain companies for public offerings",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-500/10 to-cyan-500/20"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Enterprise Focus",
      description: "Targeting companies with B2B blockchain solutions and enterprise clients",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      bgGradient: "from-blue-500/10 to-purple-500/20"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Expansion",
      description: "Supporting international market entry and scaling operations",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-500/10 to-pink-500/20"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Regulatory Compliance",
      description: "Ensuring full regulatory compliance for institutional adoption",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      bgGradient: "from-violet-500/10 to-fuchsia-500/20"
    }
  ];

  return (
    <section id="venture" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-900/40 to-teal-900/40 rounded-full text-emerald-300 text-sm font-semibold mb-8 border border-emerald-500/30 backdrop-blur-sm">
            <Star className="w-4 h-4 mr-2" />
            Preparing Companies for Market Leadership
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            SIDE
            <span className="bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {' '}Venture Fund
            </span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            We're raising a <span className="text-emerald-400 font-bold">$5M venture fund</span> to identify and scale 
            high-potential blockchain companies, preparing them for IPOs and strategic acquisitions in the rapidly 
            evolving digital economy.
          </p>

          {/* Fund Status Banner */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-gray-800/90 to-gray-700/90 p-8 rounded-2xl border border-emerald-500/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Fund Raising Progress</h3>
                <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-lg px-4 py-2">
                  Active
                </Badge>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">$2.1M</div>
                  <div className="text-gray-300 text-sm">Committed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">$5M</div>
                  <div className="text-gray-300 text-sm">Target Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-1">42%</div>
                  <div className="text-gray-300 text-sm">Raised</div>
                </div>
              </div>
              <div className="mt-6 bg-gray-700/50 rounded-full h-3">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {fundHighlights.map((highlight, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.bgGradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-40 group-hover:opacity-60`}></div>
              <div className="relative bg-gradient-to-br from-gray-800/95 via-gray-700/90 to-gray-800/95 p-8 rounded-3xl border border-gray-600/40 hover:shadow-2xl transition-all duration-300 group-hover:scale-105 backdrop-blur-sm hover:border-emerald-500/50 text-center">
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${highlight.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2`}>
                    <div className="text-white">
                      {highlight.icon}
                    </div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4">{highlight.title}</h4>
                <p className="text-gray-200 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Companies */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Current Portfolio</h3>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Companies we're actively preparing for major market events and strategic exits
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolioCompanies.map((company, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-3xl group-hover:scale-105 transition-transform duration-300"></div>
                <Card className="relative group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 border border-gray-600/40 hover:border-emerald-500/50 rounded-3xl overflow-hidden backdrop-blur-sm">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
                  
                  <CardHeader className="relative pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{company.logo}</div>
                      <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20 border border-emerald-400/30 rounded-full px-3 py-1">
                        {company.stage}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white mb-2">{company.company}</CardTitle>
                    <CardDescription className="text-emerald-300 font-semibold text-sm uppercase tracking-wide">
                      {company.sector}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Valuation</span>
                      <span className="text-2xl font-bold text-emerald-400">{company.valuation}</span>
                    </div>
                    
                    <p className="text-gray-200 text-sm leading-relaxed">{company.description}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-600/30">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Exit Strategy</div>
                        <div className="text-sm font-semibold text-teal-300">{company.exitStrategy}</div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-emerald-300 hover:bg-emerald-500/20 p-2 group-hover:translate-x-1 transition-transform duration-200">
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Our Investment Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Due Diligence", description: "Comprehensive analysis of technology, market, and team", icon: <Target className="w-6 h-6" /> },
              { step: "02", title: "Strategic Planning", description: "Develop roadmap for growth and market positioning", icon: <Rocket className="w-6 h-6" /> },
              { step: "03", title: "Capital Injection", description: "Provide funding and connect with strategic partners", icon: <DollarSign className="w-6 h-6" /> },
              { step: "04", title: "Exit Preparation", description: "Prepare for IPO or strategic acquisition", icon: <TrendingUp className="w-6 h-6" /> }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <div className="text-white">
                      {process.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{process.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-800/95 via-gray-800/90 to-slate-900/95 border border-emerald-500/30 shadow-2xl backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-600/10 to-cyan-600/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/20 via-teal-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 via-teal-500/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative p-12 md:p-16 text-center">
            <div className="flex justify-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                Ready to Scale Your Company?
                <span className="block text-2xl font-normal text-emerald-200 mt-2">Join Our Portfolio of Market Leaders</span>
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Are you building a blockchain company with enterprise potential? We provide the capital, 
                expertise, and network needed to prepare for major market events and strategic exits.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white font-bold px-10 py-6 shadow-2xl border-0 group transition-all duration-300 hover:scale-105 rounded-2xl text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                Apply for Investment
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-emerald-400/60 bg-white/10 text-white hover:bg-emerald-500/20 hover:border-emerald-300 font-bold px-10 py-6 backdrop-blur-sm group transition-all duration-300 hover:scale-105 rounded-2xl text-lg shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                Schedule Consultation
              </Button>
            </div>
            
            <div className="mt-12 flex justify-center space-x-8 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>IPO Preparation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span>Strategic Exits</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Enterprise Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VentureFund;
