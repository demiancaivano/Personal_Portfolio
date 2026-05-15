'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Eye,
  Globe,
  ChevronLeft,
  ChevronRight,
  KanbanSquare,
  ShoppingCart,
  Shield,
  CreditCard,
  Search,
  Star,
  LayoutDashboard,
  ListChecks,
  Users,
  UserCircle2,
  BarChart3
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import ProjectModal, { PortfolioProject } from './ProjectModal';

export default function Projects() {
  const projects: PortfolioProject[] = [
    {
      title: 'TaskCraft',
      category: 'Project Management Platform',
      shortDescription:
        'Full-stack task and project management platform with role-based collaboration, Kanban workflows, and a responsive dashboard for team productivity.',
      description:
        'TaskCraft is a full-stack web application designed to manage projects, teams, and task workflows with clean architecture, scalability, and production-ready backend design. It implements role-based collaboration where users can create projects, manage team members, and track tasks through a Kanban-style lifecycle.',
      codeUrl: 'https://github.com/demiancaivano/Task-Craft',
      liveUrl: 'https://delightful-ground-09ec12003.7.azurestaticapps.net/',
      techStack: {
        frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Component-based Architecture'],
        backend: ['ASP.NET Core Web API', 'Service-layer Architecture', 'Role-based Authorization', 'RESTful API'],
        devops: ['Azure Static Web Apps', 'Environment-based Configuration', 'Git', '.NET CLI']
      },
      features: [
        {
          icon: <Shield className="w-5 h-5" />,
          title: 'Authentication & Authorization',
          description: 'Protected routes with role-based access control for secure collaboration.'
        },
        {
          icon: <KanbanSquare className="w-5 h-5" />,
          title: 'Kanban Workflow',
          description: 'Task lifecycle management with To Do, In Progress, and Done states.'
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: 'Project & Team Management',
          description: 'Create projects, add members, and organize responsibilities efficiently.'
        },
        {
          icon: <ListChecks className="w-5 h-5" />,
          title: 'Task Assignment & Detail Views',
          description: 'Assign tasks to members and inspect complete task information quickly.'
        },
        {
          icon: <UserCircle2 className="w-5 h-5" />,
          title: 'User Profile Management',
          description: 'Personal profile management integrated into the platform experience.'
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: 'Productivity Dashboard',
          description: 'High-level project overview and performance tracking from one place.'
        }
      ],
      highlights: [
        'Service-layer backend architecture focused on maintainability and testability',
        'Structured REST API design with clear authentication and authorization boundaries',
        'Role-based collaboration model for project ownership and team operations',
        'Component-driven SPA architecture optimized for responsiveness and usability',
        'Scalable foundation prepared for future modules and team growth',
        'Production deployment on Azure Static Web Apps for reliable delivery'
      ],
      images: [
        '/task-craft/TaskCraft-Dashboard.png',
        '/task-craft/TaskCraft-Projects.png',
        '/task-craft/TaskCraft-Single-Project.png',
        '/task-craft/TaskCraft-Project-Members.png',
        '/task-craft/TaskCraft-My-Profile.png',
        '/task-craft/TaskCraft-Login.png',
        '/task-craft/TaskCraft-Mobile.png'
      ]
    },
    {
      title: 'Dr_Shopper',
      category: 'E-commerce Platform',
      shortDescription:
        'Modern full-stack e-commerce platform with advanced features including secure payments, admin panel, and user management.',
      description:
        'Complete e-commerce web application developed with modern full-stack architecture that provides a comprehensive online shopping platform with advanced product management, shopping cart, payment processing, and administration features.',
      codeUrl: 'https://github.com/demiancaivano/Dr_Shopper',
      liveUrl: 'https://dr-shopper.onrender.com/',
      techStack: {
        frontend: ['React 19', 'Vite', 'TailwindCSS', 'React Router Dom', 'Stripe.js', 'Context API'],
        backend: ['Flask', 'SQLAlchemy', 'PostgreSQL', 'Flask-JWT-Extended', 'Flask-CORS', 'Stripe API'],
        devops: ['Git', 'Render', 'Gunicorn', 'Alembic', 'Python venv']
      },
      features: [
        {
          icon: <ShoppingCart className="w-5 h-5" />,
          title: 'Complete E-commerce',
          description: 'Full system with product catalog, shopping cart, and checkout.'
        },
        {
          icon: <Shield className="w-5 h-5" />,
          title: 'Secure Authentication',
          description: 'JWT, registration, login, password recovery, and email verification.'
        },
        {
          icon: <CreditCard className="w-5 h-5" />,
          title: 'Integrated Payments',
          description: 'Secure payment processing integrated with Stripe.'
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: 'Admin Panel',
          description: 'Complete management of products, categories, brands, and orders.'
        },
        {
          icon: <Star className="w-5 h-5" />,
          title: 'Review System',
          description: 'Product ratings and reviews by users.'
        },
        {
          icon: <Search className="w-5 h-5" />,
          title: 'Advanced Search',
          description: 'Filters by categories, brands, prices, and autocomplete.'
        }
      ],
      highlights: [
        'Modern full-stack architecture with clear frontend/backend separation',
        'Well-documented REST API with endpoints',
        'Token-based authentication with automatic refresh',
        'Complete validation on both frontend and backend',
        'Optimized user experience with fast loading',
        'Automated deployment configured on Render'
      ],
      images: [
        '/dr-shopper/dr-shopper-Landing.png',
        '/dr-shopper/dr-shopper-Category-phones.png',
        '/dr-shopper/dr-shopper-Product.png',
        '/dr-shopper/dr-shopper-Cart.png',
        '/dr-shopper/dr-shopper-Checkout.png',
        '/dr-shopper/dr-shopper-Manage.png',
        '/dr-shopper/dr-shopper-orders.png',
        '/dr-shopper/dr-shopper-Reviews.png'
      ]
    }
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentProject = projects[currentProjectIndex];

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
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

        {/* Featured Project Carousel Controls */}
        <div className="flex items-center justify-end mb-4 gap-3">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {currentProjectIndex + 1} / {projects.length}
          </span>
          <button
            onClick={goToPreviousProject}
            className="p-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={goToNextProject}
            className="p-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Featured Project */}
        <motion.div
          key={currentProject.title}
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
                src={currentProject.images[0]}
                alt={`${currentProject.title} preview`}
                width={600}
                height={400}
                className="w-full h-full object-cover object-left"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              {/* Overlay con información */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-start p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{currentProject.title}</h3>
                  <p className="text-blue-100 drop-shadow-lg">{currentProject.category}</p>
                </div>
              </div>
            </div>

            {/* Project Information */}
            <div className="p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {currentProject.title}
                </h3>
                <div className="flex space-x-3">
                  <a 
                    href={currentProject.codeUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300"
                    title="View source code on GitHub"
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                  <a 
                    href={currentProject.liveUrl}
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
                {currentProject.shortDescription}
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {[...currentProject.techStack.frontend.slice(0, 3), ...currentProject.techStack.backend.slice(0, 3)].map((tech) => (
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

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={currentProject}
      />
    </section>
  );
}