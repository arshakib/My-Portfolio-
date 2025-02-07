import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Developer",
      company: "SkyrocketCoach",
      date: "2023 - 2024",
      description:
        "Developed modern web applications using React, Node.js, MongoDB and also in WordPress.",
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Dainik Vorer Angikar News Media",
      date: "2023 - 2024",
      description:
        "Specialized in crafting responsive, user-friendly interfaces using React and TailwindCSS.",
    },
    {
      id: 3,
      title: "Web Developer",
      company: "Freelancing",
      date: "2021 - present",
      description:
        "Assisted in building prototypes and contributed to early-stage projects.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-16 bg-gray-900 text-white overflow-x-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full hidden md:block pointer-events-none"></div>

          {/* Timeline Items */}
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={`flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } relative mb-12`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Content Container */}
              <div
                className={`w-full md:w-5/12 bg-gray-800 p-6 rounded-lg shadow-md relative ${
                  index % 2 === 0 ? "md:ml-auto md:mr-6" : "md:mr-auto md:ml-6"
                }`}
              >
                <h3 className="text-2xl font-semibold">{experience.title}</h3>
                <p className="text-gray-400">{experience.company}</p>
                <p className="text-gray-500 text-sm mt-1">{experience.date}</p>
                <p className="text-gray-300 mt-4">{experience.description}</p>
              </div>

              {/* Circle Marker */}
              <div
                className="w-6 h-6 bg-green-500 rounded-full absolute top-1/2 transform -translate-y-1/2 hidden md:block"
                style={{ left: "50%" }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
