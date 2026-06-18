import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import CodingProfile from "@/components/CodingProfile";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col w-full overflow-hidden">
      <ParticleBackground />
      <Navbar />
      
      <div className="flex-1 w-full mx-auto relative z-10 flex flex-col items-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <CodingProfile />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

