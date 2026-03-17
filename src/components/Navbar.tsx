import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Link, useLocation } from "react-router-dom";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Work", href: "/#work" },
  { name: "Expertise", href: "/#expertise" },
  { name: "Insights", href: "/#insights" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFullName, setShowFullName] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the hero title is NOT intersecting (scrolled past), show full name
        setShowFullName(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px", // Account for navbar height
      }
    );

    const heroTitle = document.getElementById("hero-title");
    if (heroTitle) {
      observer.observe(heroTitle);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Handle hash scroll after navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 sm:px-12 lg:px-[4vw] py-8",
          scrolled ? "bg-obsidian/80 backdrop-blur-md py-6" : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="relative font-display text-xl font-medium text-bone tracking-tighter uppercase h-8 flex items-center overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!showFullName ? (
                <motion.span
                  key="monogram"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="block"
                >
                  PS.
                </motion.span>
              ) : (
                <motion.span
                  key="fullname"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="block whitespace-nowrap"
                >
                  Pranav Sampat
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-border-gray hover:bg-bone hover:text-obsidian transition-all duration-300 font-sans text-sm uppercase tracking-widest">
              Resume
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-bone p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-obsidian flex flex-col p-6 sm:p-12"
          >
            <div className="flex justify-between items-center mb-24">
              <span className="font-display text-xl font-medium text-bone tracking-tighter uppercase">
                {!showFullName ? "PS." : "Pranav Sampat"}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-bone p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                    className="font-display text-6xl sm:text-8xl font-light text-bone uppercase tracking-tighter hover:text-muted-silver transition-colors block"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-border-gray flex justify-between items-end">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-muted-silver uppercase tracking-widest">Connect</span>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/pranavsampat04" target="_blank" rel="noopener noreferrer" className="text-bone hover:text-muted-silver transition-colors">LinkedIn</a>
                  <a href="https://github.com/pranav4004" target="_blank" rel="noopener noreferrer" className="text-bone hover:text-muted-silver transition-colors">GitHub</a>
                </div>
              </div>
              <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-bone text-obsidian font-sans text-sm uppercase tracking-widest">
                Resume <Download className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Link to={href}>
      <motion.span
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="relative block font-sans text-sm font-light text-bone uppercase tracking-widest hover:text-muted-silver transition-colors"
      >
        {children}
      </motion.span>
    </Link>
  );
};
