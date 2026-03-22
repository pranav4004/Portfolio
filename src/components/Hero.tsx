import { motion } from "motion/react";
import { Download, ArrowDownRight } from "lucide-react";

export default function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-[15vh] pb-[4vh] px-fluid bg-obsidian"
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-industrial-blue/20 to-transparent blur-[100px]"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Giant Typography */}
        <div
          id="hero-title"
          className="overflow-visible"
        >
          <h1 className="font-display font-light leading-[0.82] tracking-tighter text-bone uppercase">
            Pranav
            <br />
            <span className="ml-[8vw] text-transparent bg-clip-text bg-gradient-to-r from-bone to-muted-silver">
              Sampat.
            </span>
          </h1>
        </div>

        {/* Sub-headline & CTAs Block */}
        <div
          className="max-w-3xl ml-auto border-l border-border-gray/50 pl-8 sm:pl-12"
        >
          <p className="font-sans text-muted-silver font-light leading-[1.1] tracking-tight mb-8">
            Full-Stack Architecture. <br />
            AI Integration. <br />
            Intelligent Automation.
          </p>

          <div className="flex flex-wrap gap-6">
            <button
              onClick={scrollToWork}
              className="group flex items-center gap-4 px-8 py-4 rounded-full bg-bone text-obsidian font-sans text-sm font-medium uppercase tracking-widest hover:bg-white transition-all duration-500"
            >
              View the Work
              <ArrowDownRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
            </button>

            <a
              href="/PRANAV_RESUME_CELONIS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-4 rounded-full border border-border-gray text-bone font-sans text-sm font-medium uppercase tracking-widest hover:bg-white/5 transition-all duration-500"
            >
              Download Resume
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-wrap justify-between items-end gap-12 border-t border-border-gray/20 pt-8"
      >
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-mono text-border-gray uppercase tracking-widest">
            Role
          </span>
          <span className="text-xs sm:text-sm font-mono text-muted-silver uppercase tracking-widest">
            Product Architect
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-mono text-border-gray uppercase tracking-widest">
            Focus
          </span>
          <span className="text-xs sm:text-sm font-mono text-muted-silver uppercase tracking-widest">
            AI & Automation
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-mono text-border-gray uppercase tracking-widest">
            Location
          </span>
          <span className="text-xs sm:text-sm font-mono text-muted-silver uppercase tracking-widest">
            Bengaluru, IN
          </span>
        </div>
      </motion.div>
    </section>
  );
}


