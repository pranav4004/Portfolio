import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Jewelry Management System",
    description: "Full-stack SaaS architecture and management system for high-volume jewelry manufacturing.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "/jms_mockup.png",
    slug: "jewelry-erp",
    liveUrl: "https://jms-demo-alpha.vercel.app/",
    kpis: [
      { label: "Efficiency", value: "+40%" },
      { label: "Users", value: "500+" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A high-performance digital agency platform with custom CMS and dynamic motion design.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/task_manager_mockup.png",
    slug: "syntaxiom",
    liveUrl: "https://task-manager-seven-gamma-38.vercel.app/",
    kpis: [
      { label: "Load Time", value: "0.8s" },
      { label: "SEO Score", value: "100" },
      { label: "Conversion", value: "+25%" }
    ]
  },
  {
    id: 3,
    title: "Hospital Management System",
    description: "Comprehensive healthcare system for Poornima Ayurvedic Hospital with real-time analytics.",
    tech: ["Vue", "Express", "MongoDB"],
    image: "/hms_mockup.png",
    slug: "hospital-hms",
    liveUrl: "https://hms-demo-kappa.vercel.app/signin",
    kpis: [
      { label: "Patients", value: "10k+" },
      { label: "Wait Time", value: "-30%" },
      { label: "Accuracy", value: "100%" }
    ]
  },
];

export default function SelectedWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="work"
      ref={containerRef}
      className="py-32 px-6 sm:px-12 lg:px-24 bg-charcoal"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-bone uppercase tracking-tight">
              Selected Works
            </h2>
            <div className="w-32 h-[1px] bg-border-gray mt-8"></div>
          </div>
          <div className="hidden md:block">
            <Link
              to="/archive"
              className="group flex items-center gap-4 font-sans text-xs uppercase tracking-widest text-muted-silver hover:text-bone transition-colors"
            >
              View Archive
              <div className="w-10 h-10 rounded-full border border-border-gray flex items-center justify-center group-hover:bg-bone group-hover:text-obsidian transition-all duration-500">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-24 flex justify-center md:hidden">
          <Link
            to="/archive"
            className="group flex items-center gap-4 px-8 py-4 rounded-full border border-border-gray text-bone font-sans text-xs uppercase tracking-widest hover:bg-white/5 transition-all duration-500"
          >
            View More Projects
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const ProjectCard: React.FC<{ project: any; index: number }> = ({
  project,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div
      ref={cardRef}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="lg:col-span-7 relative overflow-hidden rounded-2xl aspect-[16/10] bg-obsidian">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-[120%] object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 absolute top-[-10%] left-0"
          style={{ y }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          referrerPolicy="no-referrer"
        />
        
        {/* Hover Overlay with Live Link */}
        <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-20 h-20 rounded-full bg-bone text-obsidian flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 hover:bg-white"
          >
            <ArrowUpRight className="w-8 h-8" />
          </a>
        </div>
      </div>

      <div className="lg:col-span-5 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[10px] text-border-gray uppercase tracking-widest">
            0{index + 1}
          </span>
          <h3 className="font-display text-3xl sm:text-4xl font-light text-bone uppercase tracking-tight">
            {project.title}
          </h3>
        </div>
        
        <p className="font-sans text-muted-silver text-base font-light leading-relaxed mb-8">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-10">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="px-4 py-1.5 rounded-full border border-border-gray/50 text-[10px] font-mono text-muted-silver uppercase tracking-widest"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 mb-10 border-t border-border-gray/30 pt-8">
          {project.kpis.map((kpi: any) => (
            <div key={kpi.label} className="flex flex-col gap-2">
              <span className="font-display text-2xl text-bone font-medium">
                {kpi.value}
              </span>
              <span className="font-mono text-[9px] text-bone uppercase tracking-widest">
                {kpi.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-3 px-6 py-3 rounded-full bg-bone text-obsidian font-sans text-xs font-medium uppercase tracking-widest hover:bg-white transition-colors"
          >
            Live Demo
            <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
          </a>
          <Link 
            to={`/work/${project.slug}`}
            className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-silver hover:text-bone transition-colors inline-flex items-center gap-2"
          >
            Case Study <div className="w-1 h-1 rounded-full bg-border-gray group-hover:bg-bone transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};

