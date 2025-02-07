/* eslint-disable react/no-unescaped-entities */
import project1 from "../assets/unnamed.jpg";
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
              I am a passionate Front-End focused MERN stack developer with a
              strong foundation in basic and a love for creating innovative web
              solutions. My journey in tech started with a curiosity about how
              things work, which led me to pursue a career in web development.
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
                &nbsp; &nbsp; 'MongoDB',
                <br />
                &nbsp; &nbsp; 'Express.js',
                <br />
                &nbsp; &nbsp; 'Tailwind CSS',
                <br />
                ];
              </code>
            </div>
          </div>
          <div className="border border-white/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
            <p className="text-white/50">
              I am a versatile Front-End focused MERN stack developer
              specializing in building robust and scalable web applications
              using modern technologies. With expertise in both front-end and
              back-end development, I create seamless, end-to-end solutions that
              enhance user experience and optimize performance. Beyond technical
              expertise, I have worked with various organizations, allowing me
              to master communication, public speaking, team management,
              leadership, problem-solving, and other essential soft skills. This
              unique combination of technical proficiency and strong
              interpersonal skills enables me to collaborate effectively, lead
              teams, and drive impactful digital solutions.
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
              I possess a strong command of a diverse array of technologies,
              encompassing both front-end and back-end development, and I am
              committed to continuous learning to remain at the cutting edge of
              web development trends. My expertise extends beyond technical
              skills to include a mastery of professional soft skills, enabling
              me to collaborate effectively within teams, communicate clearly
              with stakeholders, and adapt readily to evolving project
              requirements.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border ☐ border-white/20 rounded-lg p-3">
                <h4 className="text-emerald-300 font-medium mb-2">Frontend</h4>
                <ul className="text-white/50 space-y-1 text-sm">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div className="border ☐ border-white/20 rounded-lg p-3">
                <h4 className="text-emerald-300 font-medium mb-2">Backend</h4>
                <ul className="text-white/50 space-y-1 text-sm">
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Express.js</li>
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
              I am a front-end focused MERN stack developer who collaborates
              with various organizations and soft skills experts to build
              dynamic, user-centric web applications while continuously refining
              both my technical expertise and interpersonal abilities.
              Passionate about innovation, I specialize in creating responsive
              interfaces with HTML, CSS, JavaScript, and React, and I integrate
              robust server-side solutions using Node.js and MongoDB. My
              development goals are centered on mastering advanced front-end
              techniques, expanding my full-stack capabilities, and contributing
              to projects that optimize performance and enhance user
              experiences, all while leveraging a strong foundation in
              communication and teamwork to drive impactful, measurable results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
