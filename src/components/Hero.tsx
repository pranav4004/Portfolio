import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const headline = "Pranav Sampat";
  const words = headline.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 w-full translate-x-2 sm:translate-x-3 md:translate-x-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          <motion.h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl uppercase tracking-normal md:tracking-tight leading-tight md:leading-[0.9] font-bold px-2">
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-2 sm:mr-3 md:mr-4"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={wordVariants}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4"
          >
            Full Stack Developer — Software Engineer — AI & Cloud Enthusiast
          </motion.p>

          <motion.div
            variants={wordVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base uppercase tracking-wide transition-all duration-300 hover:scale-105 min-h-[44px]"
            >
              View My Work
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary rounded-2xl w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base uppercase tracking-wide transition-all duration-300 hover:scale-105 min-h-[44px]"
            >
              <a href="/pranav_resume.pdf" download="Pranav_Sampat_Resume.pdf">
                Download Resume
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="mt-6 sm:mt-8 flex justify-center cursor-pointer touch-manipulation -translate-x-1"
            onClick={scrollToProjects}
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default Hero;
