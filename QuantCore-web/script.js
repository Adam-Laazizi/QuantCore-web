import React, { useState } from 'react';
import { TrendingUp, BarChart3, Lock, Zap, PieChart, DollarSign, Settings, Play, RotateCcw, Code, Calendar, Target, ArrowLeft, ChevronRight, Plus } from 'lucide-react';

// Landing Page Component
const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background gradient - Multiple varied green glows */}
      <div className="fixed inset-0 opacity-30">
        {/* Hero section glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ backgroundColor: '#00ff88' }}></div>
        <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ backgroundColor: '#00d978', animationDelay: '1s' }}></div>
        <div className="absolute top-40 left-1/3 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ backgroundColor: '#00ff99', animationDelay: '3s' }}></div>
        
        {/* Mid-section glows */}
        <div className="absolute top-1/3 right-1/6 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ backgroundColor: '#00cc6a', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/5 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ backgroundColor: '#10ffaa', animationDelay: '4s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ backgroundColor: '#00e87c', animationDelay: '1.5s' }}></div>
        
        {/* Features section glows */}
        <div className="absolute top-3/4 left-1/6 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ backgroundColor: '#00ffbb', animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ backgroundColor: '#00d470', animationDelay: '3.5s' }}></div>
        
        {/* Bottom section glows */}
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ backgroundColor: '#00f594', animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ backgroundColor: '#00b85c', animationDelay: '4s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ backgroundColor: '#00ffa0', animationDelay: '2.5s' }}></div>
      </div>

      {/* Header */}
      <header className="relative flex items-center justify-between px-8 py-5 border-b border-gray-800/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center relative overflow-hidden" 
            style={{ background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)', boxShadow: '0 0 30px rgba(0, 255, 136, 0.4)' }}>
            <TrendingUp className="w-5 h-5 text-black relative z-10" />
          </div>
          <span className="text-xl font-bold">QuantCore</span>
        </div>
        <nav className="flex items-center gap-8">
          <button className="text-gray-400 hover:text-white transition-colors">Demo</button>
          <button className="text-gray-400 hover:text-white transition-colors">About</button>
          <button className="text-gray-400 hover:text-white transition-colors">Sign in</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-8 pt-24 pb-32 text-center">
        <div className="inline-block mb-8 px-5 py-2 rounded-full text-sm text-gray-300 border border-gray-700/50 backdrop-blur-sm"
          style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
          Professional Backtesting Platform
        </div>
        <h1 className="text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent"
            style={{ textShadow: '0 0 80px rgba(0, 255, 136, 0.3)' }}>
            Backtest Your Strategies
          </span>
          <br />
          <span className="text-white">With Precision & Speed</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Build, test, and optimize your trading strategies using custom Python code or powerful preset configurations. Get institutional-grade backtesting in seconds.
        </p>
        <div className="flex items-center justify-center gap-5">
          <button 
            onClick={() => onNavigate('strategyChoice')}
            className="group relative px-10 py-4 text-black rounded-xl font-bold transition-all overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
              boxShadow: '0 0 40px rgba(0, 255, 136, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 60px rgba(0, 255, 136, 0.7), 0 10px 30px rgba(0, 0, 0, 0.4)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 255, 136, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3)'}
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button 
            className="px-10 py-4 rounded-xl font-bold transition-all border border-gray-700 backdrop-blur-sm hover:border-gray-600"
            style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
            Watch Demo
          </button>
        </div>
        <div className="mt-12 text-sm text-gray-500 animate-bounce">
          Scroll to learn more ↓
        </div>
      </section>

      {/* Features Section */}
      <section className="relative max-w-6xl mx-auto px-8 py-24">
        <h2 className="text-5xl font-bold text-center mb-4">Powerful Features</h2>
        <p className="text-gray-400 text-center mb-16 text-lg">Everything you could wish for, and more</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Code className="w-7 h-7" />}
            title="Custom Python Strategies"
            description="Your code, your rules, no training wheels. Full Python support and access for endless customization."
            gradient="from-cyan-500 to-blue-500"
          />
          <FeatureCard 
            icon={<Settings className="w-7 h-7" />}
            title="Preset Configuration"
            description="Choose from battle-tested strategies and customize parameters to fit your style."
            gradient="from-blue-500 to-purple-500"
          />
          <FeatureCard 
            icon={<BarChart3 className="w-7 h-7" />}
            title="Advanced Analytics"
            description="Deep performance metrics, risk analysis, and visual reporting for data-driven decisions."
            gradient="from-purple-500 to-pink-500"
          />
          <FeatureCard 
            icon={<Zap className="w-7 h-7" />}
            title="Lightning Fast"
            description="Optimized execution engine powered by C++ processes years of data in the blink of an eye."
            gradient="from-yellow-500 to-orange-500"
          />
          <FeatureCard 
            icon={<Lock className="w-7 h-7" />}
            title="Enterprise Security"
            description="Bank-grade encryption and secure cloud infrastructure for your strategies."
            gradient="from-gray-500 to-gray-600"
          />
          <FeatureCard 
            icon={<PieChart className="w-7 h-7" />}
            title="Multi-Asset Support"
            description="Backtest across stocks, crypto, forex, and futures with unified data feeds."
            gradient="from-pink-500 to-rose-500"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative max-w-4xl mx-auto px-8 py-32 text-center">
        <h2 className="text-5xl font-bold mb-6">Ready to Start Backtesting?</h2>
        <p className="text-gray-400 mb-12 text-lg">
          From professional traders to those just starting out, join the growing number of traders optimizing their strategies with QuantCore
        </p>
        <button 
          onClick={() => onNavigate('strategyChoice')}
          className="group px-12 py-5 text-black rounded-xl font-bold transition-all text-lg"
          style={{ 
            background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
            boxShadow: '0 0 40px rgba(0, 255, 136, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 60px rgba(0, 255, 136, 0.7), 0 10px 30px rgba(0, 0, 0, 0.4)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 255, 136, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3)'}
        >
          <span className="flex items-center gap-2 justify-center">
            Launch Dashboard Now <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </section>

      <footer className="relative border-t border-gray-800/50 py-8 text-center text-gray-500 text-sm">
        © 2025 QuantCore. All rights reserved.
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, gradient }) => (
  <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-7 hover:border-gray-700 transition-all hover:transform hover:scale-[1.02]"
    style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
    <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
      style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

// Strategy Choice Page
const StrategyChoicePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800/50 px-8 py-5 backdrop-blur-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
            <button
              onClick={() => onNavigate('landing')}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)', boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)' }}>
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold">QuantCore</span>
            </div>
          </div>
          </header>

        <div className="max-w-5xl mx-auto px-8 py-20">
          <div className="flex items-center gap-4 mb-12">
            <button 
              className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2 border-2 transition-all"
              style={{ 
                backgroundColor: '#00ff88',
                borderColor: '#00ff88',
                color: '#0a0a0a',
                boxShadow: '0 0 30px rgba(0, 255, 136, 0.4)'
              }}>
              <Code className="w-5 h-5" /> Custom Strategy
            </button>
            <button className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-all">
              <Settings className="w-5 h-5" /> Preset Strategy
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <StrategyChoiceCard
              icon={<Code />}
              title="Custom Strategy"
              onClick={() => onNavigate('customCode')}
              gradient="from-cyan-500 to-blue-600"
            />
            <StrategyChoiceCard
              icon={<Settings />}
              title="Preset Strategy"
              onClick={() => onNavigate('presetStrategies')}
              gradient="from-purple-500 to-pink-600"
          />
        </div>
      </div>
    </div>
  );
};

const StrategyChoiceCard = ({ icon, title, onClick, gradient }) => (
  <div 
    onClick={onClick}
    className="group relative cursor-pointer rounded-2xl p-8 border border-gray-800/50 hover:border-gray-700 transition-all overflow-hidden"
    style={{ background: 'rgba(255, 255, 255, 0.02)', minHeight: '300px' }}>
    <div className="relative z-10">
      <div className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
        style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)' }}>
        {React.cloneElement(icon, { className: 'w-10 h-10' })}
      </div>
      <h3 className="text-3xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 text-lg">
        {title === "Custom Strategy" ? 
          "Write your own backtesting logic using Python" :
          "Choose and configure a pre-built strategy"}
      </p>
      <div className="mt-6 flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-4 transition-all">
        Continue <ChevronRight className="w-5 h-5" />
      </div>
    </div>
  </div>
);

// Preset Strategies Page
const PresetStrategiesPage = ({ onNavigate }) => {
  const presets = [
    { name: 'Moving Average Crossover', desc: 'Classic trend-following strategy', icon: <TrendingUp /> },
    { name: 'RSI Mean Reversion', desc: 'Oversold/overbought signals', icon: <BarChart3 /> },
    { name: 'Bollinger Bands Breakout', desc: 'Volatility-based entries', icon: <Zap /> },
    { name: 'MACD Momentum', desc: 'Momentum indicator strategy', icon: <Target /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800/50 px-8 py-5">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
            <button
              onClick={() => onNavigate('strategyChoice')}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)', boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)' }}>
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold">QuantCore</span>
            </div>
          </div>
      </header>

      <div className="max-w-5xl mx-auto px-8 py-12">
          <h1 className="text-4xl font-bold mb-3">Preset Strategies</h1>
          <p className="text-gray-400 mb-12 text-lg">Choose and configure a pre-built strategy</p>

          <div className="space-y-4 mb-8">
            {presets.map((preset, i) => (
              <div key={i} 
                className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700 transition-all cursor-pointer group"
                style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      {React.cloneElement(preset.icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{preset.name}</h3>
                      <p className="text-gray-400">{preset.desc}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => onNavigate('dashboard')}
                    className="px-6 py-3 rounded-lg font-semibold transition-all border border-gray-700 hover:border-emerald-500"
                    style={{ background: 'rgba(0, 255, 136, 0.1)' }}>
                    Configure & Test
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-2 border-dashed border-gray-800 rounded-xl p-12 text-center hover:border-gray-700 transition-all cursor-pointer"
            style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Create Custom Preset</h3>
            <p className="text-gray-400 mb-4">Save your own strategy configurations for reuse</p>
            <button className="px-6 py-3 rounded-lg font-semibold transition-all"
              style={{ 
                background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
                color: '#0a0a0a',
                boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)'
              }}>
              New Preset
          </button>
        </div>
      </div>
    </div>
  );
};

// Custom Code Editor Page
const CustomCodePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800/50 px-8 py-5">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate('strategyChoice')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
              style={{ background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)', boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)' }}>
              <TrendingUp className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-bold">QuantCore</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex items-center gap-4 mb-8">
          <button 
            className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2 border-2 transition-all"
            style={{ 
              backgroundColor: '#00ff88',
              borderColor: '#00ff88',
              color: '#0a0a0a',
              boxShadow: '0 0 30px rgba(0, 255, 136, 0.4)'
            }}>
            <Code className="w-5 h-5" /> Custom Strategy
          </button>
          <button 
            onClick={() => onNavigate('presetStrategies')}
            className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-all">
            <Settings className="w-5 h-5" /> Preset Strategy
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Custom Python Strategy</h1>
            <p className="text-gray-400">Write your own backtesting logic using Python</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-900/70">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Code className="w-4 h-4" />
                <span>strategy.py</span>
              </div>
              <button className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            <div className="p-6 font-mono text-sm" style={{ background: '#0d1117' }}>
              <pre className="text-gray-300">
                <span className="text-gray-500"># Define your strategy</span>{'\n'}
                <span className="text-purple-400">def</span> <span className="text-blue-400">strategy</span>(<span className="text-orange-300">data</span>):{'\n'}
                <span className="text-gray-500">    # Your logic here</span>{'\n'}
                    <span className="text-purple-400">return</span> <span className="text-orange-300">signals</span>
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Start Date</label>
              <input
                type="text"
                placeholder="yyyy-mm-dd"
                className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none transition-colors"
                onFocus={(e) => e.target.style.borderColor = '#00ff88'}
                onBlur={(e) => e.target.style.borderColor = '#1f2937'}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">End Date</label>
              <input
                type="text"
                placeholder="yyyy-mm-dd"
                className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none transition-colors"
                onFocus={(e) => e.target.style.borderColor = '#00ff88'}
                onBlur={(e) => e.target.style.borderColor = '#1f2937'}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Initial Capital</label>
              <input
                type="text"
                placeholder="100000"
                className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none transition-colors"
                onFocus={(e) => e.target.style.borderColor = '#00ff88'}
                onBlur={(e) => e.target.style.borderColor = '#1f2937'}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => onNavigate('dashboard')}
              className="px-8 py-4 rounded-xl font-bold transition-all"
              style={{ 
                background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
                color: '#0a0a0a',
                boxShadow: '0 0 30px rgba(0, 255, 136, 0.4)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 255, 136, 0.6)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.4)'}>
              Run Backtest
            </button>
            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold transition-colors">
              Save Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Component (keeping existing implementation but updating colors)
const Dashboard = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800/50 px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('strategyChoice')}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)', boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)' }}>
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold">QuantCore</h1>
                <p className="text-sm text-gray-400">Backtesting Dashboard</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('strategyChoice')}
              className="px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all"
              style={{ 
                backgroundColor: '#00ff88',
                color: '#0a0a0a',
                boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.6)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.4)'}
            >
              <span>+</span> New Strategy
            </button>
            <div className="text-right">
              <div className="text-xs text-gray-500">Last Updated</div>
              <div className="text-sm">Dec 21, 2025 14:32 UTC</div>
            </div>
          </div>
        </div>
      </header>

      <div className="border-b border-gray-800/50 px-8">
        <div className="flex gap-8">
          <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>Overview</TabButton>
          <TabButton active={activeTab === 'trades'} onClick={() => setActiveTab('trades')}>Trades</TabButton>
          <TabButton active={activeTab === 'strategy'} onClick={() => setActiveTab('strategy')}>Strategy</TabButton>
        </div>
      </div>

      <div className="p-8">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'trades' && <TradesTab />}
        {activeTab === 'strategy' && <StrategyTab />}
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`py-4 border-b-2 transition-colors ${active ? 'text-white' : 'border-transparent text-gray-400 hover:text-gray-300'}`}
    style={active ? { borderColor: '#00ff88', textShadow: '0 0 10px rgba(0, 255, 136, 0.3)' } : {}}
  >
    {children}
  </button>
);

const OverviewTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Total Return" value="+42.8%" change="+2.3%" positive icon={<TrendingUp />} />
        <MetricCard title="Sharpe Ratio" value="1.87" change="+0.12" positive icon={<BarChart3 />} />
        <MetricCard title="Max Drawdown" value="-12.4%" change="-1.2%" negative icon={<TrendingUp className="rotate-180" />} />
        <MetricCard title="Win Rate" value="58.3%" change="+3.1%" positive icon={<Target />} />
        <MetricCard title="Total P&L" value="$427,843" change="+$23,145" positive icon={<DollarSign />} />
        <MetricCard title="Avg Hold Time" value="3.2 days" change="-0.4d" neutral icon={<Calendar />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-900/50 rounded-xl p-6 border border-gray-800/50">
          <h3 className="text-lg font-bold mb-6">Equity Curve</h3>
          <div className="h-64 relative">
            <svg className="w-full h-full" viewBox="0 0 600 200">
              <line x1="0" y1="150" x2="600" y2="150" stroke="#374151" strokeDasharray="4" />
              <polyline
                points="0,150 50,145 100,140 150,135 200,125 250,120 300,115 350,110 400,105 450,100 500,90 550,85 600,80"
                fill="none"
                stroke="#00ff88"
                strokeWidth="2"
                style={{ filter: 'drop-shadow(0 0 4px rgba(0, 255, 136, 0.5))' }}
              />
              <polyline
                points="0,150 50,150 100,150 150,150 200,150 250,150 300,150 350,150 400,150 450,150 500,150 550,150 600,150"
                fill="none"
                stroke="#6b7280"
                strokeWidth="2"
                strokeDasharray="4"
              />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-2">
              <span>Jan 7</span>
              <span>Mar 10</span>
              <span>May 5</span>
              <span>Jul 7</span>
              <span>Sep 8</span>
              <span>Nov 10</span>
              <span>Dec 29</span>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-gray-500"></div>
              <span className="text-gray-400">Benchmark</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5" style={{ backgroundColor: '#00ff88', boxShadow: '0 0 4px rgba(0, 255, 136, 0.5)' }}></div>
              <span className="text-gray-400">Strategy</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50">
          <h3 className="text-lg font-bold mb-6">Risk Metrics</h3>
          <div className="space-y-6">
            <MetricBar label="Volatility" value="18.4%" percent={75} color="yellow" />
            <MetricBar label="Value at Risk (95%)" value="-2.3%" percent={30} color="red" />
            <MetricBar label="Beta" value="0.87" percent={87} color="green" />
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800">
            <h4 className="text-sm font-semibold mb-4">Performance Stats</h4>
            <div className="space-y-3 text-sm">
              <StatRow label="Alpha" value="0.34" />
              <StatRow label="Sortino Ratio" value="2.14" />
              <StatRow label="Calmar Ratio" value="3.45" />
              <StatRow label="Avg Win" value="+3.8%" positive />
              <StatRow label="Avg Loss" value="-1.4%" negative />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, change, positive, negative, neutral, icon }) => (
  <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50">
    <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
        {icon}
      </div>
      <span className={`text-sm px-2 py-1 rounded ${positive ? 'text-black' : negative ? 'bg-red-500/20 text-red-400' : 'bg-gray-700 text-gray-400'}`}
        style={positive ? { backgroundColor: '#00ff88', boxShadow: '0 0 10px rgba(0, 255, 136, 0.3)' } : {}}>
        {change}
      </span>
    </div>
    <div className="text-sm text-gray-400 mb-1">{title}</div>
    <div className="text-3xl font-bold">{value}</div>
  </div>
);

const MetricBar = ({ label, value, percent, color }) => {
  const colors = {
    yellow: '#eab308',
    red: '#ef4444',
    green: '#00ff88'
  };
  
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-400">{label}</span>
        <span className="font-semibold">{value}</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full" style={{ width: `${percent}%`, backgroundColor: colors[color], boxShadow: color === 'green' ? '0 0 8px rgba(0, 255, 136, 0.4)' : '' }}></div>
      </div>
    </div>
  );
};

const StatRow = ({ label, value, positive, negative }) => (
  <div className="flex justify-between">
    <span className="text-gray-400">{label}</span>
    <span className={positive ? '' : negative ? 'text-red-400' : ''}
      style={positive ? { color: '#00ff88' } : {}}>
      {value}
    </span>
  </div>
);

const TradesTab = () => {
  const trades = [
    { symbol: 'AAPL', type: 'LONG', entry: 178.23, exit: 185.92, qty: 500, pnl: 3845, return: 4.32, entryDate: '2024-12-15', exitDate: '2024-12-19', hold: '4d' },
    { symbol: 'TSLA', type: 'SHORT', entry: 245.67, exit: 238.45, qty: 300, pnl: 2166, return: 2.94, entryDate: '2024-12-14', exitDate: '2024-12-18', hold: '4d' },
    { symbol: 'NVDA', type: 'LONG', entry: 495.32, exit: 487.21, qty: 200, pnl: -1622, return: -1.64, entryDate: '2024-12-12', exitDate: '2024-12-17', hold: '5d' },
    { symbol: 'GOOGL', type: 'LONG', entry: 142.15, exit: 148.73, qty: 600, pnl: 3948, return: 4.63, entryDate: '2024-12-10', exitDate: '2024-12-16', hold: '6d' },
    { symbol: 'MSFT', type: 'LONG', entry: 371.58, exit: 378.92, qty: 400, pnl: 2936, return: 1.98, entryDate: '2024-12-09', exitDate: '2024-12-15', hold: '6d' },
    { symbol: 'META', type: 'SHORT', entry: 358.92, exit: 362.45, qty: 250, pnl: -883, return: -0.98, entryDate: '2024-12-08', exitDate: '2024-12-14', hold: '6d' },
    { symbol: 'AMD', type: 'LONG', entry: 138.67, exit: 145.32, qty: 700, pnl: 4655, return: 4.80, entryDate: '2024-12-05', exitDate: '2024-12-12', hold: '7d' },
    { symbol: 'NFLX', type: 'LONG', entry: 475.23, exit: 468.15, qty: 150, pnl: -1062, return: -1.49, entryDate: '2024-12-03', exitDate: '2024-12-10', hold: '7d' },
  ];

  return (
    <div className="bg-gray-900/50 rounded-xl border border-gray-800/50 overflow-hidden">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Trade History</h2>
          <div className="flex gap-6 text-sm">
            <span className="text-gray-400">Total Trades: <span className="text-white font-semibold">8</span></span>
            <span className="text-gray-400">Winners: <span className="font-semibold" style={{ color: '#00ff88' }}>5</span></span>
            <span className="text-gray-400">Losers: <span className="text-red-400 font-semibold">3</span></span>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800/50">
            <tr className="text-left text-sm text-gray-400">
              <th className="px-6 py-4 font-medium">Symbol</th>
              <th className="px-6 py-4 font-medium">Type</th>
              <th className="px-6 py-4 font-medium">Entry</th>
              <th className="px-6 py-4 font-medium">Exit</th>
              <th className="px-6 py-4 font-medium">Qty</th>
              <th className="px-6 py-4 font-medium">P&L</th>
              <th className="px-6 py-4 font-medium">Return</th>
              <th className="px-6 py-4 font-medium">Entry Date</th>
              <th className="px-6 py-4 font-medium">Exit Date</th>
              <th className="px-6 py-4 font-medium">Hold</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {trades.map((trade, i) => (
              <tr key={i} className="hover:bg-gray-800/30">
                <td className="px-6 py-4 font-semibold">{trade.symbol}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded text-xs font-medium ${trade.type === 'LONG' ? 'text-black' : 'bg-orange-500/20 text-orange-400'}`}
                    style={trade.type === 'LONG' ? { backgroundColor: '#00ff88', boxShadow: '0 0 8px rgba(0, 255, 136, 0.3)' } : {}}>
                    {trade.type}
                  </span>
                </td>
                <td className="px-6 py-4">${trade.entry.toFixed(2)}</td>
                <td className="px-6 py-4">${trade.exit.toFixed(2)}</td>
                <td className="px-6 py-4">{trade.qty}</td>
                <td className={`px-6 py-4 font-semibold ${trade.pnl > 0 ? '' : 'text-red-400'}`}
                  style={trade.pnl > 0 ? { color: '#00ff88' } : {}}>
                  ${trade.pnl > 0 ? '+' : ''}{trade.pnl.toLocaleString()}
                </td>
                <td className={`px-6 py-4 font-semibold ${trade.return > 0 ? '' : 'text-red-400'}`}
                  style={trade.return > 0 ? { color: '#00ff88' } : {}}>
                  {trade.return > 0 ? '+' : ''}{trade.return}%
                </td>
                <td className="px-6 py-4">{trade.entryDate}</td>
                <td className="px-6 py-4">{trade.exitDate}</td>
                <td className="px-6 py-4">{trade.hold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StrategyTab = () => {
  const [config, setConfig] = useState({
    name: 'Mean Reversion Alpha',
    asset: 'US Equities',
    startDate: '2024-01-01',
    endDate: '2024-12-21',
    capital: '1000000',
    lookback: '20',
    zScore: '2.0',
    positionSize: '5.0',
    stopLoss: '3.0',
    commission: true
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-gray-900/50 rounded-xl p-6 border border-gray-800/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Strategy Configuration</h2>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg flex items-center gap-2 font-semibold transition-all"
              style={{ backgroundColor: '#00ff88', color: '#0a0a0a', boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.6)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.4)'}>
              <Play className="w-4 h-4" /> Run Backtest
            </button>
            <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-2">
              <RotateCcw className="w-4 h-4" /> Reset
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Strategy Name</label>
              <input
                type="text"
                value={config.name}
                onChange={(e) => setConfig({...config, name: e.target.value})}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none transition-colors"
                onFocus={(e) => e.target.style.borderColor = '#00ff88'}
                onBlur={(e) => e.target.style.borderColor = '#374151'}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Asset Class</label>
              <select
                value={config.asset}
                onChange={(e) => setConfig({...config, asset: e.target.value})}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none transition-colors"
                onFocus={(e) => e.target.style.borderColor = '#00ff88'}
                onBlur={(e) => e.target.style.borderColor = '#374151'}
              >
                <option>US Equities</option>
                <option>Crypto</option>
                <option>Forex</option>
                <option>Futures</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Start Date</label>
              <input
                type="date"
                value={config.startDate}
                onChange={(e) => setConfig({...config, startDate: e.target.value})}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none transition-colors"
                onFocus={(e) => e.target.style.borderColor = '#00ff88'}
                onBlur={(e) => e.target.style.borderColor = '#374151'}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">End Date</label>
              <input
                type="date"
                value={config.endDate}
                onChange={(e) => setConfig({...config, endDate: e.target.value})}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none transition-colors"
                onFocus={(e) => e.target.style.borderColor = '#00ff88'}
                onBlur={(e) => e.target.style.borderColor = '#374151'}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Initial Capital</label>
            <input
              type="text"
              value={config.capital}
              onChange={(e) => setConfig({...config, capital: e.target.value})}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none transition-colors"
              onFocus={(e) => e.target.style.borderColor = '#00ff88'}
              onBlur={(e) => e.target.style.borderColor = '#374151'}
            />
          </div>

          <div className="pt-6 border-t border-gray-800">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Settings className="w-4 h-4" /> Strategy Parameters
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Lookback Period</label>
                <input
                  type="text"
                  value={config.lookback}
                  onChange={(e) => setConfig({...config, lookback: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none transition-colors"
                  onFocus={(e) => e.target.style.borderColor = '#00ff88'}
                  onBlur={(e) => e.target.style.borderColor = '#374151'}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Z-Score Threshold</label>
                <input
                  type="text"
                  value={config.zScore}
                  onChange={(e) => setConfig({...config, zScore: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none transition-colors"
                  onFocus={(e) => e.target.style.borderColor = '#00ff88'}
                  onBlur={(e) => e.target.style.borderColor = '#374151'}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Position Size (%)</label>
                <input
                  type="text"
                  value={config.positionSize}
                  onChange={(e) => setConfig({...config, positionSize: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none transition-colors"
                  onFocus={(e) => e.target.style.borderColor = '#00ff88'}
                  onBlur={(e) => e.target.style.borderColor = '#374151'}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Stop Loss (%)</label>
                <input
                  type="text"
                  value={config.stopLoss}
                  onChange={(e) => setConfig({...config, stopLoss: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none transition-colors"
                  onFocus={(e) => e.target.style.borderColor = '#00ff88'}
                  onBlur={(e) => e.target.style.borderColor = '#374151'}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="commission"
              checked={config.commission}
              onChange={(e) => setConfig({...config, commission: e.target.checked})}
              className="w-4 h-4"
              style={{ accentColor: '#00ff88' }}
            />
            <label htmlFor="commission" className="text-sm text-gray-400">
              Enable commission fees (0.1% per trade)
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50">
          <h3 className="text-lg font-bold mb-6">Risk Metrics</h3>
          <div className="space-y-4">
            <MetricBar label="Volatility" value="18.4%" percent={75} color="yellow" />
            <MetricBar label="Value at Risk (95%)" value="-2.3%" percent={30} color="red" />
            <MetricBar label="Beta" value="0.87" percent={87} color="green" />
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50">
          <h3 className="text-lg font-bold mb-6">Performance Stats</h3>
          <div className="space-y-3">
            <StatRow label="Alpha" value="0.34" />
            <StatRow label="Sortino Ratio" value="2.14" />
            <StatRow label="Calmar Ratio" value="3.45" />
            <StatRow label="Avg Win" value="+3.8%" positive />
            <StatRow label="Avg Loss" value="-1.4%" negative />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div>
      {currentPage === 'landing' && <LandingPage onNavigate={setCurrentPage} />}
      {currentPage === 'strategyChoice' && <StrategyChoicePage onNavigate={setCurrentPage} />}
      {currentPage === 'presetStrategies' && <PresetStrategiesPage onNavigate={setCurrentPage} />}
      {currentPage === 'customCode' && <CustomCodePage onNavigate={setCurrentPage} />}
      {currentPage === 'dashboard' && <Dashboard onNavigate={setCurrentPage} />}
    </div>
  );
};

export default App;
