import React, { useEffect } from "react";
import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowDown } from "lucide-react";
import ArchitectureBlueprint from "./ArchitectureBlueprint";

const caseStudies = {
  "jewelry-erp": {
    title: "Enterprise Jewelry ERP",
    role: "Product Architect",
    timeline: "6 Months",
    collaborators: "AI/ML: Nandika Raj Varma, Full-Stack: Denis Paul",
    tech: "Node.js, n8n, OpenAI API, PostgreSQL",
    kpis: [
      { label: "Manual data entry", value: "-85%" },
      { label: "Monthly workflows", value: "10k+" },
      { label: "Deployment", value: "Zero-Downtime" },
    ],
    problem: "The client was struggling with fragmented data across multiple legacy systems, leading to significant manual errors and slow order processing times.",
    architecture: "We implemented a centralized ERP system with an AI-driven automation layer that synchronizes inventory, orders, and customer data in real-time.",
    outcome: "The new system reduced operational costs by 40% and increased order fulfillment speed by 3x, allowing the business to scale without increasing headcount.",
    heroImage: "https://picsum.photos/seed/jewelry-hero/1920/1080",
  },
  "syntaxiom": {
    title: "Syntaxiom",
    role: "Lead Developer",
    timeline: "4 Months",
    collaborators: "Design: Sarah Chen, Frontend: Alex Rivera",
    tech: "Next.js, Tailwind, Framer Motion, Sanity.io",
    kpis: [
      { label: "Page Load Speed", value: "< 1s" },
      { label: "User Engagement", value: "+120%" },
      { label: "SEO Visibility", value: "Top 3" },
    ],
    problem: "Syntaxiom needed a digital presence that matched their high-end creative output, but their existing site was slow and lacked interactive depth.",
    architecture: "A headless CMS architecture combined with a high-performance React frontend, focusing on fluid transitions and editorial-style typography.",
    outcome: "A breathtaking digital experience that won multiple design awards and directly led to a 50% increase in high-value client inquiries.",
    heroImage: "https://picsum.photos/seed/agency-hero/1920/1080",
  },
};

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies[slug as keyof typeof caseStudies];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-bone mb-8">Project Not Found</h1>
          <Link to="/archive" className="text-muted-silver hover:text-bone underline">
            Return to Archive
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-obsidian min-h-screen">
      {/* Header */}
      <header className="pt-32 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/archive"
            className="group flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-muted-silver hover:text-bone transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Archive
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-7xl lg:text-9xl font-light text-bone uppercase tracking-tighter leading-[0.85] mb-24"
          >
            {study.title}
          </motion.h1>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-y border-border-gray">
            <div>
              <span className="font-mono text-[10px] text-border-gray uppercase tracking-widest block mb-4">
                Role
              </span>
              <p className="font-sans text-sm text-bone">{study.role}</p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-border-gray uppercase tracking-widest block mb-4">
                Timeline
              </span>
              <p className="font-sans text-sm text-bone">{study.timeline}</p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-border-gray uppercase tracking-widest block mb-4">
                Collaborators
              </span>
              <p className="font-sans text-sm text-bone leading-relaxed">
                {study.collaborators}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-border-gray uppercase tracking-widest block mb-4">
                Tech Stack
              </span>
              <p className="font-sans text-sm text-bone">{study.tech}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <section className="mt-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden aspect-video bg-charcoal">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={study.heroImage}
            alt={study.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* KPI Banner */}
      <section className="mt-24 py-32 bg-bone text-obsidian px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24 text-center">
          {study.kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h2 className="font-display text-7xl sm:text-8xl lg:text-9xl font-light tracking-tighter mb-4">
                {kpi.value}
              </h2>
              <p className="font-sans text-xs uppercase tracking-widest opacity-60">
                {kpi.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Narrative */}
      <section className="py-32 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-4">
            <h3 className="font-display text-3xl text-bone uppercase tracking-tight sticky top-32">
              The Narrative
            </h3>
          </div>
          <div className="lg:col-span-8 space-y-32">
            <div>
              <span className="font-mono text-[10px] text-border-gray uppercase tracking-widest block mb-8">
                01 / The Problem
              </span>
              <p className="font-sans text-xl sm:text-2xl text-muted-silver leading-relaxed font-light">
                {study.problem}
              </p>
            </div>

            <div>
              <span className="font-mono text-[10px] text-border-gray uppercase tracking-widest block mb-8">
                02 / The Architecture
              </span>
              <p className="font-sans text-xl sm:text-2xl text-muted-silver leading-relaxed font-light mb-12">
                {study.architecture}
              </p>
              <ArchitectureBlueprint />
            </div>

            <div>
              <span className="font-mono text-[10px] text-border-gray uppercase tracking-widest block mb-8">
                03 / The Outcome
              </span>
              <p className="font-sans text-xl sm:text-2xl text-muted-silver leading-relaxed font-light">
                {study.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 border-t border-border-gray px-6 sm:px-12 lg:px-24 text-center">
        <Link
          to="/archive"
          className="group inline-flex flex-col items-center gap-8"
        >
          <span className="font-sans text-xs uppercase tracking-widest text-muted-silver group-hover:text-bone transition-colors">
            Next Project
          </span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-8xl font-light text-bone uppercase tracking-tighter group-hover:opacity-50 transition-opacity">
            View Archive
          </h2>
          <ArrowDown className="w-12 h-12 text-border-gray group-hover:translate-y-4 transition-transform duration-500" />
        </Link>
      </section>
    </div>
  );
}
