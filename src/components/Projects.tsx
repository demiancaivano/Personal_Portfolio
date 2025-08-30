'use client';

import { motion } from 'framer-motion';
import { Github, Eye, Globe } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const project = {
    title: "Dr_Shopper",
    shortDescription: "Modern full-stack e-commerce platform with advanced features including secure payments, admin panel, and user management.",
    techStack: ["React 19", "Flask", "PostgreSQL", "Stripe", "JWT", "TailwindCSS"]
  };

  return (
    <section id="projects" className="py-8 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-12 lg:px-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my featured projects that demonstrate my full-stack development experience
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Project Image/Preview */}
            <div className="relative h-64 lg:h-full overflow-hidden bg-gray-200 dark:bg-gray-700">
              <Image
                src="/dr-shopper-Landing.png"
                alt="Dr_Shopper Landing Page - E-commerce platform screenshot"
                width={600}
                height={400}
                className="w-full h-full object-cover object-left"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              {/* Overlay con información */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-start p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{project.title}</h3>
                  <p className="text-blue-100 drop-shadow-lg">E-commerce Platform</p>
                </div>
              </div>
            </div>

            {/* Project Information */}
            <div className="p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/demiancaivano/Dr_Shopper" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300"
                    title="View source code on GitHub"
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                  <a 
                    href="https://dr-shopper.onrender.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-blue-100 dark:bg-blue-900 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors text-sm font-medium text-blue-700 dark:text-blue-300"
                    title="Visit live website"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="hidden sm:inline">Live Site</span>
                  </a>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Details Button */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View Full Details
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I&apos;m continuously working on exciting new projects. 
              Stay tuned for upcoming innovations!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-blue-600/20"
            >
              Let&apos;s discuss your next project
            </a>
          </div>
        </motion.div>
      </div>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}