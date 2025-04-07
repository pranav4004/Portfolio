import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ClientsSection = () => {
  const clients = [
    {
      id: 1,
      title: 'Madan Jewellers',
      subtitle: 'Inventory Software & Website',
      image: '/images/clients/client1.png',
      description: 'Developed comprehensive inventory management software and website for jewelry business'
    },
    {
      id: 2,
      title: 'Aina Gold',
      subtitle: 'Inventory Management',
      image: '/images/clients/client2.jpg',
      description: 'Created specialized inventory software for gold and jewelry business'
    },
    {
      id: 3,
      title: 'Batwebs',
      subtitle: 'Project Management',
      image: '/images/clients/client3.png',
      description: 'Led project management initiatives during internship'
    },
    {
      id: 4,
      title: 'Quotr',
      subtitle: 'Project Development',
      image: '/images/clients/client4.svg',
      description: 'Contributed to project development and implementation'
    }
  ];

  return (
    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
      <motion.h1 
        className="text-2xl text-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Clients & Experiences
      </motion.h1>

      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-full h-40 mb-4 relative overflow-hidden rounded-lg bg-gray-50 dark:bg-slate-700 flex items-center justify-center">
              <Image 
                src={client.image} 
                alt={client.title}
                className="w-auto h-auto max-w-full max-h-full object-contain p-4"
                width={200}
                height={160}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-400">${client.title.charAt(0)}</div>`;
                }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">{client.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-2">{client.subtitle}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 text-center">{client.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection; 