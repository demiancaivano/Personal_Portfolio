'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Server, Smartphone, Globe, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    {
      category: "Frontend",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["React", "JavaScript/TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      technologies: ["Flask", "Python", "Node.js", "Express.js", "REST APIs", "JWT"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      technologies: ["PostgreSQL", "SQLAlchemy", "MySQL", "MongoDB", "Redis"],
      color: "from-purple-500 to-violet-500"
    },
    {
      category: "DevOps & Tools",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["Git", "Docker", "Render", "Vercel", "Linux", "Gunicorn"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-8 bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-0">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Información personal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Code2 className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Full Stack Developer
                </h3>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I&apos;m a passionate Full Stack Developer focused on creating modern and efficient web applications. 
                My experience centers on developing complete solutions, from database design 
                to implementing intuitive user interfaces.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I specialize in technologies like <strong>React</strong> for frontend, 
                <strong> Flask</strong> for backend, and <strong>PostgreSQL</strong> for databases. 
                I enjoy working on projects that combine robust functionality with exceptional user experiences.
              </p>

              <div className="flex items-center space-x-4">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Always learning new technologies
                </span>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white mr-3`}>
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
