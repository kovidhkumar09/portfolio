import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cpu, Layers, Wrench, Brain } from "lucide-react";

const skillGroups = [
  {
    icon: Code,
    title: "Languages",
    description: "Java, Python, C, C++, C#, JavaScript, SQL, HTML, CSS",
  },
  {
    icon: Layers,
    title: "Frameworks",
    description: "React, Node.js, Express.js, Spring Boot, Bootstrap",
  },
  {
    icon: Database,
    title: "Databases",
    description: "MySQL, PostgreSQL, MongoDB, Firebase",
  },
  {
    icon: Wrench,
    title: "Tools",
    description: "Git, Docker, VS Code, IntelliJ, Android Studio, LaTeX",
  },
  {
    icon: Brain,
    title: "AI / ML",
    description: "LLM Integration, Prompt Engineering, KNIME, Vertex AI, Google Cloud Generative AI",
  },
  {
    icon: Cpu,
    title: "Concepts",
    description: "REST APIs, Agile/Scrum, SDLC, Creative Context Engineering, Data Structures & Algorithms",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 md:py-40 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
            What I Work With
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold">
            Skills & <span className="italic">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <skill.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-card border border-border/50 text-center"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-6">Certifications</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Google Cloud: Generative AI & LLMs",
              "Google Cloud: Responsible AI",
              "Vertex AI: Prompt Design",
              "Microsoft: Transact-SQL",
              "Harvard edX: CS50",
            ].map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 rounded-full border border-primary/30 text-sm text-muted-foreground bg-primary/5"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
