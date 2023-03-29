import { styles } from "../utils/styles";
import { motion as m } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { textVariant } from "../utils/motion";
import "../index.css";


const Hero = () => {
  return (
    <section id="/" className="flex flex-col md:flex-row h-[100vh] justify-center md:items-center gap-[100px] md:h-[80vh] lg:h-screen ]">
      <div className="order-2 md:order-1 lg:mt-0 flex flex-col items-start justify-start leading-4 lg:leading-7  grow-1 -auto z-1 flex-wrap">
        <h1 className={styles.sectionHeadText}>Think. Make. Solve.</h1>
        <p className="flex gap-2 my-2 text-[13px] lg:text-[17px] text-[#cdcaf0] font-semibold">
          <img
            className="w-[10px] h-[4px] rounded-sm self-center lg:h-[8px] lg:w-[40px]"
            src="../../line.png"
          />
          What I Do?
        </p>
        <div className="text-3 text-[15px] lg:text-[20px] py-4 h-18 font-normal mb-2 lg:text-left">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay:30,
              deleteSpeed:10,
              pauseFor: 4000,
              strings: [
                "Websites promote you 24/7: No employee will do that.",
                "It’s not a bug. It’s an undocumented feature!",
                "If at first you don’t succeed; call it version 1.0",
              ],
            }}
          />
        </div>
        <Link to="/about">
        <button className="curser-pointer  text-[10px] md:text-[12px] shadow-sm shadow-[#696969] bg-[#5e76a7] h-[34px] w-[85px] md:h-[44px] md:w-[120px] rounded-md font-semibold px-3 py-[4px]">
          Learn more
        </button>
        </Link>
      </div>
      <div className="h-[500px] order-1 md:order-2 md:h-full flex justify-content items-center basis-6/12 pt-[18vh] md:pt-2 lg:mt-0">
        <m.img
          initial={{
            translateY: 0,
          }}
          animate={{
            translateY: 30,
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              ease: "easeInOut",
            },
          }}
          src="../../moon.png"
          className="moon flex w-[280px] md:w-[300px] lg:w-[440px] aspect-1 m-auto top-0 bottom-0 left-0 right-0 self-center"
          alt="moon"
        />
      </div>
    </section>
  );
};

export default Hero;
