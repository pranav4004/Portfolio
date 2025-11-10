import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "@/data/experience";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight font-bold mb-8 sm:mb-12 md:mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div ref={ref} className="space-y-6 sm:space-y-8 md:space-y-12 relative">
          {/* Connecting line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative md:pl-12 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-accent border-2 border-background hidden md:block -translate-x-[6px] group-hover:scale-150 transition-transform duration-300" />

              <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 hover:border-accent transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold uppercase tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-accent font-medium mb-2 sm:mb-3 text-sm sm:text-base">{exp.company}</p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
