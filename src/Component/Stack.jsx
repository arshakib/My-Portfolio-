import { useEffect } from "react";
import {
  SiFramer,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiSocketdotio,
} from "react-icons/si";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const stackItems = [
  {
    id: 1,
    name: "React",
    icon: <SiReact size={100}></SiReact>,
    color: "text-emerald-200",
  },
  {
    id: 2,
    name: "Tailwind",
    icon: <SiTailwindcss size={100}></SiTailwindcss>,
    color: "text-emerald-200",
  },
  {
    id: 3,
    name: "Javascript",
    icon: <SiJavascript size={100}></SiJavascript>,
    color: "text-emerald-200",
  },
  {
    id: 4,
    name: "Next.js",
    icon: <SiNextdotjs size={100}></SiNextdotjs>,
    color: "text-emerald-200",
  },
  {
    id: 5,
    name: "Node.js",
    icon: <SiNodedotjs size={100}></SiNodedotjs>,
    color: "text-emerald-200",
  },
  {
    id: 5,
    name: "Framer Motion",
    icon: <SiFramer size={100}></SiFramer>,
    color: "text-emerald-200",
  },
  {
    id: 5,
    name: "MongoDB",
    icon: <SiMongodb size={100}></SiMongodb>,
    color: "text-emerald-200",
  },
  {
    id: 5,
    name: "Firebase",
    icon: <SiFirebase size={100}></SiFirebase>,
    color: "text-emerald-200",
  },
  {
    id: 6,
    name: "Sockets.io",
    icon: <SiSocketdotio size={100}></SiSocketdotio>,
    color: "text-emerald-200",
  },
];

const Stack = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div>
      <section
        className="py-24 md:py-64 max-w-[1200px] mx-auto text-center"
        id="stack"
      >
        <h2 className="text-7xl text-gray-100 font-bold mb-20">My Stack</h2>
        <div className="flex flex-wrap justify-center gap-8" ref={ref}>
          {stackItems.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: (index) => ({
                  opacity: 0,
                  y: index % 2 === 0 ? -100 : 100,
                }),
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.5,
                  },
                },
              }}
              className="bg-white/10 flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`mb-4 ${item.color}`}>{item.icon}</div>
              <p className="text-white/20 text-xl">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stack;
