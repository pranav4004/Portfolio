import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface ExperienceItem {
  year: string;
  company: string;
  role: string;
  techStack: string[];
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    year: "2021 — Present",
    company: "Self-Employed",
    role: "Freelance Full-Stack Developer",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "AI"],
    description: "Delivered 10+ production-ready applications across healthcare, ERP, fashion, and AI domains. Specialized in building scalable systems using modern tech stacks and cloud infrastructure.",
  },
  {
    year: "2022 — Present",
    company: "College & Private Tutoring",
    role: "Workshop Instructor & Private Tutor",
    techStack: ["Mentoring", "Web Dev", "Software Engineering", "Hands-on Projects"],
    description: "Conducting technical workshops and mentoring junior students in college. Providing private tuitions in programming, web development, and software engineering. Teaching concepts through hands-on projects and real-world applications, helping students build practical skills.",
  },
  {
    year: "Jul 2024 — Aug 2024",
    company: "Quotr.io",
    role: "Software Intern",
    techStack: ["Node.js", "Python", "APIs", "Automation"],
    description: "Built automation modules and backend APIs using Node.js and Python. Implemented data processing pipelines and integrated third-party services to enhance platform functionality.",
  },
  {
    year: "May 2023 — Jul 2023",
    company: "Batwebs",
    role: "Software Intern",
    techStack: ["React", "Kotlin", "Flutter", "Mobile"],
    description: "Developed mobile and web applications using React, Kotlin, and Flutter. Collaborated with design and backend teams to deliver cross-platform solutions.",
  },
  {
    year: "2021 — 2022",
    company: "Supermark Agency",
    role: "Content Writer",
    techStack: ["Technical Writing", "Research", "Marketing Copy", "Content Strategy"],
    description: "Created technical content, blog posts, and marketing copy for digital campaigns. Researched industry trends and translated complex technical concepts into clear, accessible content. Collaborated with marketing and design teams to produce compelling campaign narratives.",
  },
  {
    year: "2023 — 2024",
    company: "Best Digital Marketing",
    role: "Digital Strategy & Web Development",
    techStack: ["SEO Optimization", "Content Writing", "Sales Strategy", "Web Development"],
    description: "Spearheaded digital growth by integrating SEO optimization, strategic content writing, and sales-focused website development. Elevated brand visibility and conversion metrics through tailored digital solutions.",
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="bg-obsidian py-32 lg:py-48">
      <div className="container-fluid">
        {/* Section Header */}
        <div 
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-bone uppercase tracking-tight">
              Experience
            </h2>
            <div className="w-32 h-[1px] bg-border-gray mt-8"></div>
          </div>
        </div>

        {/* Ledger List */}
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <LedgerRow
              key={exp.company}
              experience={exp}
              isExpanded={expandedIndex === index}
              onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface LedgerRowProps {
  experience: ExperienceItem;
  isExpanded: boolean;
  onToggle: () => void;
}

const LedgerRow: React.FC<LedgerRowProps> = ({ 
  experience, 
  isExpanded, 
  onToggle 
}) => {
  return (
    <div 
      className="group border-b border-border-gray/30 last:border-b-0 transition-colors duration-500 hover:bg-white/[0.02] cursor-pointer"
      onClick={onToggle}
    >
      {/* List View */}
      <div className="grid grid-cols-1 md:grid-cols-[20%_40%_30%_10%] items-center py-10 lg:py-14 px-4">
        {/* Year */}
        <div className="text-xs font-mono text-muted-silver uppercase tracking-widest mb-4 md:mb-0">
          {experience.year}
        </div>

        {/* Company */}
        <div className="font-display text-3xl lg:text-5xl text-bone/80 group-hover:text-white transition-colors duration-500 uppercase tracking-tighter mb-4 md:mb-0">
          {experience.company}
        </div>

        {/* Role */}
        <div className="font-sans text-sm font-light text-muted-silver uppercase tracking-widest mb-4 md:mb-0">
          {experience.role}
        </div>

        {/* Icon */}
        <div className="flex md:justify-end">
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="text-bone/50 group-hover:text-bone transition-colors"
          >
            <Plus className="w-6 h-6 font-light" />
          </motion.div>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 pb-16 px-4 pt-4 border-t border-border-gray/10">
              {/* Tech Stack */}
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-mono text-border-gray uppercase tracking-[0.2em]">
                  Technical Stack
                </span>
                <div className="flex flex-wrap gap-3">
                  {experience.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-1.5 rounded-full border border-border-gray/50 text-[11px] font-mono text-muted-silver uppercase tracking-widest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-mono text-border-gray uppercase tracking-[0.2em]">
                  Architectural Challenge
                </span>
                <p className="font-sans text-lg text-muted-silver font-light leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
