import { motion } from "framer-motion";

const EducationalQualification = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="education" className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Educational <span className="text-green-500">Qualification</span>
        </motion.h2>
        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Degree 1 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-gray-800 rounded-lg shadow-md"
          >
            <div>
              <h3 className="text-2xl font-semibold">
                Diploma in Electrical Engineering
              </h3>
              <p className="text-sm text-gray-400">
                Barishal Polytechnic Institute, Bangladesh
              </p>
              <p className="text-sm text-gray-500">2022 - 2026 (Expected)</p>
            </div>
            <div className="text-green-400 font-medium mt-4 md:mt-0">
              Ongoing
            </div>
          </motion.div>

          {/* Degree 2 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-gray-800 rounded-lg shadow-md"
          >
            <div>
              <h3 className="text-2xl font-semibold">
                Secondary School Certificate (SSC)
              </h3>
              <p className="text-sm text-gray-400">
                Collegiate Secondary School, Barishal
              </p>
              <p className="text-sm text-gray-500">2017 - 2022</p>
            </div>
            <div className="text-green-400 font-medium mt-4 md:mt-0">
              Completed
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationalQualification;
