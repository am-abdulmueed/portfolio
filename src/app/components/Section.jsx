"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Palette, 
  Code2, 
  Sparkles, 
  ArrowRight,
  Layers,
  Zap,
  Target
} from "lucide-react";

const services = [
  {
    title: "Design",
    description: "I create compelling web designs that engage your audience and deliver exceptional user experiences that convert.",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
    features: ["UI/UX Design", "Brand Identity", "Prototyping", "User Research"]
  },
  {
    title: "Development",
    description: "Bringing designs to life with clean, efficient code and cutting-edge technologies that perform flawlessly.",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    features: ["Frontend Development", "Backend APIs", "Database Design", "Performance Optimization"]
  },
  {
    title: "The Full Package",
    description: "Complete end-to-end solutions that capture your brand identity while delivering powerful, functional features.",
    icon: Sparkles,
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
    features: ["Full-Stack Development", "Brand Strategy", "SEO Optimization", "Maintenance & Support"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    }
  },
};

export default function Section() {
  return (
    <section className="px-6 md:px-12 lg:px-24 mt-20 mb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
            I can help you with
          </span>
          <span className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text animate-pulse">
            everything you need
          </span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              y: -12,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 25 }
            }}
            whileTap={{ scale: 0.98 }}
            className="group cursor-pointer"
          >
            <div className={`relative h-full bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 border border-white/20 dark:border-neutral-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-12 translate-y-12"></div>
              </div>

              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="relative">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h2>
                
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-800/30">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Ready to bring your ideas to life?
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
            Let's collaborate to create something amazing together. From concept to launch, I'll help you build digital experiences that make an impact.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.location.href = 'https://discord.com/users/1378754745044439141'}
          >
            <Target className="w-4 h-4" />
            Start Your Project
            <Zap className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

// Enhanced Skills Component (placeholder for future development)
const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "Design",
    skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    color: "from-pink-500 to-rose-500"
  }
];

export function Skills() {
  return (
    <section className="px-6 md:px-12 lg:px-24 mt-20 mb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        {/* <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent mb-6">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div> */}
      </motion.div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-800"
          >
            <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${category.color} text-white font-medium`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div> */}
    </section>
  );
}