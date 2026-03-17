import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Conceptual Architecture",
    description:
      "Translating complex business requirements into robust, scalable system blueprints. Focusing on data flow, security, and long-term viability.",
  },
  {
    number: "02",
    title: "UI/UX & Prototyping",
    description:
      "Crafting premium, intuitive interfaces. Prioritizing user psychology, accessibility, and fluid micro-interactions for a flawless experience.",
  },
  {
    number: "03",
    title: "Full-Stack Engineering",
    description:
      "Building resilient backends and performant frontends. Utilizing modern frameworks and cloud infrastructure for seamless deployment.",
  },
  {
    number: "04",
    title: "Optimization & Scale",
    description:
      "Ensuring peak Core Web Vitals, database query optimization, and implementing CI/CD pipelines for continuous, reliable delivery.",
  },
];

export default function Expertise() {
  return (
    <section className="py-32 bg-obsidian">
      <div className="container-fluid">
        <div
          className="mb-24"
        >
          <h2 className="font-display font-light text-bone uppercase tracking-tight">
            Expertise & Approach
          </h2>
          <div className="w-full h-[1px] bg-border-gray mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="flex flex-col group"
            >
              <div className="font-display text-6xl sm:text-7xl lg:text-8xl font-light text-border-gray group-hover:text-muted-silver transition-colors duration-500 mb-8">
                {step.number}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-bone mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-muted-silver font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
