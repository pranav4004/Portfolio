import React from "react";
import { motion } from "motion/react";
import { Cpu, Code2, Workflow, Database, Globe, Zap } from "lucide-react";

const arsenalItems = [
  {
    title: "Full-Stack Engineering",
    description: "Building resilient backends and performant frontends. Utilizing modern frameworks and cloud infrastructure for seamless deployment.",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    icon: <Code2 className="w-6 h-6" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "AI & LLM Integration",
    description: "Building context-aware applications and AI agents that leverage the latest in Large Language Models.",
    tags: ["OpenAI", "LangChain", "Vector DBs", "RAG"],
    icon: <Cpu className="w-6 h-6" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Intelligent Automation",
    description: "Complex workflow engineering to eliminate manual tasks and optimize business processes.",
    tags: ["n8n", "Make.com", "Zapier", "Python"],
    icon: <Workflow className="w-6 h-6" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Scalable Architecture",
    description: "Designing systems that grow with your business, focusing on high availability and low latency.",
    tags: ["AWS", "Docker", "Kubernetes", "Redis"],
    icon: <Database className="w-6 h-6" />,
    colSpan: "md:col-span-2",
  },
];

export default function Arsenal() {
  return (
    <section id="expertise" className="py-32 bg-obsidian">
      <div className="container-fluid">
        <div
          className="mb-24"
        >
          <h2 className="font-display font-light text-bone uppercase tracking-tight">
            The Arsenal
          </h2>
          <div className="w-full h-[1px] bg-border-gray mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {arsenalItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl border border-border-gray bg-charcoal/50 hover:bg-charcoal transition-all duration-500 flex flex-col justify-between ${item.colSpan}`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                {item.icon}
              </div>
              
              <div>
                <div className="w-12 h-12 rounded-full border border-border-gray flex items-center justify-center mb-8 group-hover:bg-bone group-hover:text-obsidian transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl font-medium text-bone mb-4">{item.title}</h3>
                <p className="font-sans text-muted-silver leading-relaxed mb-8 max-w-md">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-bone uppercase tracking-widest px-2 py-1 border border-border-gray/50 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
