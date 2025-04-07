import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", image: "/images/skills/react.svg", description: "Modern UI Development" },
        { name: "JavaScript", image: "/images/skills/javascript.svg", description: "Core Programming" },
        { name: "HTML5", image: "/images/skills/html5.svg", description: "Web Structure" },
        { name: "CSS3", image: "/images/skills/css3.svg", description: "Styling & Layout" }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", image: "/images/skills/nodejs.svg", description: "Server-side Runtime" },
        { name: "Python", image: "/images/skills/python.svg", description: "Backend Logic" },
        { name: "Django", image: "/images/skills/django.svg", description: "Web Framework" },
        { name: "Express", image: "/images/skills/express.svg", description: "API Development" }
      ]
    },
    {
      category: "Database & Cloud Services",
      items: [
        { name: "MongoDB", image: "/images/skills/mongodb.svg", description: "NoSQL Database" },
        { name: "AWS", image: "/images/skills/aws.svg", description: "Cloud Infrastructure" },
        { name: "Firebase", image: "/images/skills/firebase.svg", description: "Backend Services" },
        { name: "Supabase", image: "/images/skills/database.svg", description: "Database & Auth" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
      <motion.h1 
        className="tablet:m-10 text-2xl text-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Technical Expertise.
      </motion.h1>
      <div className="mt-5 tablet:m-10">
        {skills.map((category, index) => (
          <motion.div 
            key={index} 
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-xl font-bold mb-4">{category.category}</h2>
            <motion.div 
              className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.items.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={itemVariants}
                  className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-slate-700"
                >
                  <div className="w-16 h-16 mb-3 flex items-center justify-center bg-gray-50 dark:bg-slate-700 rounded-full">
                    {skill.image ? (
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        className="w-10 h-10"
                        width={40}
                        height={40}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentNode.innerHTML = `<span class="text-2xl font-bold">${skill.name.charAt(0)}</span>`;
                        }}
                      />
                    ) : (
                      <span className="text-2xl font-bold">{skill.name.charAt(0)}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-center">{skill.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection; 