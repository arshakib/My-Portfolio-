import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import proj1 from "../assets/1738656812954.jpg";
import proj2 from "../assets/1738428030659.jpg";
import proj3 from "../assets/1735582095901.jpg";
import proj4 from "../assets/1000116029.jpg";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

const projects = [
  {
    title: "Collaborative Study Platform",
    desc: "The Collaborative Study Platform is an interactive web application designed to facilitate online learning by connecting students and tutors. It features role-based dashboards, secure authentication, CRUD functionalities, and a responsive design. Users can participate in study sessions, manage study materials, and access a structured learning environment.",
    challenges: [
      {
        title: "Implementing TanStack Query for optimized data fetching.",
      },
      {
        title: "Creating paginated views for large datasets.",
      },
      {
        title:
          "Ensuring secure JWT-based authentication and local storage handling.",
      },
      {
        title:
          "Implementing modal popups for session rejections and feedback collection.",
      },
    ],
    plans: [
      {
        title: "Live chat integration for real-time student-tutor interaction.",
      },
      {
        title: "AI-powered session recommendations based on user preferences.",
      },
      {
        title: "Automated reminders for upcoming study sessions.",
      },
      {
        title: "Multi-language support to enhance accessibility.",
      },
    ],
    devstack: "MongoDB, Express, React, Node.js, Firebase, JWT, Stripe",
    link: "https://imaginative-chebakia-1dc907.netlify.app/",
    git: "https://github.com/arshakib/Study-Platform-client",
    src: proj1,
    type: "fullstack",
  },
  {
    title: "Volunteer Management Website",
    desc: "The Volunteer Management Website is a platform designed to streamline volunteer activities. Users can create, update, and delete volunteer posts, as well as sign up to help others. The site includes authentication, dynamic UI, pagination, and CRUD functionalities for seamless volunteer management.",
    challenges: [
      {
        title:
          "JWT Authentication & Security: Implementing proper authentication and route protection.",
      },
      {
        title:
          "Pagination: Ensuring smooth and efficient pagination for posts.",
      },
      {
        title: "Dark/Light Theme: Managing state persistence across sessions.",
      },
      {
        title:
          "CRUD Operations: Ensuring seamless database integration and UI feedback.",
      },
    ],
    plans: [
      {
        title:
          "Implement email verification and password recovery for better security.",
      },
      {
        title: "Enhance UI animations with more advanced effects.",
      },
      {
        title:
          "Introduce admin roles for moderating volunteer requests and user activity.",
      },
      {
        title:
          "Add real-time notifications for new posts and volunteer approvals.",
      },
    ],
    devstack: "MongoDB, Express, React, Node.js, Firebase, JWT",
    link: "https://heartfelt-trifle-9895a1.netlify.app/",
    git: "https://github.com/arshakib/Need-volunteer-application-client",
    src: proj2,
    type: "fullstack",
  },
  {
    title: "Chill Gamer: A Game Review Application",
    desc: "Chill Gamer is a game review platform where users can explore, add, and manage game reviews. It features secure authentication, a personalized watchlist, sorting and filtering of reviews, and a responsive, interactive UI with a dynamic dark/light theme toggle.",
    challenges: [
      {
        title:
          "Sorting & Filtering Reviews: Implementing efficient sorting and filtering on the All Reviews page.",
      },
      {
        title:
          "Review Update Modal: Creating a seamless user experience for updating reviews using a modal",
      },
      {
        title:
          "Authentication & Authorization: Managing secure Firebase authentication for different login methods.",
      },
      {
        title:
          "Deployment Issues: Ensuring Firebase and MongoDB credentials remain secure using environment variables.",
      },
    ],
    plans: [
      {
        title: "Implement real-time notifications for review interactions.",
      },
      {
        title: "Add game recommendation features based on user reviews.",
      },
      {
        title:
          "Introduce an admin panel for moderating reviews and managing users.",
      },
      {
        title: "Improve UI animations for a more engaging user experience.",
      },
    ],
    devstack: "MongoDB, Express, React, Node.js, Firebase, JWT",
    link: "https://jade-tiramisu-6c88cc.netlify.app/",
    git: "https://github.com/arshakib/Game-Review-Application-client",
    src: proj3,
    type: "fullstack",
  },
  {
    title: "TaskFlow: Task Management Application",
    desc: "TaskFlow is a modern and responsive task management application that allows users to add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into To-Do, In Progress, and Done, with real-time updates stored in a MongoDB database. User authentication is handled via Firebase Google Sign-In to ensure secure access.",
    challenges: [
      {
        title:
          "Real-Time Updates: Ensuring seamless synchronization of tasks across users.",
      },
      {
        title:
          "Drag-and-Drop Functionality: Implementing a smooth and user-friendly task reordering experience.",
      },
      {
        title: "Firebase Authentication: Secure login using Google Sign-In.",
      },
      {
        title:
          "Database Optimization: Efficiently managing task data storage and retrieval in MongoDB.",
      },
    ],
    plans: [
      {
        title:
          "Implement collaborative task management with real-time WebSockets.",
      },
      {
        title: "Enhance UI animations for better user experience.",
      },
      {
        title:
          "Introduce task deadlines and notifications for better productivity.",
      },
      {
        title: "Develop a mobile-friendly Progressive Web App (PWA) version.",
      },
    ],
    devstack: "MongoDB, Express, React, Node.js, Firebase, Socket.IO",
    link: "https://harmonious-pudding-049454.netlify.app/",
    git: "https://github.com/arshakib/TaskFlow-client",
    src: proj4,
    type: "fullstack",
  },
];

const Portfolio = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div>
      <div className=" text-white py-24 md:py-64" id="portfolio">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold text-center mb-16">
            Selected <span className=" text-emerald-300">Projects</span>
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div
                  className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border ☐ border-white/10"
                  onClick={() => toggleExpand(index)}
                >
                  <h3 className="text-4xl font-semibold">{project.title}</h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-light text-emerald-300">
                      0{index + 1}
                    </span>
                    <FiChevronDown
                      className={`w-6 h-6 transform transition-transform ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 ☐ bg-black/20 border border-white/10"
                    >
                      <div className="flex flex-col md:flex-row gap-8">
                        <img
                          src={project.src}
                          alt={project.title}
                          className="w-full md:w-1/2 h-auto object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <p className=" text-white/70 mb-4">{project.desc}</p>
                          <p className=" text-emerald-300 font-medium mt-3 mb-1">
                            Challenges Faced
                          </p>
                          {project.challenges.map((challenge, index) => (
                            <p key={index} className="text-white/70 mb-4">
                              {challenge.title}
                            </p>
                          ))}
                          <p className=" text-emerald-300 font-medium mt-3 mb-1">
                            Future Plans
                          </p>
                          {project.plans.map((plans, index) => (
                            <p key={index} className="text-white/70 mb-4">
                              {plans.title}
                            </p>
                          ))}
                          <p className=" text-emerald-300 font-medium mb-2">
                            Stack: {project.devstack}
                          </p>
                        </div>
                        <p className="text-emerald-400/60 font-medium mb-4 capitalize">
                          Type: {project.type}
                        </p>
                        <div className="flex justify-start items-center space-x-4">
                          <a
                            target="_blank"
                            href={project.link}
                            className="text-emerald-400 hover:text-blue-300 transition-colors"
                          >
                            <HiOutlineExternalLink />
                          </a>
                          <a
                            target="_blank"
                            href={project.git}
                            className="text-gray-400 hover:text-gray-300 transition-colors"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
