import React from "react";
import { motion } from "framer-motion";

export default function About({ portraitImage }) {
  return (
    <section id="about" className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={portraitImage}
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
              About Me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 leading-tight">
              Driven by curiosity,
              <br />
              <span className="italic">powered by craft.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science senior at Iowa State University (GPA 3.5, Dean's List),
                graduating December 2026 with a minor in Applied Artificial Intelligence.
                I love building things — from full-stack web apps to terminal-based game engines.
              </p>
              <p>
                My experience spans front-end and back-end development, Android apps, and AI/ML
                systems. I've worked as a tutor, session producer, and built several
                projects end-to-end, including an expense-splitting app and an AI productivity platform concept.
              </p>
              <p>
                Outside of coding, I hold Google Cloud and Microsoft certifications in AI, LLMs, and SQL,
                and I'm always exploring new tools at the intersection of software and intelligence.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-8">
              {[
                { number: "3.5", label: "GPA" },
                { number: "5+", label: "Projects" },
                { number: "Dec '26", label: "Graduation" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl md:text-4xl font-semibold text-primary">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}