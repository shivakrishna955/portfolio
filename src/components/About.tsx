"use client";

import { motion } from "framer-motion";
import { FaCode, FaFolder, FaAward, FaBookOpen } from "react-icons/fa";

const stats = [
  { label: "DSA Problems Solved", value: "200+", icon: FaCode, color: "text-blue-500" },
  { label: "Projects Built", value: "5+", icon: FaFolder, color: "text-purple-500" },
  { label: "Certifications", value: "5+", icon: FaAward, color: "text-cyan-500" },
  { label: "Technologies Learned", value: "20+", icon: FaBookOpen, color: "text-green-500" },
];

export default function About() {
  return (
    <section id="about" className="py-24 w-full relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-150" />
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
               Who I am
            </h3>
            <p className="text-white/70 leading-relaxed mb-6 text-lg">
              I am an aspiring AI/ML Engineer and passionate AIML student. I thrive at the intersection
              of machine learning models and full-stack web development. My primary focus is on
              solving complex real-world problems through data-driven approaches and building intelligent
              systems that are highly scalable and performant.
            </p>
            <p className="text-white/70 leading-relaxed text-lg">
              My career objective is to leverage artificial intelligence to create software that 
              positively impacts people's lives while continuously expanding my technical horizon.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="glass p-6 rounded-2xl text-center group hover:bg-white/10 transition-colors cursor-pointer border border-white/5 hover:border-primary/30"
              >
                <div className={`mx-auto w-12 h-12 rounded-full glass flex items-center justify-center mb-4 ${stat.color} group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
                <p className="text-sm text-white/60 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
