"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaAward } from "react-icons/fa";

const journey = [
  {
    type: "education",
    title: "B.Tech in CSE( Artificial Intelligence and Machine Learning ) ",
    org: "CVR College of Engineering",
    date: "2024 - 2028",
    description: "Specializing in Machine Learning, Deep Learning, and Data Structures. Maintaining a high GPA while actively participating in coding clubs.",
    icon: FaGraduationCap,
  },
  {
    type: "virtual internship",
    title: "Google AI",
    org: "Eduskills",
    date: "Summer 2025",
    description: "Explored Google's AI technologies and industry best practices while working on practical learning modules and projects.",
    icon: FaBriefcase,
  },
  {
    type: "virtual internship",
    title: "Celonis",
    org: "Eduskills",
    date: "2026",
    description: "Successfully completed the Celonis AI Foundations Virtual Internship, gaining knowledge of Artificial Intelligence concepts, Process Mining, Intelligent Automation, and data-driven decision-making. Learned how AI can be integrated with business processes to improve efficiency, identify bottlenecks, and optimize organizational performance using Celonis technologies.",
    icon: FaAward,
  }
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 w-full relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Experience & Learning</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-6 md:ml-[50%] md:-translate-x-1/2 md:border-l-0">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -ml-[1px]" />
          
          {journey.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`mb-12 relative pl-8 md:pl-0 flex flex-col md:flex-row items-center justify-between w-full ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden md:block w-5/12" />
              
              <div className="absolute left-[-25px] md:left-1/2 md:-ml-[24px] top-0 md:top-1/2 md:-translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center z-10 bg-background border border-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              
              <div className={`w-full md:w-5/12 glass p-6 rounded-2xl relative hover:border-primary/50 transition-colors ${
                idx % 2 === 0 ? "md:text-left" : "md:text-right"
              }`}>
                <span className="text-primary text-sm font-bold tracking-wider mb-2 block">{item.date}</span>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <h4 className="text-white/60 font-medium mb-4">{item.org}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
