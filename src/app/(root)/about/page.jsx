"use client";
import { useState, useEffect } from "react";

const highlights = [
  { text: "Self-taught", color: "from-blue-500 to-purple-600" },
  { text: "Full-stack Developer", color: "from-green-500 to-teal-600" },
  { text: "Information Technology", color: "from-orange-500 to-red-600" },
  { text: "Agency", color: "from-purple-500 to-pink-600" },
  { text: "Open-source", color: "from-indigo-500 to-blue-600" }
];

const stats = [
  { label: "Years Learning", value: "3+", icon: "📚" },
  { label: "Technologies", value: "15+", icon: "⚡" },
  { label: "Projects", value: "50+", icon: "🚀" },
  { label: "Open Source", value: "Active", icon: "💡" }
];

const journey = [
  {
    phase: "Discovery",
    title: "Self-taught Journey Begins",
    description: "Started my coding adventure with curiosity and determination",
    color: "from-blue-400 to-blue-600"
  },
  {
    phase: "Growth",
    title: "Full-stack Development",
    description: "Mastered both frontend and backend technologies",
    color: "from-green-400 to-green-600"
  },
  {
    phase: "Skills",
    title: "Technology",
    description: "JavaScript, React, Next.js, Node.js, Tailwind CSS, Flutter, AI, Offline-first, REST APIs, Git, Firebase, MongoDB, Express.js, Python, and more.",
    color: "from-purple-400 to-purple-600"
  },
  {
    phase: "Innovation",
    title: "Startup Launch",
    description: "I am currently working as a web & app developer, game UI designer, and graphics designer.",
    color: "from-orange-400 to-orange-600"
  }
];

export default function AboutPage() {
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-500/20"></div>
        <div className="relative mx-8 md:mx-20 lg:mx-24 pt-16 pb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6">
                About Me
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8 rounded-full"></div>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hi, I'm{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-2xl">
                    Abdul Mueed
                  </span>
                </p>
                
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  A passionate developer who believes in the power of continuous learning 
                  and turning innovative ideas into reality through code.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-8 md:mx-20 lg:mx-24 py-16">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            My Story
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed mb-6">
            I'm a {" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              self-taught
              </span>{" "}
              full-stack developer with a deep passion for building robust, scalable web applications. 
              My journey began with curiosity and has evolved into expertise across the entire development spectrum. 
              {" "}
              <span className="font-semibold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              I'm a builder of ecosystems
              </span>
              , a dreamer in code, and a disruptor of the ordinary. My journey didn’t start in a coding bootcamp — it started with raw, relentless curiosity. While others played games, I reverse-engineered them in my head.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend Excellence</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Crafting seamless user experiences with modern frameworks</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend Power</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Implementing efficient server-side logic and architecture</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Full Solutions</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Turning ideas into functional, high-performing applications</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              I wanted to see beneath the surface — to understand the system under the system. That hunger pulled me deep into <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI</span>, <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Flutter</span>, and <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">offline-first architecture</span>. I became obsessed with building not just apps, but smart, fast, and secure experiences that actually flow. For me, code isn’t just functionality — it’s poetry, logic, and legacy combined.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4">📈 Evolution of My Work</h3>
            <ul className="list-disc pl-6 space-y-4 mb-6">
              <li>
                <span className="font-semibold">🔧 From Tinkering to Platforms</span><br/>
                I transitioned from experimenting with code to building full-scale, production-ready platforms.
              </li>
              <li>
                <span className="font-semibold">🎵 Aurio</span><br/>
                A futuristic music streaming app inspired by Spotify’s precision and YouTube Music’s soul.
                <ul className="list-disc pl-6">
                  <li>Focused on the <span className="font-semibold">latest songs</span></li>
                  <li>Features a <span className="font-semibold">smart, responsive UI</span> that adapts to user emotions and listening habits</li>
                </ul>
                <a href="https://github.com/BetaAE/aurioappprot/releases/download/v1.0.2/aurio_1.0.2.apk" target="_blank" rel="noopener noreferrer">
                  <button className="mt-3 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:from-purple-600 hover:to-blue-600 transition-all">Try Now</button>
                </a>
              </li>
              <li>
                <span className="font-semibold">🎬 Cloudup</span><br/>
                An AI-powered entertainment platform for <span className="font-semibold">movies</span>, <span className="font-semibold">dramas</span>, and <span className="font-semibold">web series</span>.
                <ul className="list-disc pl-6">
                  <li>Offers <span className="font-semibold">real-time subtitles</span></li>
                  <li>Supports <span className="font-semibold">multilingual AI voice dubbing</span></li>
                  <li>Built to break <span className="font-semibold">language barriers</span> and bring <span className="font-semibold">global stories</span> to every screen</li>
                </ul>
                <a href="https://github.com/BetaAE/cloudupprot/releases/download/v1.0.3/CloudStream_1.0.3.apk" target="_blank" rel="noopener noreferrer">
                  <button className="mt-3 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:from-purple-600 hover:to-blue-600 transition-all">Try Now</button>
                </a>
              </li>
              <li>
                <span className="font-semibold">🎧 MusicHub</span><br/>
                A <span className="font-semibold">lightweight</span>, <span className="font-semibold">ultra-stylish</span> music app focused on speed and simplicity.
                <ul className="list-disc pl-6">
                  <li>Designed for both <span className="font-semibold">online and offline</span> use</li>
                  <li>Prioritizes <span className="font-semibold">minimalist UI</span> and a <span className="font-semibold">personal music experience</span></li>
                </ul>
                <a href="https://music-hubs.vercel.app" target="_blank" rel="noopener noreferrer">
                  <button className="mt-3 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:from-purple-600 hover:to-blue-600 transition-all">Try Now</button>
                </a>
              </li>
              <li>
                <span className="font-semibold">🌐 My Vision</span>
                <ul className="list-disc pl-6">
                  <li>Build tech that’s <span className="font-semibold">intelligent, clean, and deeply human</span></li>
                  <li>Focus on <span className="font-semibold">impact over hype</span></li>
                  <li>Create experiences that <span className="font-semibold">connect people, not just devices</span></li>
                </ul>
              </li>
            </ul>

            <p className="text-lg leading-relaxed mb-6">
              When I'm not immersed in code, you'll find me exploring cutting-edge technologies, contributing to{" "}
              <span className="font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                open-source
              </span>{" "}
              projects on GitHub, and connecting with the developer community. I believe in giving back to the ecosystem that has taught me so much.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-8 md:mx-20 lg:mx-24 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          My Journey
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journey.map((step, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-300 ${
                activeJourneyStep === index ? 'scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setActiveJourneyStep(activeJourneyStep === index ? -1 : index)}
            >
              <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden ${
                activeJourneyStep === index ? 'ring-4 ring-blue-500/20' : ''
              }`}>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-10 rounded-full -translate-y-16 translate-x-16`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${step.color} text-white text-xs font-semibold rounded-full mb-3`}>
                    {step.phase}
                  </div>
                  
                  <div className="text-right mb-4">
                    <span className="text-2xl font-bold text-gray-400 dark:text-gray-600">
                      
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-8 md:mx-20 lg:mx-24 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Let's Create Something Amazing</h2>
            <div className="w-16 h-1 bg-white/50 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              I'm always open to new opportunities, exciting collaborations, and innovative projects. 
              Whether you have a groundbreaking idea or need a reliable development partner, 
              I'd love to hear from you and explore how we can work together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors hover:scale-105 transform" onClick={() => window.location.href = "https://discord.com/users/1378754745044439141"}>
                Get In Touch
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all hover:scale-105 transform" onClick={() => window.location.href = "./#projects"}>
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}