
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TokenOverview from './TokenOverview';
import { 
  Copy, 
  Check, 
  Shield, 
  TrendingUp, 
  Coins, 
  Users, 
  ExternalLink,
  Twitter,
  Github,
  MessageCircle,
  DollarSign,
  Lock,
  Zap,
  Target,
  Award,
  BarChart3,
  Rocket,
  Star,
  PieChart,
  ArrowUpRight,
  Building,
  Wallet,
  Flame,
  Lightbulb,
  Network,
  Banknote,
  Globe,
  Activity,
  ShieldCheck,
  ShieldAlert,
  Eye,
  FileText,
  Key,
  UserCheck,
  Database,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Fingerprint,
  CreditCard,
  Verified,
  Gift,
  Percent,
  Crown,
  Sparkles,
  Timer,
  Calendar,
  TrendingDown,
  ArrowRight
} from 'lucide-react';

const TokenSection = () => {
  const [copied, setCopied] = useState(false);
  
  const tokenAddress = "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R";
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(tokenAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const investmentTiers = [
    { name: "Bronze", min: "1,000 $SIDE", benefits: ["Monthly reports", "Community access"] },
    { name: "Silver", min: "5,000 $SIDE", benefits: ["Quarterly calls", "Early access", "Staking rewards"] },
    { name: "Gold", min: "25,000 $SIDE", benefits: ["Private consultations", "Exclusive events"] },
    { name: "Diamond", min: "100,000 $SIDE", benefits: ["Direct founder access", "Investment opportunities"] }
  ];

  const securityFeatures = [
    {
      icon: ShieldCheck,
      title: "CertiK Audit",
      subtitle: "Complete security verification",
      description: "Full smart contract audit by industry-leading CertiK with 98% security score",
      status: "Verified",
      color: "from-green-600 to-emerald-700",
      borderColor: "border-green-500/50",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Lock,
      title: "Multisig Treasury",
      subtitle: "Protected fund management", 
      description: "5-of-7 multisig wallet securing $150M+ in assets with time-locked withdrawals",
      status: "Active",
      color: "from-blue-600 to-cyan-700",
      borderColor: "border-blue-500/50",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Banknote,
      title: "Locked Liquidity",
      subtitle: "Guaranteed stability",
      description: "100% liquidity locked for 5 years with Unicrypt, ensuring long-term stability",
      status: "Locked",
      color: "from-purple-600 to-violet-700",
      borderColor: "border-purple-500/50",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      subtitle: "24/7 security surveillance",
      description: "Advanced monitoring systems tracking all transactions and potential threats",
      status: "Online",
      color: "from-orange-600 to-red-700",
      borderColor: "border-orange-500/50",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: FileText,
      title: "Legal Compliance",
      subtitle: "Regulatory framework",
      description: "Full legal compliance with Swiss financial regulations and SEC guidelines",
      status: "Compliant",
      color: "from-indigo-600 to-blue-700",
      borderColor: "border-indigo-500/50",
      bgColor: "bg-indigo-500/10"
    },
    {
      icon: Database,
      title: "Cold Storage",
      subtitle: "Offline asset protection",
      description: "95% of funds stored in military-grade cold storage with geographic distribution",
      status: "Secured",
      color: "from-gray-600 to-slate-700",
      borderColor: "border-gray-500/50",
      bgColor: "bg-gray-500/10"
    },
    {
      icon: Fingerprint,
      title: "Biometric Access",
      subtitle: "Advanced authentication",
      description: "Multi-factor biometric authentication for all critical operations",
      status: "Enabled",
      color: "from-teal-600 to-cyan-700",
      borderColor: "border-teal-500/50",
      bgColor: "bg-teal-500/10"
    },
    {
      icon: UserCheck,
      title: "KYC/AML Verified",
      subtitle: "Identity verification",
      description: "Full KYC/AML compliance with institutional-grade verification procedures",
      status: "Verified",
      color: "from-green-600 to-teal-700",
      borderColor: "border-green-500/50",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Clock,
      title: "Time Locks",
      subtitle: "Delayed execution",
      description: "48-hour time locks on all major operations preventing unauthorized access",
      status: "Active",
      color: "from-yellow-600 to-orange-700",
      borderColor: "border-yellow-500/50",
      bgColor: "bg-yellow-500/10"
    }
  ];

  return (
    <section id="token" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 rounded-full text-purple-200 text-sm font-semibold mb-4 border border-purple-500/30">
            <Coins className="w-4 h-4 mr-2 text-purple-400" />
            Official $SIDE Token
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-purple-300 bg-clip-text text-transparent">$SIDE</span> Token
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Solana Institute of Digital Economics - the first token with dividends in blockchain research
          </p>
        </div>

        {/* Contract Address - Centered */}
        <div className="mb-8 max-w-xl mx-auto">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-4">
            <h3 className="text-white font-semibold text-center mb-3 flex items-center justify-center text-sm">
              <Network className="w-4 h-4 mr-2 text-purple-400" />
              Contract Address
            </h3>
            <div className="flex items-center gap-3">
              <code className="flex-1 text-purple-300 text-xs font-mono bg-gray-700/50 px-3 py-2 rounded-lg text-center break-all">
                {tokenAddress}
              </code>
              <Button
                onClick={copyToClipboard}
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 px-3 py-2"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="grid w-full max-w-md grid-cols-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-1 h-12">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-700 data-[state=active]:text-white rounded-xl px-4 py-2 text-sm font-medium h-10 flex items-center justify-center"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="rewards" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-700 data-[state=active]:text-white rounded-xl px-4 py-2 text-sm font-medium h-10 flex items-center justify-center"
                >
                  Rewards
                </TabsTrigger>
                <TabsTrigger 
                  value="security" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-700 data-[state=active]:text-white rounded-xl px-4 py-2 text-sm font-medium h-10 flex items-center justify-center"
                >
                  Security
                </TabsTrigger>
                <TabsTrigger 
                  value="community" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-700 data-[state=active]:text-white rounded-xl px-4 py-2 text-sm font-medium h-10 flex items-center justify-center"
                >
                  Community
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Overview Tab - Using New Component */}
            <TabsContent value="overview">
              <TokenOverview />
            </TabsContent>

            
            <TabsContent value="rewards" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {investmentTiers.map((tier, index) => (
                  <div key={index} className="bg-gray-800/40 border border-gray-600/30 rounded-xl p-4 backdrop-blur-sm hover:border-purple-500/30 transition-colors">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-violet-700 rounded-lg flex items-center justify-center text-white mr-3">
                        <Star className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">{tier.name} Tier</h3>
                        <p className="text-purple-300 font-medium text-xs">{tier.min}</p>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-xs">
                          <Check className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full text-green-200 text-sm font-semibold mb-4 border border-green-500/40">
                  <ShieldCheck className="w-4 h-4 mr-2 text-green-400" />
                  Bank-Grade Security Infrastructure
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Maximum <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Security</span> Standards
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Your investment is protected by institutional-grade security measures, 
                  advanced encryption, and multiple layers of verification.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className={`${feature.bgColor} ${feature.borderColor} border rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 group relative overflow-hidden p-4`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center text-white shadow-lg`}>
                          <feature.icon className="w-5 h-5" />
                        </div>
                        <Badge className={`${feature.bgColor} ${feature.borderColor} border text-xs font-semibold px-2 py-1`}>
                          {feature.status}
                        </Badge>
                      </div>
                      <h3 className="text-white font-bold text-base mb-1">{feature.title}</h3>
                      <p className="text-gray-400 font-medium text-xs mb-2">{feature.subtitle}</p>
                      <p className="text-gray-300 text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30">
                  <div className="text-2xl font-bold text-green-400 mb-1">98%</div>
                  <div className="text-gray-300 text-xs">Security Score</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
                  <div className="text-gray-300 text-xs">Monitoring</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-xl border border-purple-500/30">
                  <div className="text-2xl font-bold text-purple-400 mb-1">$150M+</div>
                  <div className="text-gray-300 text-xs">Assets Secured</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-xl border border-orange-500/30">
                  <div className="text-2xl font-bold text-orange-400 mb-1">0</div>
                  <div className="text-gray-300 text-xs">Incidents</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <div className="flex items-center px-3 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full border border-green-500/30">
                  <Verified className="w-3 h-3 mr-2 text-green-400" />
                  <span className="text-green-300 text-xs font-medium">CertiK Verified</span>
                </div>
                <div className="flex items-center px-3 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border border-blue-500/30">
                  <Shield className="w-3 h-3 mr-2 text-blue-400" />
                  <span className="text-blue-300 text-xs font-medium">Insurance Protected</span>
                </div>
                <div className="flex items-center px-3 py-2 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full border border-purple-500/30">
                  <Award className="w-3 h-3 mr-2 text-purple-400" />
                  <span className="text-purple-300 text-xs font-medium">Swiss Compliant</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="community" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-800/40 border border-purple-500/30 rounded-xl backdrop-blur-sm p-4 text-center">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-2">
                    <Users className="w-4 h-4" />
                  </div>
                  <p className="text-lg font-bold text-white mb-1">2,847</p>
                  <p className="text-gray-400 text-xs">Holders</p>
                </div>

                <div className="bg-gray-800/40 border border-purple-500/30 rounded-xl backdrop-blur-sm p-4 text-center">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-2">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <p className="text-lg font-bold text-white mb-1">$1.2M</p>
                  <p className="text-gray-400 text-xs">Total Volume</p>
                </div>

                <div className="bg-gray-800/40 border border-purple-500/30 rounded-xl backdrop-blur-sm p-4 text-center">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-2">
                    <Activity className="w-4 h-4" />
                  </div>
                  <p className="text-lg font-bold text-white mb-1">$45K</p>
                  <p className="text-gray-400 text-xs">Daily Volume</p>
                </div>

                <div className="bg-gray-800/40 border border-purple-500/30 rounded-xl backdrop-blur-sm p-4 text-center">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-2">
                    <Flame className="w-4 h-4" />
                  </div>
                  <p className="text-lg font-bold text-white mb-1">12,450</p>
                  <p className="text-gray-400 text-xs">Tokens Burned</p>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <Button variant="outline" className="border-blue-400/50 text-blue-400 hover:bg-blue-500/20 rounded-xl text-sm px-4 py-2">
                  <Twitter className="w-3 h-3 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/20 rounded-xl text-sm px-4 py-2">
                  <MessageCircle className="w-3 h-3 mr-2" />
                  Telegram  
                </Button>
                <Button variant="outline" className="border-gray-400/50 text-gray-300 hover:bg-gray-500/20 rounded-xl text-sm px-4 py-2">
                  <Github className="w-3 h-3 mr-2" />
                  GitHub
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="bg-gradient-to-r from-purple-900/40 via-violet-900/40 to-purple-900/40 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-2">
              Start earning <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">today</span>
            </h2>
            <p className="text-gray-200 mb-4 text-sm">
              Don't miss the opportunity to earn passive income from blockchain economy development
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white px-5 rounded-xl">
                Buy $SIDE Tokens
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-purple-400/50 text-purple-300 hover:bg-purple-600/30 rounded-xl">
                View on DexScreener
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
