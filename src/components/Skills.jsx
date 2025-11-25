import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";
import * as Icons from "./icons/TechIcons";

const SkillCard = ({ skill, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 아이콘 컴포넌트 가져오기
  const IconComponent = Icons[skill.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="group"
    >
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-400 flex flex-col items-center gap-3 h-full">
        {/* 아이콘 */}
        <div className="w-16 h-16 group-hover:scale-110 transition-transform duration-300">
          {IconComponent ? (
            <IconComponent />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-lg" />
          )}
        </div>

        {/* 스킬 이름 */}
        <h3 className="font-bold text-gray-900 text-center text-sm">
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 카테고리별로 스킬 그룹화
  const groupedSkills = portfolioData.skills.reduce((acc, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Skills
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            8년간의 개발 경험을 통해 습득한 기술 스택
          </p>

          {/* 카테고리별 스킬 */}
          {Object.entries(groupedSkills).map(
            ([category, skills], categoryIndex) => (
              <div key={category} className="mb-12 last:mb-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="mb-6"
                >
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3">
                    <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
                    {category}
                    <span className="text-sm font-normal text-gray-500">
                      ({skills.length})
                    </span>
                  </h3>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={categoryIndex * 10 + index}
                    />
                  ))}
                </div>
              </div>
            )
          )}

          {/* 자격증 */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center flex items-center justify-center gap-3">
                <span className="text-3xl">🏆</span>
                Certifications
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {portfolioData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-blue-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">
                      📜
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-gray-500">
                        {cert.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* 학교 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center flex items-center justify-center gap-3">
                <span className="text-3xl">🏆</span>
                Education
              </h3>
            </div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-blue-300"
              >
                <div className="flex items-start">
                  <div className="text-4xl flex-shrink-0">📜</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                      고려대학교
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">통계학과</p>
                    <p className="text-xs text-gray-500">
                      2010. 03. ~ 2018. 08.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
