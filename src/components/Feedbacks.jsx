import React from "react";
import { styles } from "../utils/styles";
import { motion as m } from "framer-motion";
import "../index.css";

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rohit proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rohit does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rohit optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
        delay: 0.12 * i,
        duration: 0.2,
      },
    },
  };
};

const parentVariants = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.2,
    },
  },
};

const FeedbackCard = ({ index, testimonial, name, image }) => {
  return (
    <m.li
      variants={FadeInVariants(4 + index)}
      viewport={{ once: true }}
      whileInView="animate"
      initial="hidden"
      className="bg-black-200 flex flex-col justify-between p-6 md:p-8 rounded-3xl lg:w-[280px] mg:h-[390px]"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[14px] md:text-[18px]">
          {testimonial}
        </p>
      </div>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px] flex items-center">
            <span className="blue-text-gradient pb-1">@</span>
            {name}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </m.li>
  );
};

const Feedbacks = () => {
  return (
    <m.section
      variants={parentVariants}
      viewport={{ once: true }}
      whileInView="animate"
      initial="hidden"
      className="feedback mt-12 mb-12 bg-black rounded-2xl"
    >
      <div className={`p-8 bg-tertiary rounded-2xl min-h-[300px]`}>
        <m.div
          variants={FadeInVariants()}
          viewport={{ once: true }}
          whileInView="animate"
          initial="hidden"
        >
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h1 className={`${styles.sectionHeadText}`}>Testimonials</h1>
        </m.div>
        <ul
          className={`list mt-16 flex flex-col md:flex-row flex-wrap justify-center gap-7`}
        >
          {testimonials.map((each, i) => (
            <FeedbackCard index={i} {...each} key={i} />
          ))}
        </ul>
      </div>
    </m.section>
  );
};

export default Feedbacks;
