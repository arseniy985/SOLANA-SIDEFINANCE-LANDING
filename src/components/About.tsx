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
  const successMetrics = [
    { label: "Fund Performance", value: "300%", suffix: "ROI", icon: <LineChart className="w-6 h-6" /> },
    { label: "Student Success", value: "95%", suffix: "Placement", icon: <Trophy className="w-6 h-6" /> },
    { label: "Market Leaders", value: "3", suffix: "Unicorns", icon: <Crown className="w-6 h-6" /> }
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
        {/* Success Metrics Bar */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center max-w-4xl mx-auto">
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
      </div>
    </section>
  );
};

export default About;
