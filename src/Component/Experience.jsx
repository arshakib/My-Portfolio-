import { motion } from "framer-motion";

const Experience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Professional <span className="text-green-500">Experience</span>
        </motion.h2>
        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Experience 1 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-gray-800 rounded-lg shadow-md"
          >
            <div>
              <h3 className="text-2xl font-semibold">MERN Stack Developer</h3>
              <p className="text-sm text-gray-400">Freelance</p>
              <p className="text-sm text-gray-500">2023 - Present</p>
              <p className="text-gray-400 mt-2">
                Building full-stack web applications using MongoDB, Express.js,
                React.js, and Node.js.
              </p>
            </div>
            <div className="text-green-400 font-medium mt-4 md:mt-0">
              Ongoing
            </div>
          </motion.div>

          {/* Experience 2 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-gray-800 rounded-lg shadow-md"
          >
            <div>
              <h3 className="text-2xl font-semibold">Volunteer</h3>
              <p className="text-sm text-gray-400">
                YouthNet for Climate Justice
              </p>
              <p className="text-sm text-gray-500">2021 - Present</p>
              <p className="text-gray-400 mt-2">
                Contributing to climate justice initiatives by assisting with
                digital solutions.
              </p>
            </div>
            <div className="text-green-400 font-medium mt-4 md:mt-0">
              Ongoing
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
