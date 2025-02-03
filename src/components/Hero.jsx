import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/IMG_3725.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { 
    x: -100, 
    opacity: 0,
    filter: "blur(10px)"
  },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      delay: delay,
      ease: "easeOut"
    },
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
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Geoffrey Lee
            </motion.h1>
            
            <motion.span
              variants={container(0.35)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mb-6"
              whileHover={{ 
                scale: 1.05,
                backgroundSize: "200% 200%",
                transition: { duration: 0.3 }
              }}
            >
              Software Engineer
            </motion.span>

            <motion.p
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-3 font-light tracking-tighter text-center lg:text-left"
              whileHover={{ scale: 1.02 }}
            >
              {HERO_CONTENT}
            </motion.p>

            {/* More About Me Button with enhanced animations */}
            <motion.a
              href="about"
              variants={container(1.0)}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-block rounded-full bg-indigo-500 px-6 py-2 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              More about me
            </motion.a>
          </div>
        </div>
        
        {/* Profile Image with enhanced animations */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ 
                x: 100, 
                opacity: 0,
                rotate: -5,
                filter: "blur(10px)"
              }}
              animate={{ 
                x: 0, 
                opacity: 1,
                rotate: 0,
                filter: "blur(0px)"
              }}
              transition={{ 
                duration: 1, 
                delay: 1.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
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
