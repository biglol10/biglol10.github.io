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

  // 중첩된 bullet 렌더링 함수
  const renderItem = (item, itemIdx) => {
    // 중첩 구조인 경우 (객체)
    if (typeof item === 'object' && item.text) {
      return (
        <div key={itemIdx} className="space-y-2">
          <div className="flex items-start">
            <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">•</span>
            <span className="text-sm text-gray-700 leading-relaxed">{item.text}</span>
          </div>
          {item.subItems && (
            <div className="ml-6 space-y-1">
              {item.subItems.map((subItem, subIdx) => (
                <div key={subIdx} className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-0.5 flex-shrink-0">-</span>
                  <span className="text-sm text-gray-600 leading-relaxed">{subItem}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    // 단순 문자열인 경우
    return (
      <div key={itemIdx} className="flex items-start">
        <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">•</span>
        <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
      </div>
    );
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow mb-8 border border-gray-200"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
          <p className="text-sm text-blue-600 font-semibold mb-2">{project.role}</p>
        </div>
        <span className="text-sm text-gray-600 whitespace-nowrap font-medium bg-gray-100 px-4 py-1 rounded-full">
          {project.period}
        </span>
      </div>
      
      <p className="text-gray-800 mb-4 leading-relaxed">{project.description}</p>
      
      {/* 기본 표시되는 주요 성과 (3개) */}
      {!isExpanded && project.details && (
        <div className="space-y-3 mb-4">
          {project.details.achievements.slice(0, 2).map((achievement, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-center">
                <span className="text-blue-600 mr-2">•</span>
                {achievement.category}
              </h4>
              <div className="ml-4 space-y-2">
                {achievement.items.slice(0, 2).map((item, itemIdx) => {
                  // 중첩된 경우 subItems는 표시하지 않음 (접힌 상태)
                  const displayText = typeof item === 'object' && item.text ? item.text : item;
                  return (
                    <div key={itemIdx} className="flex items-start">
                      <span className="text-gray-400 mr-2 mt-0.5 flex-shrink-0">-</span>
                      <p className="text-sm text-gray-700 leading-relaxed">{displayText}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* 더보기 클릭 시 전체 상세 내용 */}
      <AnimatePresence>
        {isExpanded && project.details && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-4 overflow-hidden"
          >
            {/* 기술 스택 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
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
                    {achievement.items.map((item, itemIdx) => renderItem(item, itemIdx))}
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
      
      {/* 태그 */}
      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full border border-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
            Experience
          </h2>
          
          {portfolioData.experience.map((exp, expIndex) => (
            <div key={expIndex} className="mb-12">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2 text-gray-900">{exp.company}</h3>
                <p className="text-gray-700 font-medium">{exp.position}</p>
                <p className="text-gray-600 text-sm">{exp.period}</p>
              </div>
              
              <div className="space-y-8">
                {exp.projects.map((project, projectIndex) => (
                  <ProjectCard
                    key={projectIndex}
                    project={project}
                    index={projectIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
