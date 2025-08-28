'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ShoppingCart, CreditCard, Shield, Search, Star, Users } from 'lucide-react';
import { useState } from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const project = {
    title: "Dr_Shopper",
    description: "Complete e-commerce web application developed with modern full-stack architecture that provides a comprehensive online shopping platform with advanced product management, shopping cart, payment processing, and administration features.",
    features: [
      {
        icon: <ShoppingCart className="w-5 h-5" />,
        title: "Complete E-commerce",
        description: "Full system with product catalog, shopping cart, and checkout"
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Secure Authentication",
        description: "JWT, registration, login, password recovery, and email verification"
      },
      {
        icon: <CreditCard className="w-5 h-5" />,
        title: "Integrated Payments",
        description: "Secure payment processing integrated with Stripe"
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Admin Panel",
        description: "Complete management of products, categories, brands, and orders"
      },
      {
        icon: <Star className="w-5 h-5" />,
        title: "Review System",
        description: "Product ratings and reviews by users"
      },
      {
        icon: <Search className="w-5 h-5" />,
        title: "Advanced Search",
        description: "Filters by categories, brands, prices, and autocomplete"
      }
    ],
    techStack: {
      frontend: ["React 19", "Vite", "TailwindCSS", "React Router Dom", "Stripe.js", "Context API"],
      backend: ["Flask", "SQLAlchemy", "PostgreSQL", "Flask-JWT-Extended", "Flask-CORS", "Stripe API"],
      devops: ["Git", "Render", "Gunicorn", "Alembic", "Python venv"]
    },
    highlights: [
      "Modern full-stack architecture with clear frontend/backend separation",
      "Well-documented REST API with endpoints",
      "Token-based authentication with automatic refresh",
      "Complete validation on both frontend and backend",
      "Optimized user experience with fast loading",
      "Automated deployment configured on Render"
    ]
  };

  const images = [
    '/dr-shopper-Landing.png',
    '/dr-shopper-Category-phones.png',
    '/dr-shopper-Product.png',
    '/dr-shopper-Cart.png',
    '/dr-shopper-Checkout.png',
    '/dr-shopper-Manage.png',
    '/dr-shopper-orders.png',
    '/dr-shopper-Reviews.png'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openImageModal = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400">E-commerce Platform</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                  <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Screenshots</h3>
              <div className="relative">
                <div className="relative h-96 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Dr_Shopper screenshot ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-contain transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'opacity-100 cursor-pointer hover:scale-105' 
                          : 'opacity-0 pointer-events-none'
                      }`}
                      onClick={() => {
                        console.log('Image clicked, index:', index, 'current:', currentImageIndex);
                        if (index === currentImageIndex) {
                          openImageModal(currentImageIndex);
                        }
                      }}
                      title="Haz clic para ampliar la imagen"
                    />
                  ))}
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 z-20"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 z-20"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                    >
                      <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <div className="text-blue-600 dark:text-blue-400">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Technology Stack</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 block">Frontend</span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.frontend.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400 mb-2 block">Backend</span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.backend.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2 block">DevOps</span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.devops.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Highlights */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Technical Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2"></div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                        {highlight}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Modal de imagen ampliada */}
      {isImageModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[60] p-4"
          onClick={closeImageModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-[95vw] max-h-[95vh] bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 z-10"
              title="Cerrar imagen ampliada"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Imagen ampliada */}
            <img
              src={images[selectedImageIndex]}
              alt={`Dr_Shopper screenshot ${selectedImageIndex + 1} ampliada`}
              className="max-w-full max-h-[95vh] object-contain"
            />
            
            {/* Información de la imagen */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent text-white p-4">
              <p className="text-center text-lg font-medium">
                Imagen {selectedImageIndex + 1} de {images.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
