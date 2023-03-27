import { motion as m } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "react-tilt";

const ServiceCard = ({ title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full max-w-[400px] lg:w-[24vw] rounded-lg">
      <m.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          {icon}
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </m.div>
    </Tilt>
  );
};

export default ServiceCard;
