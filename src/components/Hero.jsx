import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/IMG_3725.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Geoffrey Lee
            </motion.h1>
            <motion.span
              variants={container(0.35)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mb-6"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-3 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* More About Me Button */}
            <motion.a
              href="about"
              variants={container(1.0)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-block rounded-full bg-indigo-500 px-6 py-2 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              More about me
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="profilePic"
              style={{
                width: "500px",
                height: "500px",
                objectFit: "cover",
                borderRadius: "2%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
