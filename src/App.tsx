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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white text-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Main background gradient with animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white/0 to-purple-50/20 bg-[length:400%_400%] animate-gradient-shift"></div>

        {/* Floating blob shapes with organic animations */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-100/40 to-purple-100/40 opacity-60 animate-blob"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-to-br from-green-100/30 to-blue-100/30 opacity-40 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-36 h-36 bg-gradient-to-br from-yellow-100/30 to-orange-100/30 opacity-50 animate-blob" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-gradient-to-br from-purple-100/30 to-pink-100/30 opacity-40 animate-blob" style={{ animationDelay: '3s' }}></div>

        {/* Floating geometric shapes with enhanced animations */}
        <div className="absolute top-60 left-1/3 w-20 h-20 bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-full opacity-50 animate-float-x" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-60 right-1/4 w-16 h-16 bg-gradient-to-br from-pink-100/40 to-red-100/40 rounded-lg rotate-45 opacity-40 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-100/30 to-blue-100/30 rounded-full opacity-30 animate-float-x" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-14 h-14 bg-gradient-to-br from-teal-100/30 to-green-100/30 rounded-lg rotate-12 opacity-40 animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Rotating elements with pulse effect */}
        <div className="absolute top-1/4 right-1/3 w-48 h-48 border border-blue-100/40 rounded-full opacity-40 animate-rotate-slow animate-pulse-soft"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 border border-purple-100/40 rounded-full opacity-30 animate-rotate-reverse"></div>
        <div className="absolute top-2/3 right-1/2 w-32 h-32 border border-green-100/30 rounded-full opacity-20 animate-rotate-slow" style={{ animationDuration: '25s' }}></div>

        {/* Grid pattern with subtle animation */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* Wave elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-blue-50/20 via-purple-50/20 to-pink-50/20 opacity-30 animate-wave"></div>
        <div className="absolute bottom-10 left-0 right-0 h-12 bg-gradient-to-r from-green-50/20 via-blue-50/20 to-indigo-50/20 opacity-20 animate-wave" style={{ animationDelay: '2s' }}></div>

        {/* Subtle shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-blue-50/5 to-white/10 bg-[length:200%_200%] animate-shimmer"></div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-50/80 to-white/80 backdrop-blur-sm">
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto relative z-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center shadow-lg">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-gray-900">Scrypt</span>
          </div>
          <button
              onClick={() => {
                window.typeformEmbed.makePopup('https://form.typeform.com/to/X7lTdcq4', {
                  mode: 'drawer_right',
                  autoClose: 0,
                  hideHeaders: true,
                  hideFooters: true,
                }).open();
              }}
              className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
            Get Early Access
          </button>
        </nav>

        <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium mb-8 text-gray-700 shadow-sm opacity-0 animate-slide-in-right" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <Sparkles className="w-4 h-4 mr-2 text-orange-500 animate-pulse" />
              Coming Soon - Revolutionary Script Runtime
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 relative opacity-0 animate-scale-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              Scrypt
              <div className="absolute -top-4 -right-8 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-ping-slow"></div>
              <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-15 animate-ping-slow" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-25 animate-ping-slow" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute -top-10 left-10 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-10 animate-ping-slow" style={{ animationDelay: '1.2s' }}></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full opacity-30 animate-ping-slow" style={{ animationDelay: '2.1s' }}></div>
            </h1>

            <p className="text-2xl md:text-3xl font-medium mb-8 text-gray-600 opacity-0 animate-slide-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              Press Enter. It Runs. Build, Secure & Fire Scripts in Any Language.
            </p>

            <p className="text-xl text-gray-500 mb-12 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              Instantly test, share, and execute scripts across ANY LANGUAGE – Python, Bash, Perl, Node.js, Ruby, Go, Rust, Java, C#, and everything in between. AI-built scripts, zero environment headaches. Enterprise-grade logging & version control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-slide-up" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
              <button
                  onClick={() => {
                    window.typeformEmbed.makePopup('https://form.typeform.com/to/X7lTdcq4', {
                      mode: 'drawer_right',
                      autoClose: 0,
                      hideHeaders: true,
                      hideFooters: true,
                    }).open();
                  }}
                  className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold text-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 hover:translate-y-[-3px]">
                Join Waitlist
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Language Showcase */}
      <div className="py-20 bg-white/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 opacity-0 animate-fade-in relative" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="absolute -top-6 right-1/4 w-7 h-7 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-20 animate-ping-slow" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute top-10 left-1/5 w-9 h-9 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-15 animate-ping-slow" style={{ animationDelay: '1.8s' }}></div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Support for Every Language</h2>
            <p className="text-xl text-gray-600">Write once, run anywhere. No setup required.</p>
            <div className="absolute bottom-0 left-1/3 w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-15 animate-ping-slow" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute -bottom-8 right-1/3 w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-25 animate-ping-slow" style={{ animationDelay: '0.9s' }}></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {languages.map((lang, index) => (
              <div 
                key={lang.name}
                className={`relative p-4 rounded-xl border-2 transition-all duration-500 bg-white/80 backdrop-blur-sm opacity-0 animate-scale-in ${
                  index === activeLanguage 
                    ? 'border-gray-900 shadow-lg scale-105 bg-white' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md hover:translate-y-[-5px]'
                }`}
                style={{ 
                  animationDelay: `${0.3 + index * 0.1}s`, 
                  animationFillMode: 'forwards',
                  transitionProperty: 'all',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDuration: '300ms'
                }}
              >
                <div className="text-center">
                  <div className={`mb-2 flex justify-center ${lang.color} ${index === activeLanguage ? 'animate-bounce' : ''}`}>
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

      {/* Features Section - Modern 3D Card Layout */}
      <div className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(72,149,239,0.08),transparent_40%)]"></div>
        <div className="absolute w-full h-full opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/5 to-teal-400/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 opacity-0 animate-fade-in relative" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="absolute -top-8 left-1/4 w-9 h-9 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-ping-slow" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute -top-12 right-1/3 w-14 h-14 bg-gradient-to-r from-rose-400 to-red-500 rounded-full opacity-10 animate-ping-slow" style={{ animationDelay: '2.3s' }}></div>
            <h2 className="text-5xl font-bold mb-4 text-gray-900 relative bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
              Built for Modern Development
              <div className="absolute top-1/2 -right-10 w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full opacity-15 animate-ping-slow" style={{ animationDelay: '1.7s' }}></div>
              <div className="absolute -bottom-6 left-1/4 w-4 h-4 bg-gradient-to-r from-lime-400 to-green-500 rounded-full opacity-25 animate-ping-slow" style={{ animationDelay: '1.1s' }}></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to run, share, and manage scripts at scale</p>
            <div className="absolute -bottom-10 right-1/5 w-7 h-7 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-15 animate-ping-slow" style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* 3D Feature Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            {features.map((feature, index) => {
              // Generate unique gradient for each card
              const gradients = [
                'from-blue-500 to-purple-500',
                'from-green-500 to-teal-500',
                'from-purple-500 to-pink-500',
                'from-amber-500 to-orange-500',
                'from-cyan-500 to-blue-500',
                'from-rose-500 to-red-500'
              ];

              const gradient = gradients[index % gradients.length];

              return (
                <div 
                  key={index}
                  className="group opacity-0 animate-scale-in transform-gpu"
                  style={{ 
                    animationDelay: `${0.2 + index * 0.1}s`, 
                    animationFillMode: 'forwards',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div 
                    className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-500 group-hover:shadow-2xl transform-gpu group-hover:scale-[1.02] border border-gray-100"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      transform: 'rotateX(2deg) rotateY(2deg)',
                    }}
                  >
                    {/* Gradient top accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradient}`}></div>

                    {/* Card content */}
                    <div className="p-8">
                      {/* Icon with 3D effect */}
                      <div 
                        className="mb-6 relative transform-gpu transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
                      >
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                          <div className="text-white">
                            {feature.icon}
                          </div>
                        </div>

                        {/* Shadow element */}
                        <div className="absolute -bottom-2 left-1/2 w-12 h-3 bg-black/10 rounded-full blur-md transform -translate-x-1/2"></div>
                      </div>

                      {/* Text content with 3D effect */}
                      <div style={{ transformStyle: 'preserve-3d', transform: 'translateZ(10px)' }}>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>

                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.15] pointer-events-none"></div>

                    {/* Glow effect on hover */}
                    <div className="absolute -inset-px bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating decorative elements */}
          <div className="absolute top-1/4 right-10 w-24 h-24 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full opacity-70 animate-float hidden md:block"></div>
          <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-gradient-to-r from-green-100/30 to-teal-100/30 rounded-full opacity-60 animate-float hidden md:block" style={{ animationDelay: '1.5s' }}></div>

          {/* 3D floating cube */}
          <div className="absolute bottom-20 right-20 opacity-30 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
            <div className="w-16 h-16 relative transform-gpu animate-spin-3d" style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute inset-0 border-2 border-blue-200/50 transform-gpu" style={{ transform: 'rotateX(0deg) translateZ(8px)', backfaceVisibility: 'hidden' }}></div>
              <div className="absolute inset-0 border-2 border-blue-200/50 transform-gpu" style={{ transform: 'rotateX(180deg) translateZ(8px)', backfaceVisibility: 'hidden' }}></div>
              <div className="absolute inset-0 border-2 border-blue-200/50 transform-gpu" style={{ transform: 'rotateY(0deg) translateZ(8px)', backfaceVisibility: 'hidden' }}></div>
              <div className="absolute inset-0 border-2 border-blue-200/50 transform-gpu" style={{ transform: 'rotateY(180deg) translateZ(8px)', backfaceVisibility: 'hidden' }}></div>
              <div className="absolute inset-0 border-2 border-blue-200/50 transform-gpu" style={{ transform: 'rotateY(90deg) translateZ(8px)', backfaceVisibility: 'hidden' }}></div>
              <div className="absolute inset-0 border-2 border-blue-200/50 transform-gpu" style={{ transform: 'rotateY(-90deg) translateZ(8px)', backfaceVisibility: 'hidden' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section with Headline */}
      <div className="py-20 bg-white/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 opacity-0 animate-fade-in relative" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="absolute -top-5 -left-10 w-7 h-7 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-25 animate-ping-slow" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-0 right-1/5 w-13 h-13 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full opacity-10 animate-ping-slow" style={{ animationDelay: '1.9s' }}></div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Powerful Performance</h2>
            <p className="text-xl text-gray-600">Built for scale, designed for speed</p>
            <div className="absolute -bottom-4 right-1/4 w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20 animate-ping-slow" style={{ animationDelay: '1.3s' }}></div>
            <div className="absolute -bottom-8 left-1/3 w-4 h-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-full opacity-30 animate-ping-slow" style={{ animationDelay: '0.8s' }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div 
              className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg opacity-0 animate-scale-in hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-blue-200"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <div className="text-5xl font-bold text-gray-900 mb-2 animate-float" style={{ animationDelay: '0.8s' }}>20+</div>
              <div className="text-gray-600 text-lg font-medium">Programming Languages</div>
            </div>
            <div 
              className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg opacity-0 animate-scale-in hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-green-200"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              <div className="text-5xl font-bold text-gray-900 mb-2 animate-float" style={{ animationDelay: '1s' }}>0ms</div>
              <div className="text-gray-600 text-lg font-medium">Setup Time Required</div>
            </div>
            <div 
              className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg opacity-0 animate-scale-in hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-purple-200"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
            >
              <div className="text-5xl font-bold text-gray-900 mb-2 animate-float" style={{ animationDelay: '1.2s' }}>∞</div>
              <div className="text-gray-600 text-lg font-medium">Concurrent Executions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50/50 to-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 opacity-0 animate-fade-in relative" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="absolute -top-6 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-15 animate-ping-slow" style={{ animationDelay: '1.1s' }}></div>
            <div className="absolute top-1/2 left-10 w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full opacity-10 animate-ping-slow" style={{ animationDelay: '2.4s' }}></div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 relative">
              Perfect for Every Use Case
              <div className="absolute -bottom-3 left-1/3 w-5 h-5 bg-gradient-to-r from-teal-400 to-green-500 rounded-full opacity-20 animate-ping-slow" style={{ animationDelay: '0.6s' }}></div>
              <div className="absolute top-0 right-1/4 w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-25 animate-ping-slow" style={{ animationDelay: '1.7s' }}></div>
            </h2>
            <p className="text-xl text-gray-600">From quick prototypes to enterprise automation</p>
            <div className="absolute -bottom-6 right-1/3 w-7 h-7 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full opacity-15 animate-ping-slow" style={{ animationDelay: '0.3s' }}></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              className="p-6 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-blue-300 opacity-0 animate-slide-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Rapid Prototyping</h3>
              <p className="text-gray-600 text-sm">Test ideas instantly without environment setup</p>
            </div>

            <div 
              className="p-6 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-green-300 opacity-0 animate-slide-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Team Collaboration</h3>
              <p className="text-gray-600 text-sm">Share and collaborate on scripts seamlessly</p>
            </div>

            <div 
              className="p-6 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-purple-300 opacity-0 animate-slide-up"
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                <Bot className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">AI Automation</h3>
              <p className="text-gray-600 text-sm">Let AI generate and optimize your scripts</p>
            </div>

            <div 
              className="p-6 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-orange-300 opacity-0 animate-slide-up"
              style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Enterprise Ready</h3>
              <p className="text-gray-600 text-sm">Security and compliance for large organizations</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Background animation elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full opacity-30 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

          {/* Pinging bubbles */}
          <div className="absolute top-20 right-20 w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full opacity-30 animate-ping-slow" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute bottom-40 left-40 w-8 h-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full opacity-25 animate-ping-slow" style={{ animationDelay: '1.6s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full opacity-20 animate-ping-slow" style={{ animationDelay: '2.2s' }}></div>
          <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-gradient-to-r from-amber-500/15 to-orange-500/15 rounded-full opacity-20 animate-ping-slow" style={{ animationDelay: '1.9s' }}></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-rose-500/15 to-red-500/15 rounded-full opacity-25 animate-ping-slow" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-40 left-1/2 w-5 h-5 bg-gradient-to-r from-indigo-500/25 to-violet-500/25 rounded-full opacity-30 animate-ping-slow" style={{ animationDelay: '1.3s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-white opacity-0 animate-scale-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl mb-8 text-gray-300 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Be among the first to experience the future of script execution. Join our exclusive early access program.
          </p>

          <div className="flex justify-center opacity-0 animate-slide-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <button
                onClick={() => {
                  window.typeformEmbed.makePopup('https://form.typeform.com/to/X7lTdcq4', {
                    mode: 'drawer_right',
                    autoClose: 0,
                    hideHeaders: true,
                    hideFooters: true,
                  }).open();
                }}
                className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:translate-y-[-3px] group">
              Join Early Access
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-6 opacity-0 animate-fade-in" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
            No credit card required • Early access starting Q4 2025
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center opacity-0 animate-fade-in relative" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="absolute -top-8 left-10 w-7 h-7 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full opacity-15 animate-ping-slow" style={{ animationDelay: '0.9s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-11 h-11 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full opacity-10 animate-ping-slow" style={{ animationDelay: '1.5s' }}></div>
            <div className="flex items-center space-x-3 mb-4 md:mb-0 hover:scale-105 transition-transform duration-300 relative">
              <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center shadow-lg group">
                <Code2 className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <span className="font-bold text-xl text-gray-900">Scrypt</span>
              <div className="absolute -bottom-4 -right-6 w-5 h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-ping-slow" style={{ animationDelay: '1.8s' }}></div>
              <div className="absolute top-0 -left-4 w-3 h-3 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full opacity-25 animate-ping-slow" style={{ animationDelay: '0.6s' }}></div>
            </div>
            <div className="text-gray-500 text-sm relative">
              © 2024 Scrypt. All rights reserved. • The Universal Scripting Platform
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full opacity-20 animate-ping-slow" style={{ animationDelay: '2.5s' }}></div>
              <div className="absolute -bottom-4 left-1/4 w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full opacity-15 animate-ping-slow" style={{ animationDelay: '2.1s' }}></div>
            </div>
          </div>

          {/* Subtle animated line */}
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-8 opacity-0 animate-shimmer" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
