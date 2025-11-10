import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center"
        >
          <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight font-bold">
              About
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I'm a Bangalore-based Full Stack Developer with 3+ years' experience building products across healthcare, ERP, fashion, and AI. I design and deliver systems that automate workflows, scale reliably, and blend engineering with design clarity.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              My approach combines technical precision with a focus on user experience, creating solutions that are both powerful and intuitive. I believe the best systems are invisible to users but indispensable to operations.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-square order-1 md:order-2 w-full max-w-md mx-auto md:max-w-none"
          >
            <img
              src="/profile_pic_2.png"
              alt="Pranav Sampat"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
