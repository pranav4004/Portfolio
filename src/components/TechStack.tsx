import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { techStack } from "@/data/techStack";

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { name: 'Frontend', key: 'frontend' as const },
    { name: 'Backend', key: 'backend' as const },
    { name: 'Cloud & DevOps', key: 'cloud' as const },
    { name: 'Blockchain', key: 'blockchain' as const },
    { name: 'Tools', key: 'tools' as const },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight font-bold mb-8 sm:mb-12 md:mb-16 text-center"
        >
          Technical Stack
        </motion.h2>

        <div ref={ref} className="space-y-6 sm:space-y-8 md:space-y-12">
          {categories.map((category) => {
            const techs = techStack.filter(tech => tech.category === category.key);
            if (techs.length === 0) return null;
            
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-3 sm:mb-4 px-2">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
                  {techs.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group"
                    >
                      <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group-hover:scale-105">
                        <p className="font-medium text-[10px] sm:text-xs uppercase tracking-wide">
                          {tech.name}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
