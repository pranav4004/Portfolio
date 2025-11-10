import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/data/projects";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight font-bold mb-3 sm:mb-4 text-center"
        >
          Selected Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base text-muted-foreground text-center mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4"
        >
          Enterprise-grade solutions delivering measurable business impact—reducing costs, increasing efficiency, and driving revenue growth for clients across healthcare, retail, and real estate.
        </motion.p>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project.id)}
              className="group cursor-pointer"
            >
              <div className="bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden hover:border-accent transition-all duration-300 h-full flex flex-col touch-manipulation">
                <div className="p-3 sm:p-4 md:p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-sm sm:text-base md:text-lg lg:text-xl font-semibold uppercase tracking-tight mb-1.5 sm:mb-2 group-hover:text-accent transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-2 sm:mb-3">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[9px] sm:text-[10px] md:text-xs px-1 sm:px-1.5 md:px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-auto text-[10px] sm:text-xs text-primary hover:underline inline-flex items-center gap-1 sm:gap-2 pt-2 sm:pt-3 border-t border-border/50"
                    >
                      Visit link
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="w-[calc(100%-1rem)] max-w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-card border-border max-h-[85vh] overflow-y-auto p-3 sm:p-4 md:p-6 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <DialogHeader className="mb-3 sm:mb-4 md:mb-6">
            <DialogTitle className="font-display text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-tight pr-2 sm:pr-4 leading-tight">
              {selectedProjectData?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div className="text-muted-foreground leading-relaxed space-y-3 sm:space-y-4 md:space-y-5">
              {selectedProjectData?.fullDescription.split('\n\n').map((paragraph, index) => {
                const isSectionHeader = paragraph.startsWith('My solution:') || paragraph.startsWith('Business Impact:') || paragraph.startsWith('Technical Excellence:');
                return (
                  <div key={index} className={isSectionHeader ? 'mb-2 sm:mb-3 md:mb-4' : ''}>
                    {isSectionHeader ? (
                      <h4 className="font-semibold text-foreground mb-1.5 sm:mb-2 md:mb-3 text-xs sm:text-sm md:text-base">
                        {paragraph.split(':')[0]}:
                      </h4>
                    ) : null}
                    <p className={isSectionHeader ? 'text-[11px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed' : 'text-[11px] sm:text-xs md:text-sm leading-relaxed'}>
                      {isSectionHeader ? paragraph.substring(paragraph.indexOf(':') + 1).trim() : paragraph}
                    </p>
                  </div>
                );
              })}
            </div>
            {selectedProjectData?.url && (
              <div className="pt-2 sm:pt-3 md:pt-4 border-t border-border/50">
                <a
                  href={selectedProjectData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs md:text-sm font-medium"
                >
                  Visit Website
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
            <div className="pt-2 sm:pt-3 md:pt-4 border-t border-border/50">
              <h4 className="font-display text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mb-1.5 sm:mb-2 md:mb-3 text-accent">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                {selectedProjectData?.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-[9px] sm:text-[10px] md:text-xs px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
