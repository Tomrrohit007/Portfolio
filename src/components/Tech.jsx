import React from "react";
import {motion as m} from "framer-motion"
import BallCanvas from "./canvas/Ball";
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  framer
} from "../assets/index";

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name:"Framer Motion",
    icon:framer
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const FadeInVariants = (i = 4) => {
  return {
    hidden: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        mass: 0.3,
        damping: 12,
        delay: 0.04 * i,
        duration: 0.2,
      },
    },
  };
};
const Tech = () => {
  return (
    <div className="mt-[70px]">
      <div className=" mt-6 border-white flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, i) => (
          <m.div variants={FadeInVariants(i + 4)} whileInView="animate" initial="hidden" viewport={{once:true}} className="w-28 h-28 cursor-pointer" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </m.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
