"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Profile", href: "#profile" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav className="glass px-6 py-3 rounded-full flex gap-4 sm:gap-8 items-center text-sm font-medium overflow-x-auto max-w-[95vw] scrollbar-hide">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-white/70 hover:text-white transition-colors whitespace-nowrap"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
