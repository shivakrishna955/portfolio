"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Smart Ride and Platform Recommendation System",
    description:
      "Compare Uber, Ola, Rapido fares using Machine Learning. Predicts optimal pricing and recommends the best option considering both price and platform ratings.",
    tech: ["Python", "Machine Learning", "Linear Regression", "Random Forest", "React"],
    image: "/project1.png",
    github: "https://github.com/shivakrishna955/Project1.git",
    live:"#",
  },
  {
    title: "Task Management System",
    description:
      "A modern, highly responsive productivity platform with kanban boards, real-time collaboration, and intelligent task prioritization.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Express", "Socket.io"],
    image: "/project2.png",
    github: "https://github.com/shivakrishna955/task-management-system.git",
    live:"#",
  },
  {
    title: "JARVIS",
    description:
      "Developed a voice-controlled AI assistant using Python that can perform web searches, open applications, and execute user commands through speech recognition.",
    tech: ["Python", "SpeechRecognition", "OpenAI APIs", "Automation Libraries", "Web APIs"],
    image: "/project3.png",
    github: "https://github.com/shivakrishna955/project2.git",
    live:"#",
  },
];

const TiltCard = ({ project }: { project: typeof projects[0] }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-4 flex flex-col h-full relative group cursor-pointer"
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="w-full h-48 rounded-xl mb-6 relative overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors"
          >
            <FaGithub className="w-5 h-5 text-white" />
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-primary/80 hover:bg-primary rounded-full backdrop-blur-md transition-colors"
          >
            <FaExternalLinkAlt className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

        <p className="text-white/60 text-sm mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-md bg-white/5 text-primary border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 w-full relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: "1000px" }}
        >
          {projects.map((project) => (
            <TiltCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}