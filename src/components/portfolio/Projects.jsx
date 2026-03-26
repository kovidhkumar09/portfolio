import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Edu Track",
    category: "Full-Stack Web App",
    description: "Student success dashboard with calendar, search/filter, task tracking, and real-time academic progress visualization using Chart.js.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Chart.js"],
    github: "https://github.com/kovidhkumar09",
    period: "Sep 2025 – Present",
    imageKey: 0,
  },
  {
    title: "CySplit",
    category: "Android App",
    description: "Expense splitting & budgeting app with Stripe API integration, user authentication, and financial tracking — built with Java in Android Studio.",
    tech: ["Java", "Android Studio", "Stripe API", "Spring Boot"],
    github: "https://github.com/kovidhkumar09",
    period: "Aug 2025 – Present",
    imageKey: 1,
  },
  {
    title: "Roguelike Pokémon Game Engine",
    category: "Systems / C/C++",
    description: "Terminal-based RPG in C/C++ using ncurses with procedurally generated maps, Dijkstra pathfinding, and modular world/memory management systems.",
    tech: ["C", "C++", "ncurses", "Dijkstra"],
    github: "https://github.com/kovidhkumar09",
    period: "Jan 2026 – Present",
    imageKey: 2,
  },
  {
    title: "ContextFlow",
    category: "AI / Startup Concept",
    description: "LLM-based developer productivity platform designed to maintain persistent development context across sessions — integrating codebases, docs, and user intent.",
    tech: ["LLMs", "AI Architecture", "Context Engineering"],
    github: "https://github.com/kovidhkumar09",
    period: "Concept",
    imageKey: 3,
  },
];

export default function Projects({ projectImages }) {
  return (
    <section id="work" className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
            Selected Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold">
            Featured <span className="italic">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-secondary">
                <div className="aspect-video">
                  <img
                    src={projectImages[project.imageKey]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <p className="text-primary text-xs uppercase tracking-[0.2em] mb-2">
                      {project.category}
                    </p>
                    <p className="text-foreground text-sm leading-relaxed max-w-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.category} · {project.period}
                  </p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
