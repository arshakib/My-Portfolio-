import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer id="footer" className="py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-between flex-col md:flex-row">
            <div>
              <h2 className="md:text-7xl text-4xl font-bold mb-10 text-white/50">
                Get in <span className="text-gray-400">touch</span>
              </h2>
              <a
                className="md:text-7xl lg:text-4xl text-2xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=arshakib428@gmail.com"
              >
                arshakib428@gmail.com
              </a>
            </div>
            <div className="text-white/50 mt-12">
              <div className="mb-8">
                <p className="text-lg mb-1">Phone</p>
                <a
                  href="tel:+8801720811737"
                  className="text-2xl font-semibold underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300"
                >
                  +8801720811737
                </a>
              </div>
              <div className="text-lg mb-8">
                <p className="font-bold">Location</p>
                <p>Barisal Sadar</p>
                <p>Barisal</p>
                <p>Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="relative z-10 text-center mt-8 py-12">
            {/* Large screens (Tablet, Laptop, PC) */}
            <h1 className="hidden md:block text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[15rem] font-bold text-white opacity-10">
              ARSHAKIB
            </h1>

            {/* Mobile screens (Small devices) */}
            <h1 className="md:hidden text-4xl sm:text-6xl font-bold text-white opacity-10 leading-tight">
              AR
              <br />
              SHAKIB
            </h1>
          </div>

          <div className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
            <p className="text-gray-200 caption text-n-4 1g:block">
              © 2024. All rights reserved.
            </p>
            <ul className="flex gap-5 flex-wrap">
              <a
                target="_blank"
                href="https://github.com"
                aria-label="GitHub"
                className="text-gray-200 flex-items-center justify-center w-10 h-10 rounded-full"
              >
                <AiFillGithub size={30} />
              </a>{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ashiqur-rahman-shakib/"
                aria-label="GitHub"
                className="text-gray-200 flex-items-center justify-center w-10 h-10 rounded-full"
              >
                <AiFillLinkedin size={30} />
              </a>{" "}
              <a
                target="_blank"
                href="https://www.facebook.com/asiqurrahman.shakib.7"
                aria-label="GitHub"
                className="text-gray-200 flex-items-center justify-center w-10 h-10 rounded-full"
              >
                <AiFillFacebook size={30} />
              </a>{" "}
              <a
                target="_blank"
                href="https://www.instagram.com/asiqurrahman.shakib.7/"
                aria-label="GitHub"
                className="text-gray-200 flex-items-center justify-center w-10 h-10 rounded-full"
              >
                <AiFillInstagram size={30} />
              </a>{" "}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
