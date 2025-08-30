'use client';

import { motion } from 'framer-motion';
import { Code, Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:demian.caivano@gmail.com",
      label: "Email"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/demiancaivano/",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/demiancaivano",
      label: "GitHub"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-3">
      <div className="container mx-auto px-12 lg:px-16">
        {/* Single Row Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo and description */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold">Demian Caivano</span>
              <p className="text-gray-400 text-sm">Full Stack Developer</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
