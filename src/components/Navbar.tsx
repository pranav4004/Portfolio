import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/25 backdrop-blur-xl" : "bg-background/5 backdrop-blur"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center h-16 sm:h-20 lg:h-24 pt-2 sm:pt-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm uppercase tracking-wider font-display z-10"
            >
              Pranav Sampat
            </motion.div>

            {/* Desktop Navigation (center pill) */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center">
              <div
                className={`flex items-center gap-2 rounded-[999px] px-4 py-2 transition-all duration-300 shadow-sm ring-1 ${
                  scrolled
                    ? "bg-background/40 border border-border/40 ring-border/30 hover:ring-border/50"
                    : "bg-background/20 border border-border/30 ring-border/20 hover:ring-border/40"
                }`}
              >
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm px-6 py-2 rounded-full transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-sm px-6 py-2 rounded-full transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-sm px-6 py-2 rounded-full transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm px-6 py-2 rounded-full transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Right CTA */}
            <div className="hidden lg:flex items-center ml-auto z-10">
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm px-6 py-2 rounded-full border border-border/40 transition-all duration-300 hover:bg-primary/10 hover:border-primary/40 hover:text-primary"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden ml-auto p-2 rounded-full border border-border/50 transition-all duration-300 hover:bg-primary/10 z-10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/98 backdrop-blur-lg pt-24 px-6 pb-8 overflow-y-auto">
              <div className="flex flex-col items-center gap-4 sm:gap-6 min-h-full">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-xl sm:text-2xl uppercase tracking-wider font-display transition-colors duration-300 hover:text-primary touch-manipulation min-h-[44px] w-full max-w-xs text-center"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-xl sm:text-2xl uppercase tracking-wider font-display transition-colors duration-300 hover:text-primary touch-manipulation min-h-[44px] w-full max-w-xs text-center"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-xl sm:text-2xl uppercase tracking-wider font-display transition-colors duration-300 hover:text-primary touch-manipulation min-h-[44px] w-full max-w-xs text-center"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-xl sm:text-2xl uppercase tracking-wider font-display transition-colors duration-300 hover:text-primary touch-manipulation min-h-[44px] w-full max-w-xs text-center"
                >
                  Contact
                </button>

                <a
                  href="/pranav_resume.pdf"
                  download="Pranav_Sampat_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 sm:mt-6 text-sm uppercase tracking-wider px-8 py-3 rounded-full border border-border/50 transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:text-primary touch-manipulation min-h-[44px] flex items-center justify-center w-full max-w-xs"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
