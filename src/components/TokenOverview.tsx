
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  TrendingUp, 
  Coins, 
  BarChart3,
  Zap,
  Flame,
  Shield,
  Crown,
  CheckCircle2,
  ArrowUpRight,
  ExternalLink,
  Target,
  Sparkles,
  Star,
  PieChart,
  Gift,
  Lock,
  Award
} from 'lucide-react';

const TokenOverview = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg mr-3">
            <img 
              src="/lovable-uploads/38c7bb81-42e5-4be7-9177-8f17c128376a.png" 
              alt="SIDE Token" 
              className="w-8 h-8"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">$SIDE Token</h2>
            <p className="text-yellow-300 font-medium text-sm">Dividends start at $10M market cap</p>
          </div>
          <Badge className="ml-4 bg-green-500/20 border-green-400/50 text-green-300 px-3 py-1 font-semibold text-xs">
            GUARANTEED
          </Badge>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-all">
            <Target className="w-4 h-4 mr-2" />
            Buy $SIDE
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-600/20 px-6 py-3 rounded-xl font-medium">
            <BarChart3 className="w-4 h-4 mr-2" />
            DexScreener
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 1. Basic Token Info */}
        <div className="bg-gradient-to-br from-gray-800/60 via-gray-900/40 to-gray-800/60 rounded-2xl p-6 border border-gray-600/30 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <Coins className="w-5 h-5 text-purple-400 mr-2" />
            <h3 className="text-lg font-bold text-white">Token Info</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
              <span className="text-gray-300 text-sm">Total Supply</span>
              <span className="text-white font-semibold">1,000,000</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
              <span className="text-gray-300 text-sm">Blockchain</span>
              <span className="text-purple-400 font-semibold">Solana</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
              <span className="text-gray-300 text-sm">Dividend Start</span>
              <span className="text-green-400 font-semibold">$10M cap</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-300 text-sm">Security Score</span>
              <span className="text-yellow-400 font-semibold">98%</span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="text-center p-3 bg-emerald-900/20 rounded-xl border border-emerald-500/30">
              <div className="text-xl font-bold text-emerald-400">15%</div>
              <div className="text-emerald-300 text-xs">APY Dividends</div>
            </div>
            <div className="text-center p-3 bg-orange-900/20 rounded-xl border border-orange-500/30">
              <div className="text-xl font-bold text-orange-400">300%</div>
              <div className="text-orange-300 text-xs">Avg ROI</div>
            </div>
          </div>
        </div>

        {/* 2. How to Buy */}
        <div className="bg-gradient-to-br from-gray-800/60 via-gray-900/40 to-gray-800/60 rounded-2xl p-6 border border-gray-600/30 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <Target className="w-5 h-5 text-cyan-400 mr-2" />
            <h3 className="text-lg font-bold text-white">How to Buy</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-gradient-to-r from-purple-900/30 to-violet-900/20 rounded-xl border border-purple-500/30">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</div>
              <div>
                <div className="text-white font-medium text-sm">Install Phantom</div>
                <div className="text-gray-400 text-xs">Solana wallet</div>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-gradient-to-r from-purple-900/30 to-violet-900/20 rounded-xl border border-purple-500/30">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</div>
              <div>
                <div className="text-white font-medium text-sm">Buy SOL</div>
                <div className="text-gray-400 text-xs">On exchange</div>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-gradient-to-r from-purple-900/30 to-violet-900/20 rounded-xl border border-purple-500/30">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</div>
              <div>
                <div className="text-white font-medium text-sm">Swap to $SIDE</div>
                <div className="text-gray-400 text-xs">Start earning</div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="flex items-center text-green-300 font-medium px-3 py-1 bg-green-900/20 rounded-full border border-green-500/30 text-xs">
              <Shield className="w-3 h-3 mr-1" />
              CertiK
            </div>
            <div className="flex items-center text-purple-300 font-medium px-3 py-1 bg-purple-900/20 rounded-full border border-purple-500/30 text-xs">
              <Crown className="w-3 h-3 mr-1" />
              Swiss Licensed
            </div>
          </div>
        </div>

        {/* 3. Benefits & Features */}
        <div className="bg-gradient-to-br from-gray-800/60 via-gray-900/40 to-gray-800/60 rounded-2xl p-6 border border-gray-600/30 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <h3 className="text-lg font-bold text-white">Benefits</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Auto Dividends</h4>
                <p className="text-gray-300 text-xs">Monthly profit distributions from $10M cap</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Staking Protocol</h4>
                <p className="text-gray-300 text-xs">+25% bonus APY for locked tokens</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                <Flame className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Token Burns</h4>
                <p className="text-gray-300 text-xs">2% quarterly supply reduction</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Proven Growth</h4>
                <p className="text-gray-300 text-xs">$150M+ assets, 15 unicorns funded</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                <Crown className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Elite Access</h4>
                <p className="text-gray-300 text-xs">Exclusive calls & governance rights</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center pt-6 border-t border-gray-700/30">
        <h3 className="text-xl font-bold text-white mb-2">
          Start earning <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">passive income</span>
        </h3>
        <p className="text-gray-300 mb-4 text-sm">
          Join the blockchain economy revolution with guaranteed dividends
        </p>
        
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-all">
            Buy $SIDE Tokens
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="border-purple-400/50 text-purple-300 hover:bg-purple-600/30 px-6 py-3 rounded-xl font-medium">
            View on DexScreener
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TokenOverview;
