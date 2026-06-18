"use client";

import { motion } from "framer-motion";
import { FaCode, FaFire, FaTrophy, FaStar } from "react-icons/fa";

const profiles = [
  { name: "LeetCode", problems: "200+", rating: "Top 10%", icon: FaCode, color: "text-yellow-500", link: "https://leetcode.com/u/shivakrishna_955/" },
  { name: "CodeChef", problems: "50+", rating: "3 Stars", icon: FaStar, color: "text-blue-500", link: "https://www.codechef.com/users/j_shiva" },
  { name: "HackerRank", problems: "50+", rating: "5 Stars (Problem Solving)", icon: FaTrophy, color: "text-green-500", link: "https://www.hackerrank.com/profile/j_shiva_krishna" },
  { name: "GitHub", problems: "10+ Repos", rating: "30+ Contributions", icon: FaFire, color: "text-purple-500", link: "https://github.com/shivakrishna955" },
];

export default function CodingProfile() {
  return (
    <section id="profile" className="py-24 w-full relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Coding Profile</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, idx) => (
            <motion.a
              href={profile.link}
              key={profile.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-white/10 hover:border-primary/40 transition-all cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl glass mb-6 flex items-center justify-center group-hover:scale-110 transition-transform ${profile.color}`}>
                <profile.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{profile.name}</h3>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                {profile.problems}
              </p>
              <p className="text-white/60 text-sm font-medium">{profile.rating}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
