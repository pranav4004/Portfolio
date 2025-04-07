import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleResumeClick, handleContactScroll }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { name: "Work", onClick: handleWorkScroll },
    { name: "Resume", onClick: handleResumeClick },
    { name: "Contact", onClick: handleContactScroll }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <>
      <div className="block tablet:hidden mt-5">
        <div className="flex items-center justify-between p-2 laptop:p-0">
          <h1
            onClick={() => router.push("/")}
            className="font-medium p-2 laptop:p-0 link"
          >
            {router.asPath === "/resume" ? "Resume" : "Portfolio"}
          </h1>

          <div className="flex items-center">
            {mounted && theme && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt={`${theme === "dark" ? "Dark mode" : "Light mode"} icon`}
                  width={24}
                  height={24}
                />
              </Button>
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 p-2 focus:outline-none"
            >
              {isMenuOpen ? (
                <IoClose className="w-8 h-8 text-black dark:text-white" />
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <span 
                    className={`block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 ease-out ${
                      isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
                  ></span>
                  <span ko
                    className={`block h-0.5 w-6 bg-black dark:bg-white my-0.5 transition-opacity duration-300 ${
                      isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  ></span>
                  <span 
                    className={`block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 ease-out ${
                      isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
                  ></span>
                </div>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-40 flex items-center justify-center"
            >
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col items-center justify-center space-y-10"
              >
                {menuItems.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="overflow-hidden"
                  >
                    <motion.button
                      onClick={() => {
                        item.onClick();
                        setIsMenuOpen(false);
                      }}
                      className="text-5xl font-bold text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors relative group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {router.asPath === "/resume" ? "Resume" : "Portfolio"}
        </h1>
        <div className="flex">
          <Button onClick={handleWorkScroll}>Work</Button>
          <Button onClick={handleResumeClick}>Resume</Button>
          <Button onClick={handleContactScroll}>Contact</Button>
          {mounted && theme && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Image
                className="h-6"
                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                alt={`${theme === "dark" ? "Dark mode" : "Light mode"} icon`}
                width={24}
                height={24}
              />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
