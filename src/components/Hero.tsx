"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaTerminal, FaMicrochip, FaDatabase, FaCode } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

const FloatingIcon = ({ icon: Icon, delay, x, y, duration = 3 }: { icon: any, delay: number, x: number, y: number, duration?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.5, scale: 1, y: [y, y - 20, y], x: [x, x + 10, x] }}
    transition={{ 
      opacity: { delay, duration: 0.5 },
      scale: { delay, duration: 0.5 },
      y: { repeat: Infinity, duration, ease: "easeInOut" },
      x: { repeat: Infinity, duration: duration * 1.2, ease: "easeInOut" }
    }}
    className="absolute hidden md:flex items-center justify-center p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <Icon className="w-8 h-8 text-primary" />
  </motion.div>
);

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "AI/ML Engineer | Full-Stack Developer | Problem Solver";

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(intervalId);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Floating Background Icons */}
      <FloatingIcon icon={FaMicrochip} delay={0.2} x={15} y={30} duration={4} />
      <FloatingIcon icon={FaTerminal} delay={0.5} x={85} y={25} duration={5} />
      <FloatingIcon icon={FaDatabase} delay={0.8} x={20} y={70} duration={4.5} />
      <FloatingIcon icon={FaCode} delay={1.1} x={80} y={65} duration={5.5} />

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full mb-8"
        >
          {/* Animated rings around profile */}
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border border-secondary/30 animate-[spin_15s_linear_infinite_reverse]" />
          
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden flex items-center justify-center backdrop-blur-sm border border-white/10">
  <Image
  src="/profile.jpeg"
  alt="Shiva Krishna"
  fill
  className="relative w-40 h-40 md:w-52 md:h-52 rounded-full mb-8"
/>
</div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl tracking-tight mb-6"
        >
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Intelligent Systems</span> That Solve Real Problems
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-8 mb-10"
        >
          <p className="text-lg md:text-xl text-white/70 font-mono">
            {text}
            <span className="animate-pulse">_</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="/resume.pdf" download className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
            <FaDownload className="w-4 h-4" />
            Resume
          </a>
          <Link href="#contact" className="flex items-center gap-2 px-6 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition-colors">
            <FaEnvelope className="w-4 h-4" />
            Contact Me
          </Link>
          <a href="https://github.com/shivakrishna955" className="flex items-center gap-2 px-4 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition-colors">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/shiva-krishna-jamma-635298376" className="flex items-center gap-2 px-4 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/40 text-sm mb-2 font-mono uppercase tracking-widest">Scroll</span>
        <div className="w-1 h-12 rounded-full glass relative overflow-hidden">
          <motion.div 
            animate={{ 
              y: [0, 48, 0] 
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 right-0 h-4 bg-primary rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
}
