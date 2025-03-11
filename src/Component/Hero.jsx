import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";

const Hero = () => {
  // const handleDownload = () => {
  //   console.log("download");
  //   const link = document.createElement("a");
  //   link.href = "/public/devcv22.pdf";
  //   link.download = "ARSHAKIB_CV.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  return (
    <div className="relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,_#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]">
      <div className="absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_85%,#249974)] top-[450px] border-[1px] border-[#8CD6DE]/30"></div>

      <div className="container relative mx-auto px-4 pt-12 pb-24">
        <div className="flex flex-col items-center justify-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 mt-24"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full blur-3xl">
              {" "}
            </div>
            <img
              src={profilepic}
              alt="Profile"
              className="w-[250px] relative z-10"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className=""></h1>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
              Hi, I am <br /> Ashiqur Rahman{" "}
              <span className="text-emerald-400">Shakib</span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
              I am a Front-End focused MERN stack developer, focusing on
              creating websites that provides user with best experience.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-emerald-500 rounded-full font-medium hover:bg-emerald-600 scale-100 hover:scale-105 transition-transform duration-300">
                <a href="/public/ARS_resume.pdf" download="ARSHAKIB_RESUME.pdf">
                  Download Resume
                </a>
              </button>
              <button className="px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors">
                😊нєℓℓσ
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-16 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-xl -z-0 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Hero;
