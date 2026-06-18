import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shiva Krishna | AI/ML Engineer & Full-Stack Developer",
  description: "Portfolio of Shiva Krishna, an aspiring AI/ML Engineer and Full-Stack Machine Learning Developer building intelligent systems.",
  keywords: ["AI Engineer", "ML Developer", "Portfolio", "Shiva Krishna", "Full-Stack Developer", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
