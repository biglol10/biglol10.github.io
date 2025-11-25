import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
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
                  <p className="text-xs text-gray-500">2010. 03. ~ 2018. 08.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
