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
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-600/30 to-green-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-gradient-to-l from-blue-600/25 to-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-tr from-purple-600/20 to-violet-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Content placeholder - all achievement blocks have been removed */}
        <div className="text-center py-32">
          <h2 className="text-3xl font-bold text-white mb-6">
            О нас
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Добро пожаловать в наш институт экономики блокчейна.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
