import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const archivedProjects = [
  {
    year: "2024",
    name: "Enterprise Jewelry ERP",
    category: "SaaS / Full-Stack",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop",
    slug: "jewelry-erp",
  },
  {
    year: "2024",
    name: "Syntaxiom",
    category: "Digital Agency Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    slug: "syntaxiom",
  },
  {
    year: "2023",
    name: "Poornima Ayurvedic Hospital HMS",
    category: "Systems Architecture",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    slug: "hospital-hms",
  },
  {
    year: "2023",
    name: "St. Francis Convent School",
    category: "Web Experience",
    image: "https://images.unsplash.com/photo-1523050335392-9beffa5d2205?q=80&w=2070&auto=format&fit=crop",
    slug: "school-web",
  },
  {
    year: "2023",
    name: "Community Mobile App",
    category: "Mobile / Backend",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    slug: "community-app",
  },
  {
    year: "2022",
    name: "AI Content Generator",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    slug: "ai-generator",
  },
  {
    year: "2022",
    name: "E-Commerce Dashboard",
    category: "Data Visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    slug: "ecommerce-dashboard",
  },
];

export default function ProjectArchive() {
  return (
    <section className="min-h-screen bg-obsidian pt-40 pb-32 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <Link
            to="/"
            className="font-sans text-xs uppercase tracking-widest text-muted-silver hover:text-bone transition-colors mb-8 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-9xl font-light text-bone uppercase tracking-tighter leading-[0.85]">
            Project
            <br />
            Catalogue.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full">
          {archivedProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/work/${project.slug}`}
                className="group relative block w-full h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6 bg-charcoal">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-obsidian/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-bone text-obsidian flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-border-gray uppercase tracking-widest">
                      {project.year}
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-widest text-muted-silver">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-light text-bone group-hover:text-white transition-colors">
                    {project.name}
                  </h2>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
