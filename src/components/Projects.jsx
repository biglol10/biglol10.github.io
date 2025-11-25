import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/portfolioData';

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          {project.period && (
            <span className="text-xs text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap ml-2">
              {project.period}
            </span>
          )}
        </div>
        
        <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
        
        {/* 기본 표시되는 태그 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full border border-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* 더보기 시 상세 내용 */}
        <AnimatePresence>
          {isExpanded && project.details && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4 overflow-hidden"
            >
              {/* 프로젝트 개요 */}
              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-bold text-gray-800 mb-2">프로젝트 개요</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{project.details.overview}</p>
                
                {project.details.role && (
                  <div className="mt-3">
                    <span className="text-xs font-bold text-gray-700">역할: </span>
                    <span className="text-xs text-gray-600">{project.details.role}</span>
                  </div>
                )}
              </div>
              
              {/* 기술 스택 */}
              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-bold text-gray-800 mb-3">기술 스택</h4>
                <div className="flex flex-wrap gap-2">
                  {project.details.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white text-gray-700 text-xs font-medium rounded-full border border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* 전체 성과 */}
              <div className="space-y-4">
                {project.details.achievements.map((achievement, idx) => (
                  <div key={idx} className="border-l-4 border-blue-600 pl-4 py-2">
                    <h4 className="text-sm font-bold text-gray-900 mb-3">
                      {achievement.category}
                    </h4>
                    <div className="space-y-2">
                      {achievement.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">•</span>
                          <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* 더보기/접기 버튼 */}
        {project.details && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2 transition-colors"
          >
            {isExpanded ? (
              <>
                <span>접기</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                <span>상세 내용 보기</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        )}
        
        {/* 링크 버튼 */}
        <div className="flex gap-3 mt-4 pt-4 border-t border-gray-200">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors"
            >
              GitHub →
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-semibold transition-colors"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
            Side Projects
          </h2>
          
          {portfolioData.projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-700 text-lg font-medium">
                사이드 프로젝트를 추가할 예정입니다.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioData.projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
