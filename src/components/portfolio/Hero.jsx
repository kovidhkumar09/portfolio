import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero({ heroImage }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Abstract art background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-primary text-sm md:text-base uppercase tracking-[0.3em] mb-6"
        >
          Developer & CS Student
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight tracking-tight"
        >
          Kovidh Kumar
          <br />
          <span className="italic text-primary">Nagula</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
        >
          Computer Science senior at Iowa State University, building full-stack
          apps, game engines, and AI-powered tools — with a minor in Applied AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}