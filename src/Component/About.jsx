/* eslint-disable react/no-unescaped-entities */
import project1 from "../assets/proj1.jpg";
import project2 from "../assets/github.png";
const About = () => {
  return (
    <div>
      <section id="about" className=" text-white p-8">
        <h2 className="text-6xl font-bold mb-8">
          About <span className="text-emerald-300">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border ☐ border-white/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">01. Background</h3>
            <p className="text-white/50 mb-6">
              I am a passionate full-stack developer with a strong foundation in
              computer science and a love for creating innovative web solutions.
              My journey in tech started with a curiosity about how things work,
              which led me to pursue a career in web development.
            </p>
            <div className="rounded-lg p-4 mb-4 border border-white/20">
              <code className="text-emerald-200/50">
                const skills = [
                <br />
                &nbsp; &nbsp; 'JavaScript',
                <br />
                &nbsp; &nbsp; 'React',
                <br />
                &nbsp; &nbsp; 'Node.js',
                <br />
                &nbsp; &nbsp; 'Python',
                <br />
                &nbsp; &nbsp; 'SQL',
                <br />
                &nbsp; &nbsp; 'AWS'
                <br />
                ];
              </code>
            </div>
          </div>
          <div className="border border-white/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
            <p className="text-white/50">
              I specialize in building robust and scalable web applications
              using modern technologies. My expertise spans both front-end and
              back-end development, allowing me to create seamless, end-to-end
              solutions.
            </p>
            <div className="mt-4 relative border ☐ border-white/20 rounded-lg p-4 h-[220px] overflow-hidden">
              <img
                src={project1}
                alt="Project 1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="border ☐ border-white/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
            <p className="text-white/50 mb-4">
              I'm proficient in a wide range of technologies and constantly
              expanding my skill set to stay at the forefront of web
              development.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border ☐ border-white/20 rounded-lg p-3">
                <h4 className="text-emerald-300 font-medium mb-2">Frontend</h4>
                <ul className="text-white/50 space-y-1 text-sm">
                  <li>React/Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div className="border ☐ border-white/20 rounded-lg p-3">
                <h4 className="text-emerald-300 font-medium mb-2">Backend</h4>
                <ul className="text-white/50 space-y-1 text-sm">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-white/20 rounded-lg p-6 flex flex-col justify-between mt-10">
          <div className="relative border border-white/20 rounded-lg p-4 h-[320px] sm:h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden">
            <img
              src={project2}
              alt="Project 2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">05. Goals</h3>
            <p className="text-white/50">
              My goal is to continue growing as a developer, tackling
              challenging projects, and contributing to the tech community. I'm
              always excited to learn new technologies and push the boundaries
              of what's possible in web development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
