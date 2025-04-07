import React, { useState } from "react";
import Socials from "../Socials";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaCalendarAlt, FaEnvelope } from "react-icons/fa";
import { InlineWidget } from "react-calendly";

const Footer = ({}) => {
  const [showCalendly, setShowCalendly] = useState(false);

  const contactOptions = [
    {
      icon: <FaPhone className="h-8 w-8 text-gray-700 dark:text-gray-200" />,
      title: "Call Me",
      link: "tel:+916363097307",
      description: "Let's talk directly"
    },
    {
      icon: <FaEnvelope className="h-8 w-8 text-gray-700 dark:text-gray-200" />,
      title: "Email Me",
      link: "mailto:pranavsampat123@gmail.com",
      description: "Send me an email"
    },
    {
      icon: <FaCalendarAlt className="h-8 w-8 text-gray-700 dark:text-gray-200" />,
      title: "Schedule Meeting",
      onClick: () => setShowCalendly(true),
      description: "Book a time slot"
    },
    {
      icon: <FaWhatsapp className="h-8 w-8 text-gray-700 dark:text-gray-200" />,
      title: "WhatsApp",
      link: "https://wa.me/916363097307",
      description: "Chat with me"
    }
  ];

  return (
    <div className="mt-20 laptop:mt-40 p-2 laptop:p-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl text-bold text-center mb-10">Let&apos;s Connect</h1>
        
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              onClick={option.onClick || (() => window.open(option.link, '_blank'))}
              className="group flex flex-col items-center p-6 rounded-xl bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-slate-700 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-50 dark:bg-slate-700 rounded-full group-hover:bg-gray-100 dark:group-hover:bg-slate-600 transition-colors duration-300">
                {option.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">{option.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{option.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Socials />
        </div>
      </motion.div>

      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 w-full max-w-4xl h-[600px] relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <InlineWidget url="https://calendly.com/pranavsampat123" />
          </div>
        </div>
      )}

      <motion.h1 
        className="text-sm text-bold mt-10 p-2 laptop:p-0 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Made by {" "}
        <Link href="">
          <a className="underline underline-offset-1">Pranav Sampat</a>
        </Link>
      </motion.h1>
    </div>
  );
};

export default Footer;

