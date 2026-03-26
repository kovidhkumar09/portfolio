import React from "react";

const socials = [
  { label: "GitHub", href: "https://github.com/kovidhkumar09" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kovidhnagula" },
  { label: "Email", href: "mailto:kovidh@iastate.edu" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kovidh Kumar Nagula. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}