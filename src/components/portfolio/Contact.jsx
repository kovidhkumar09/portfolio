import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 leading-tight">
              Let's create
              <br />
              something <span className="italic">amazing.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              I'm always open to new opportunities, collaborations, and interesting projects.
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:kovidh@iastate.edu" className="text-foreground hover:text-primary transition-colors">kovidh@iastate.edu</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Ames, Iowa</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    placeholder="John Doe"
                    className="bg-card border-border/50 h-12 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-card border-border/50 h-12 focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Subject
                </label>
                <Input
                  placeholder="Project inquiry"
                  className="bg-card border-border/50 h-12 focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  className="bg-card border-border/50 min-h-[160px] focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-14 rounded-full bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Send Message
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}