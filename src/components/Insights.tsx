import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    date: "March 2024",
    category: "AI Automations",
    title: "The Rise of Context-Aware AI Agents in Enterprise Workflows",
    href: "#",
  },
  {
    date: "February 2024",
    category: "Architecture",
    title: "Scaling Node.js Applications to Millions of Concurrent Users",
    href: "#",
  },
  {
    date: "January 2024",
    category: "Intelligent Automation",
    title: "Why n8n is the Future of Low-Code Workflow Engineering",
    href: "#",
  },
  {
    date: "December 2023",
    category: "Product Design",
    title: "The Intersection of Minimalist UI and Complex Data Visualization",
    href: "#",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-32 bg-charcoal">
      <div className="container-fluid">
        <div
          className="mb-24"
        >
          <h2 className="font-display font-light text-bone uppercase tracking-tight">
            Insights & Writing
          </h2>
          <div className="w-full h-[1px] bg-border-gray mt-8"></div>
        </div>

        <div className="flex flex-col">
          {insights.map((insight, index) => (
            <motion.a
              key={insight.title}
              href={insight.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group py-12 border-b border-border-gray flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                <div className="flex flex-col gap-1 min-w-[120px]">
                  <span className="text-[10px] font-mono text-border-gray uppercase tracking-widest">{insight.date}</span>
                  <span className="text-xs font-mono text-muted-silver uppercase tracking-widest">{insight.category}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-bone group-hover:text-white transition-colors max-w-2xl leading-tight">
                  {insight.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-4 text-bone group-hover:translate-x-2 transition-transform duration-500">
                <span className="font-sans text-sm uppercase tracking-widest hidden md:block">Read Article</span>
                <ArrowRight className="w-6 h-6" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
