import React, { useState } from 'react';
import {
  BarChart3,
  LineChart,
  Settings,
  Play,
  Home,
  Code,
  TrendingUp,
  DollarSign,
  Calendar,
  Target,
  AlertCircle,
  CheckCircle,
  Clock,
  Zap,
  Menu,
  X,
  ArrowRight,
  GitBranch,
} from 'lucide-react';

// LandingPage Component
const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-8 h-8 text-blue-500" />
          <span className="text-2xl font-bold text-white">QuantCore</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#benefits" className="text-slate-300 hover:text-white transition">Benefits</a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
        </div>
        <button
          onClick={onGetStarted}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            Backtest Trading Strategies
            <span className="text-blue-500"> Like Never Before</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            QuantCore empowers traders and developers to build, test, and optimize trading strategies with advanced backtesting tools and real-time analytics.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition transform hover:scale-105"
          >
            Start Backtesting <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Features Grid */}
        <div id="features" className="grid md:grid-cols-3 gap-6 mt-20">
          {[
            {
              icon: LineChart,
              title: 'Real-time Analytics',
              desc: 'Monitor strategy performance with live charts and metrics'
            },
            {
              icon: Code,
              title: 'Custom Code Support',
              desc: 'Write custom strategies with Python or JavaScript'
            },
            {
              icon: TrendingUp,
              title: 'Preset Strategies',
              desc: 'Choose from battle-tested trading strategies'
            },
          ].map((feature, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition">
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div id="benefits" className="mt-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose QuantCore?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Powerful backtesting engine with historical data',
              'Comprehensive performance metrics and analytics',
              'Support for multiple asset classes',
              'Risk management and portfolio optimization',
              'Easy strategy deployment and monitoring',
              'Community-driven strategy marketplace'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-slate-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// StrategyChoicePage Component
const StrategyChoicePage = ({ onSelectPreset, onSelectCustom, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition mb-8"
        >
          <ArrowRight className="w-5 h-5 rotate-180" />
          Back to Home
        </button>
        <h1 className="text-4xl font-bold text-white mb-4">Choose Your Strategy Path</h1>
        <p className="text-xl text-slate-300">Select between preset strategies or create your custom trading logic</p>
      </div>

      {/* Strategy Options */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Preset Strategies Card */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-500/50 transition cursor-pointer" onClick={onSelectPreset}>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-500/20 p-4 rounded-lg">
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
            <h2 className="text-2xl font-semibold text-white">Preset Strategies</h2>
          </div>
          <p className="text-slate-400 mb-8">
            Choose from our collection of tested and optimized trading strategies. Perfect for getting started quickly.
          </p>
          <ul className="space-y-3 mb-8">
            {['Moving Average Crossover', 'RSI Momentum', 'Bollinger Bands', 'Trend Following'].map((strategy, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-green-500" />
                {strategy}
              </li>
            ))}
          </ul>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
            Explore Presets <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Custom Code Card */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-purple-500/50 transition cursor-pointer" onClick={onSelectCustom}>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-500/20 p-4 rounded-lg">
              <Code className="w-8 h-8 text-purple-500" />
            </div>
            <h2 className="text-2xl font-semibold text-white">Custom Code</h2>
          </div>
          <p className="text-slate-400 mb-8">
            Write your own trading strategy using Python or JavaScript. Full flexibility and control over your logic.
          </p>
          <ul className="space-y-3 mb-8">
            {['Full Programming Control', 'Multiple Language Support', 'Advanced Indicators', 'Real-time Backtesting'].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-300">
                <Zap className="w-5 h-5 text-yellow-500" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
            Create Strategy <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// PresetStrategiesPage Component
const PresetStrategiesPage = ({ onSelectStrategy, onBack }) => {
  const presets = [
    {
      name: 'Moving Average Crossover',
      description: 'Golden cross strategy using 50 and 200-day moving averages',
      riskLevel: 'Medium',
      winRate: '58%',
      icon: LineChart
    },
    {
      name: 'RSI Momentum',
      description: 'Trades based on RSI oversold/overbought conditions',
      riskLevel: 'Low',
      winRate: '62%',
      icon: TrendingUp
    },
    {
      name: 'Bollinger Bands',
      description: 'Volatility-based strategy using Bollinger Bands',
      riskLevel: 'Medium',
      winRate: '55%',
      icon: BarChart3
    },
    {
      name: 'Trend Following',
      description: 'Follows market trends using multiple timeframe analysis',
      riskLevel: 'High',
      winRate: '51%',
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition mb-8"
        >
          <ArrowRight className="w-5 h-5 rotate-180" />
          Back to Strategy Choice
        </button>

        <h1 className="text-4xl font-bold text-white mb-4">Preset Strategies</h1>
        <p className="text-xl text-slate-300 mb-12">Select a strategy to backtest</p>

        <div className="grid md:grid-cols-2 gap-6">
          {presets.map((preset, idx) => {
            const Icon = preset.icon;
            return (
              <div
                key={idx}
                onClick={() => onSelectStrategy(preset)}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-8 h-8 text-blue-500" />
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    preset.riskLevel === 'Low' ? 'bg-green-500/20 text-green-300' :
                    preset.riskLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {preset.riskLevel} Risk
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{preset.name}</h3>
                <p className="text-slate-400 mb-4">{preset.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Win Rate: <span className="text-green-400">{preset.winRate}</span></span>
                  <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// CustomCodePage Component
const CustomCodePage = ({ onSubmitStrategy, onBack }) => {
  const [code, setCode] = useState(`
// QuantCore Custom Strategy Template
class MyStrategy {
  constructor() {
    this.name = "My Strategy";
    this.description = "Custom trading strategy";
  }

  // Initialize parameters
  init(data) {
    this.data = data;
  }

  // Generate signals
  generateSignals() {
    const signals = [];
    // Your trading logic here
    return signals;
  }

  // Manage positions
  managePositions(positions) {
    // Position management logic
    return positions;
  }
}

module.exports = MyStrategy;
  `);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition mb-8"
        >
          <ArrowRight className="w-5 h-5 rotate-180" />
          Back to Strategy Choice
        </button>

        <h1 className="text-4xl font-bold text-white mb-2">Create Custom Strategy</h1>
        <p className="text-slate-300 mb-8">Write your trading logic in JavaScript or Python</p>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Code Editor */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
              <div className="bg-slate-900/50 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-blue-500" />
                  <span className="text-white font-semibold">Strategy Code</span>
                </div>
                <div className="flex gap-2">
                  <select className="bg-slate-700 text-white px-3 py-1 rounded text-sm border border-slate-600">
                    <option>JavaScript</option>
                    <option>Python</option>
                  </select>
                </div>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-96 bg-slate-900 text-slate-100 p-4 font-mono text-sm resize-none focus:outline-none"
                style={{ scrollbarWidth: 'thin' }}
              />
            </div>
          </div>

          {/* Configuration Panel */}
          <div className="space-y-4">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Configuration
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-slate-300 text-sm font-semibold mb-2">Strategy Name</label>
                  <input
                    type="text"
                    placeholder="My Strategy"
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-semibold mb-2">Asset Pair</label>
                  <select className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500">
                    <option>BTC/USD</option>
                    <option>ETH/USD</option>
                    <option>AAPL</option>
                    <option>GOOGL</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-semibold mb-2">Timeframe</label>
                  <select className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500">
                    <option>1m</option>
                    <option>5m</option>
                    <option>1h</option>
                    <option>1d</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Backtest Settings
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <label className="block text-slate-300 font-semibold mb-2">Initial Capital</label>
                  <input
                    type="number"
                    placeholder="10000"
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-2">Risk per Trade (%)</label>
                  <input
                    type="number"
                    placeholder="2"
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => onSubmitStrategy({ code, name: 'Custom Strategy' })}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Run Backtest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = ({ strategy, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const metrics = {
    totalReturn: '24.5%',
    winRate: '58%',
    sharpeRatio: '1.85',
    maxDrawdown: '-12.3%',
    totalTrades: 142,
    profitableTrades: 82,
    avgWin: '$850',
    avgLoss: '-$420'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition mb-6"
        >
          <ArrowRight className="w-5 h-5 rotate-180" />
          Back
        </button>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              {strategy?.name || 'Strategy'} Results
            </h1>
            <p className="text-slate-300">Comprehensive backtesting analysis and performance metrics</p>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition">
            <Play className="w-5 h-5" />
            Run Live
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 border-b border-slate-700">
          {['overview', 'trades', 'statistics', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-semibold transition ${
                activeTab === tab
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: 'Total Return', value: metrics.totalReturn, icon: TrendingUp, color: 'text-green-500' },
                { label: 'Win Rate', value: metrics.winRate, icon: Target, color: 'text-blue-500' },
                { label: 'Sharpe Ratio', value: metrics.sharpeRatio, icon: BarChart3, color: 'text-purple-500' },
                { label: 'Max Drawdown', value: metrics.maxDrawdown, icon: AlertCircle, color: 'text-red-500' }
              ].map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 text-sm">{metric.label}</span>
                      <Icon className={`w-5 h-5 ${metric.color}`} />
                    </div>
                    <p className={`text-3xl font-bold ${metric.color}`}>{metric.value}</p>
                  </div>
                );
              })}
            </div>

            {/* Performance Chart */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <LineChart className="w-5 h-5" />
                Portfolio Value Over Time
              </h3>
              <div className="h-64 bg-slate-900/50 rounded flex items-center justify-center text-slate-500">
                <div className="text-center">
                  <LineChart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Interactive Chart - Starting at $10,000</p>
                  <p className="text-sm">Ending value: $12,450</p>
                </div>
              </div>
            </div>

            {/* Trade Statistics */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Trade Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Total Trades</span>
                    <span className="text-white font-semibold">{metrics.totalTrades}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Profitable Trades</span>
                    <span className="text-green-400 font-semibold">{metrics.profitableTrades}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Losing Trades</span>
                    <span className="text-red-400 font-semibold">{metrics.totalTrades - metrics.profitableTrades}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-700">
                    <span className="text-slate-300">Win Rate</span>
                    <span className="text-blue-400 font-semibold">{metrics.winRate}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Profit & Loss</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Average Win</span>
                    <span className="text-green-400 font-semibold">{metrics.avgWin}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Average Loss</span>
                    <span className="text-red-400 font-semibold">{metrics.avgLoss}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-700">
                    <span className="text-slate-300">Profit Factor</span>
                    <span className="text-blue-400 font-semibold">1.92</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'trades' && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Trades</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-slate-400">Entry Time</th>
                    <th className="text-left py-3 px-4 text-slate-400">Entry Price</th>
                    <th className="text-left py-3 px-4 text-slate-400">Exit Time</th>
                    <th className="text-left py-3 px-4 text-slate-400">Exit Price</th>
                    <th className="text-left py-3 px-4 text-slate-400">P&L</th>
                    <th className="text-left py-3 px-4 text-slate-400">Return %</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, idx) => (
                    <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition">
                      <td className="py-3 px-4 text-slate-300">2025-12-20 10:30</td>
                      <td className="py-3 px-4 text-slate-300">$45,230</td>
                      <td className="py-3 px-4 text-slate-300">2025-12-20 14:15</td>
                      <td className="py-3 px-4 text-slate-300">$46,150</td>
                      <td className="py-3 px-4 text-green-400">+$920</td>
                      <td className="py-3 px-4 text-green-400">+2.03%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'statistics' && (
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Risk Metrics', items: ['Sharpe Ratio: 1.85', 'Sortino Ratio: 2.43', 'Calmar Ratio: 1.99', 'Max Drawdown: -12.3%'] },
              { title: 'Performance Metrics', items: ['Total Return: 24.5%', 'Annual Return: 18.2%', 'Monthly Return: 1.8%', 'Best Day: +5.2%'] },
              { title: 'Trade Analysis', items: ['Win Rate: 58%', 'Profit Factor: 1.92', 'Recovery Factor: 1.88', 'Payoff Ratio: 2.02'] },
              { title: 'Correlation Analysis', items: ['Correlation to Market: 0.65', 'Beta: 1.12', 'Alpha: 0.45', 'R-squared: 0.58'] }
            ].map((section, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-center text-slate-300">
                      <span>{item.split(':')[0]}</span>
                      <span className="text-blue-400 font-semibold">{item.split(':')[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 max-w-2xl">
            <h3 className="text-lg font-semibold text-white mb-6">Strategy Settings</h3>
            <div className="space-y-4">
              {[
                { label: 'Strategy Name', value: strategy?.name || 'Custom Strategy' },
                { label: 'Asset Pair', value: 'BTC/USD' },
                { label: 'Timeframe', value: '1h' },
                { label: 'Initial Capital', value: '$10,000' },
                { label: 'Risk per Trade', value: '2%' },
                { label: 'Max Positions', value: '5' }
              ].map((setting, idx) => (
                <div key={idx} className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-slate-300">{setting.label}</span>
                  <span className="text-white font-semibold">{setting.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition">
                Edit Settings
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                Export Results
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  const handlePageChange = (page, strategy = null) => {
    setCurrentPage(page);
    if (strategy) {
      setSelectedStrategy(strategy);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      {currentPage === 'landing' && (
        <LandingPage onGetStarted={() => handlePageChange('strategyChoice')} />
      )}

      {currentPage === 'strategyChoice' && (
        <StrategyChoicePage
          onSelectPreset={() => handlePageChange('presetStrategies')}
          onSelectCustom={() => handlePageChange('customCode')}
          onBack={() => handlePageChange('landing')}
        />
      )}

      {currentPage === 'presetStrategies' && (
        <PresetStrategiesPage
          onSelectStrategy={(strategy) => handlePageChange('dashboard', strategy)}
          onBack={() => handlePageChange('strategyChoice')}
        />
      )}

      {currentPage === 'customCode' && (
        <CustomCodePage
          onSubmitStrategy={(strategy) => handlePageChange('dashboard', strategy)}
          onBack={() => handlePageChange('strategyChoice')}
        />
      )}

      {currentPage === 'dashboard' && (
        <Dashboard
          strategy={selectedStrategy}
          onBack={() => handlePageChange('strategyChoice')}
        />
      )}
    </div>
  );
}