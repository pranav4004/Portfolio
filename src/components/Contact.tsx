import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase tracking-tight font-bold px-4">
            Let's Build Something Real.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Available for freelance projects, collaborations, or full-time opportunities.
          </p>

          <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-muted-foreground"
            >
              <a
                href="mailto:pranavsampat123@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-300 text-sm sm:text-base break-all px-4"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>pranavsampat123@gmail.com</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-4 sm:gap-6"
            >
              <a
                href="https://github.com/pranav4004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-base touch-manipulation min-h-[44px]"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/pranavsampat4004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-base touch-manipulation min-h-[44px]"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>LinkedIn</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 sm:pt-8 px-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg uppercase tracking-wide transition-all duration-300 hover:scale-105 min-h-[44px]"
              >
                <a href="mailto:pranavsampat123@gmail.com">Let's Talk</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
