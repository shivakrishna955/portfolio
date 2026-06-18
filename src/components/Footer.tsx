import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-auto border-t border-white/10 bg-background/50 backdrop-blur-md relative z-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-white/60 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Designed & Developed by Shiva Krishna.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/shivakrishna955" className="p-2 glass rounded-full hover:bg-primary/20 transition-colors">
            <FaGithub className="w-5 h-5 text-white" />
          </a>
          <a href="https://linkedin.com/in/shiva-krishna-jamma-635298376" className="p-2 glass rounded-full hover:bg-primary/20 transition-colors">
            <FaLinkedin className="w-5 h-5 text-white" />
          </a>
          <a href="mailto:jammashivakrishna1@gmail.com" className="p-2 glass rounded-full hover:bg-primary/20 transition-colors">
            <FaEnvelope className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
