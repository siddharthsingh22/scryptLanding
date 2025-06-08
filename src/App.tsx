import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Play, 
  Share2, 
  Zap, 
  Shield, 
  GitBranch, 
  Terminal,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Users,
  Clock,
  Bot,
  Cpu,
  Database,
  FileCode,
  Layers
} from 'lucide-react';

function App() {
  const [activeLanguage, setActiveLanguage] = useState(0);

  const languages = [
    { name: 'Python', icon: <FileCode className="w-6 h-6" />, color: 'text-blue-600' },
    { name: 'JavaScript', icon: <Cpu className="w-6 h-6" />, color: 'text-yellow-600' },
    { name: 'Bash', icon: <Terminal className="w-6 h-6" />, color: 'text-green-600' },
    { name: 'Go', icon: <Zap className="w-6 h-6" />, color: 'text-cyan-600' },
    { name: 'Rust', icon: <Shield className="w-6 h-6" />, color: 'text-orange-600' },
    { name: 'Java', icon: <Database className="w-6 h-6" />, color: 'text-red-600' },
    { name: 'C#', icon: <Layers className="w-6 h-6" />, color: 'text-purple-600' },
    { name: 'Ruby', icon: <Code2 className="w-6 h-6" />, color: 'text-pink-600' },
    { name: 'Perl', icon: <Globe className="w-6 h-6" />, color: 'text-indigo-600' },
    { name: 'Node.js', icon: <Play className="w-6 h-6" />, color: 'text-green-700' }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Execution",
      description: "Run scripts in any language instantly without setup or configuration. Zero environment headaches, maximum productivity.",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Universal Sharing",
      description: "Share scripts across teams and platforms with a single link. Collaborate seamlessly with built-in version control.",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Scripts",
      description: "Generate, optimize, and debug scripts with built-in AI assistance. Let AI write your scripts while you focus on results.",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Enterprise Version Control",
      description: "Professional-grade versioning and branching for all your scripts with full history tracking and team collaboration.",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with encrypted execution environments, comprehensive audit logs, and enterprise compliance.",
      color: "bg-red-50 border-red-200"
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Advanced Logging",
      description: "Real-time execution logs, performance metrics, and debugging tools for every script run with detailed analytics.",
      color: "bg-indigo-50 border-indigo-200"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLanguage((prev) => (prev + 1) % languages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg rotate-45 opacity-50 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-70"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg rotate-12 opacity-60"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-50/80 to-white/80 backdrop-blur-sm">
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto relative z-10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center shadow-lg">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-gray-900">Scrypt</span>
          </div>
          <button className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
            Get Early Access
          </button>
        </nav>

        <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium mb-8 text-gray-700 shadow-sm">
              <Sparkles className="w-4 h-4 mr-2 text-orange-500" />
              Coming Soon - Revolutionary Script Runtime
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 relative">
              Scrypt
              <div className="absolute -top-4 -right-8 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-ping"></div>
            </h1>

            <p className="text-2xl md:text-3xl font-medium mb-8 text-gray-600">
              The Universal Runtime for Every Script
            </p>

            <p className="text-xl text-gray-500 mb-12 max-w-4xl mx-auto leading-relaxed">
              Instantly test, share, and execute scripts across ANY LANGUAGE – Python, Bash, Perl, Node.js, Ruby, Go, Rust, Java, C#, and everything in between. AI-built scripts, zero environment headaches. Enterprise-grade logging & version control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold text-lg transition-all duration-200 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
                Join Waitlist
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Language Showcase */}
      <div className="py-20 bg-white/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Support for Every Language</h2>
            <p className="text-xl text-gray-600">Write once, run anywhere. No setup required.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {languages.map((lang, index) => (
              <div 
                key={lang.name}
                className={`relative p-4 rounded-xl border-2 transition-all duration-500 bg-white/80 backdrop-blur-sm ${
                  index === activeLanguage 
                    ? 'border-gray-900 shadow-lg scale-105 bg-white' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="text-center">
                  <div className={`mb-2 flex justify-center ${lang.color}`}>
                    {lang.icon}
                  </div>
                  <div className="font-medium text-sm text-gray-700">{lang.name}</div>
                </div>
                {index === activeLanguage && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section - Modern Layout */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Built for Modern Development</h2>
            <p className="text-xl text-gray-600">Everything you need to run, share, and manage scripts at scale</p>
          </div>

          {/* Feature Cards in Modern Layout */}
          <div className="space-y-16">
            {/* Row 1 */}
            <div className="grid md:grid-cols-3 gap-8">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className={`group p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl transform hover:scale-105 ${feature.color}`}>
                  <div className="text-gray-900 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-3 gap-8">
              {features.slice(3, 6).map((feature, index) => (
                <div key={index + 3} className={`group p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl transform hover:scale-105 ${feature.color}`}>
                  <div className="text-gray-900 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section with Headline */}
      <div className="py-20 bg-white/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Powerful Performance</h2>
            <p className="text-xl text-gray-600">Built for scale, designed for speed</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg">
              <div className="text-5xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600 text-lg font-medium">Programming Languages</div>
            </div>
            <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg">
              <div className="text-5xl font-bold text-gray-900 mb-2">0ms</div>
              <div className="text-gray-600 text-lg font-medium">Setup Time Required</div>
            </div>
            <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg">
              <div className="text-5xl font-bold text-gray-900 mb-2">∞</div>
              <div className="text-gray-600 text-lg font-medium">Concurrent Executions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50/50 to-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Perfect for Every Use Case</h2>
            <p className="text-xl text-gray-600">From quick prototypes to enterprise automation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Rapid Prototyping</h3>
              <p className="text-gray-600 text-sm">Test ideas instantly without environment setup</p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Team Collaboration</h3>
              <p className="text-gray-600 text-sm">Share and collaborate on scripts seamlessly</p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">AI Automation</h3>
              <p className="text-gray-600 text-sm">Let AI generate and optimize your scripts</p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Enterprise Ready</h3>
              <p className="text-gray-600 text-sm">Security and compliance for large organizations</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900 relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Workflow?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Be among the first to experience the future of script execution. Join our exclusive early access program.
          </p>

          <div className="flex justify-center">
            <button className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Join Early Access
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            No credit card required • Early access starting Q2 2024
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center shadow-lg">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">Scrypt</span>
            </div>
            <div className="text-gray-500 text-sm">
              © 2024 Scrypt. All rights reserved. • The Universal Runtime for Every Script
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
