import { styles } from "../utils/styles";
import github from "/assets/github.webp";
import carrent from "/assets/carrent.webp";
import jobit from "/assets/jobit.webp";
import tripguide from "/assets/tripguide.webp";
import { motion as m } from "framer-motion";

const projects = [
  {
    name: "Hoo Bank",
    description:
      "Hoo Bank is a next generation payment system. our primary goal is to provide our customers with the highest level of financial services possible. We strive to tailor our services to meet your business needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Tomrrohit007/Hoo_Bank",
    live_url: "https://rohit-hoo-bank.netlify.app/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
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

const Works = () => {
  return (
    <section className="mt-[80px]" id="work">
      <m.div
        variants={FadeInVariants()}
        viewport={{ once: true }}
        whileInView="animate"
        initial="hidden"
        className=""
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </m.div>
      <div className="w-full flex flex-col">
        <m.p
          variants={FadeInVariants()}
          viewport={{ once: true }}
          whileInView="animate"
          initial="hidden"
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </m.p>
        <ul className="mt-20 flex flex-wrap gap-7 justify-center md:justify-center ">
          {projects.map((each, i) => (
            <m.li
              whileHover={{ translateY: -10 }}
              variants={FadeInVariants(i + 4)}
              whileInView="animate"
              viewport={{ once: true }}
              initial="hidden"
              className="w-[358px]"
              key={i}
            >
              <m.div className="bg-tertiary p-4 rounded-2xl sm:w-[340px] w-full h-[500px] flex flex-col justify-between py-6">
                <div>
                  <div className="relative w-full h-[230px]">
                    <img
                      src={each.image}
                      alt={each.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                      <a
                        href={each.source_code_link}
                        target="_blank"
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                      >
                        <img
                          src={github}
                          alt="github"
                          className="w-1/2 h-1/2 object-contain"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">
                      {each.name}
                    </h3>
                    <p className="mt-2 text-secondary text-[14px]">
                      {each.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {each.tags.map((tag) => (
                    <p
                      className={`text-[14px] ${tag.name} ${tag.color}`}
                      key={tag.name}
                    >
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </m.div>
            </m.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Works;
