import React from "react";
import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Projects from "../components/portfolio/Projects";
import Skills from "../components/portfolio/Skills";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";

// Replace these with your own images later
const HERO_IMAGE = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80";
const PORTRAIT_IMAGE = "/portrait.jpg";
const PROJECT_IMAGES = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <Hero heroImage={HERO_IMAGE} />
      <About portraitImage={PORTRAIT_IMAGE} />
      <Projects projectImages={PROJECT_IMAGES} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
