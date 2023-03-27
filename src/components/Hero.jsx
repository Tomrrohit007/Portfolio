import React from "react";
import "../index.css";
import { styles } from "../utils/styles";
import { motion as m } from "framer-motion";
const Hero = () => {
  return (
    <section
      className={`flex flex-col lg:flex-row  justify-between lg:justify-center items-between min-h-[120vh] lg:min-h-screen gap-10`}
    >
      <div className="h-[60vh] order-2 lg:order-1 lg:h-full flex flex-col px-4 items-start justify-start leading-4 lg:leading-7 self-center grow-1 -auto z-1 flex-wrap">
        <h1 className="text-2xl xl:text-6xl leading-14 font-bold my-2">
          Think. Make. Solve.
        </h1>
        <p className="flex gap-2 my-2 text-[13px] lg:text-[17px] text-[#cdcaf0] font-semibold">
          <img className="w-[10px] h-[4px] rounded-sm self-center lg:h-[8px] lg:w-[40px]" src="../../line.png" />
          What I Do?
        </p>
        <p className="text-3 text-[15px] lg:text-[20px] py-4 font-normal mb-2 lg:text-left">
          I enjoy creating delightfull, human-centered digital experiences.
        </p>
        <button className="curser-pointer text-[12px] shadow-sm shadow-[#696969] bg-[#5e76a7] w-[120px] h-[44px] self-center lg:self-start rounded-md font-semibold px-3 py-[4px]">
          Learn more
        </button>
      </div>
      <div className="h-[60vh] order-1 lg:order-2 lg:h-full flex justify-content items-center self-center  basis-6/12 pt-[18vh] lg:mt-0">
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
          className="moon flex h-[240px] lg:h-[500px] aspect-2/3 m-auto top-0 bottom-0 left-0 right-0"
          alt="moon"
        />
      </div>
    </section>
  );
};

export default Hero;
