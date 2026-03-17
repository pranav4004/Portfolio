import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { name: "Email", url: "mailto:pranavsampat123@gmail.com" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/pranavsampat04" },
    { name: "GitHub", url: "https://github.com/pranav4004" },
    { name: "X", url: "https://x.com/pranavsampat" },
  ];

  return (
    <footer
      id="contact"
      className="relative py-32 bg-obsidian overflow-hidden"
    >
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 mb-32">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-display text-5xl sm:text-7xl leading-[0.9] font-light text-bone uppercase tracking-tighter mb-12">
              Got a complex <br />
              <span className="text-muted-silver italic">problem?</span> <br />
              Let's automate it.
            </h2>
            <p className="font-sans text-muted-silver font-light leading-relaxed max-w-md">
              I help businesses scale through intelligent architecture and
              AI-driven automation. Reach out to discuss your next project.
            </p>
          </motion.div>

          {/* Right Side - Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center gap-6 lg:pl-12"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-border-gray/30 pb-6 hover:border-bone transition-colors duration-500"
              >
                <span className="font-display text-4xl sm:text-5xl font-light text-muted-silver group-hover:text-bone transition-colors duration-500">
                  {link.name}
                </span>
                <div className="w-12 h-12 rounded-full border border-border-gray flex items-center justify-center group-hover:bg-bone group-hover:text-obsidian transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full pt-12 border-t border-border-gray flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="font-sans text-muted-silver text-xs font-light uppercase tracking-widest">
              © {new Date().getFullYear()} Pranav Sampat. All rights reserved.
            </p>
            <div className="flex gap-4">
              <span className="text-[10px] font-mono text-border-gray uppercase tracking-widest">
                Local Time
              </span>
              <span className="text-[10px] font-mono text-muted-silver uppercase tracking-widest">
                Bengaluru, IN — {time}
              </span>
            </div>
          </div>

          <div className="flex gap-8">
            {socialLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-bone text-xs uppercase tracking-widest hover:text-muted-silver transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

