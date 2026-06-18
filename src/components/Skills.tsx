"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    name: "AI & ML",
    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "NLP", level: 70 },
      { name: "Computer Vision", level: 80 },
    ]
  },
  {
    name: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "C", level: 70 },
    ]
  },
  {
    name: "Web Development",
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "HTML & CSS", level: 90 },
      { name: "Express", level: 75 },
    ]
  },
  {
    name: "Databases & Tools",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 w-full relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Skill Dashboard</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Category Selector */}
          <div className="flex flex-col gap-4">
            {skillCategories.map((category, idx) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(idx)}
                className={`text-left px-6 py-4 rounded-xl transition-all duration-300 font-medium ${
                  activeCategory === idx 
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
                    : "glass text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skill Bars */}
          <div className="md:col-span-3 glass p-8 rounded-2xl min-h-[400px]">
            <h3 className="text-2xl font-semibold text-white mb-8">
              {skillCategories[activeCategory].name} Skills
            </h3>
            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, idx) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-white/60 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      key={`${activeCategory}-${skill.name}`} // Force re-animation on tab change
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.1 * idx, ease: "easeOut" }}
                      className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
