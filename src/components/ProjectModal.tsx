'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Globe, FolderKanban } from 'lucide-react';
import { useEffect, useState, ReactNode } from 'react';
import Image from 'next/image';

export interface PortfolioProject {
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  codeUrl: string;
  liveUrl: string;
  techStack: {
    frontend: string[];
    backend: string[];
    devops: string[];
  };
  features: {
    icon: ReactNode;
    title: string;
    description: string;
  }[];
  highlights: string[];
  images: string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: PortfolioProject;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setSelectedImageIndex(0);
    }
  }, [isOpen, project.title]);

  useEffect(() => {
    if (isOpen || isImageModalOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isImageModalOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
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
          key="project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-start sm:items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[94dvh] sm:max-h-[90vh] overflow-y-auto my-2 sm:my-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FolderKanban className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white break-words">{project.title}</h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-words">{project.category}</p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300"
                  title="View source code on GitHub"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">View Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-blue-100 dark:bg-blue-900 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors text-sm font-medium text-blue-700 dark:text-blue-300"
                  title="Visit live website"
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">Live Demo</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Screenshots</h3>
              <div className="relative">
                <div className="relative h-64 sm:h-80 md:h-96 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  {project.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={800}
                      height={600}
                      className={`absolute inset-0 w-full h-full object-contain transition-all duration-300 ${
                        index === currentImageIndex ? 'opacity-100 cursor-pointer hover:scale-105' : 'opacity-0 pointer-events-none'
                      }`}
                      onClick={() => {
                        if (index === currentImageIndex) {
                          openImageModal(currentImageIndex);
                        }
                      }}
                      title="Click to enlarge image"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 z-20"
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
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 z-20"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{project.description}</p>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">Live Demo</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">Experience the full application in action</p>
                    </div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                    >
                      <Globe className="w-4 h-4" />
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

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
                        <div className="text-blue-600 dark:text-blue-400">{feature.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{feature.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Technology Stack</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 block">Frontend</span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.frontend.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400 mb-2 block">Backend</span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.backend.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2 block">DevOps</span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.devops.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Technical Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2"></div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {isImageModalOpen && (
        <motion.div
          key="image-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[60] p-2 sm:p-4"
          onClick={closeImageModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-[96vw] sm:max-w-[95vw] max-h-[94dvh] bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 z-10"
              title="Close enlarged image"
            >
              <X className="w-6 h-6" />
            </button>

            <Image
              src={project.images[selectedImageIndex]}
              alt={`${project.title} screenshot ${selectedImageIndex + 1} enlarged`}
              width={1200}
              height={800}
              className="max-w-full max-h-[95vh] object-contain"
              loading="lazy"
              sizes="95vw"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent text-white p-4">
              <p className="text-center text-lg font-medium">
                Image {selectedImageIndex + 1} of {project.images.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
