import Tilt from "react-tilt";
import { motion as m } from "framer-motion";
import { styles } from "../utils/styles";
import { github } from "../assets";
import { carrent, jobit, tripguide } from "../assets";


const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    source_code_link: "https://github.com/",
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

const ProjectCard=({index, name, description, tags, image, source_code_link})=>{

  return(
    <li className="w-[358px] pb-">
      <Tilt options={{
        max:45,
        scale:1,
        speed:450
      }} 
      className="bg-tertiary p-4 rounded-2xl sm:w-[340px] w-full h-[500px] flex flex-col justify-between py-6"
      >
        <div>
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <button onClick={()=>window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </button>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag=> <p className={`text-[14px] ${tag.name} ${tag.color}`} key={tag.name}>#{tag.name}</p>)}
        </div>
      </Tilt>
    </li>
  )
}

const Works = () => {
  return (
    <div className="mt-[80px]">
    <div className="">
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </div>
    <div className="w-full flex flex-col">
      <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
      Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
      </p>
      <ul className="mt-20 flex flex-wrap gap-7 justify-center md:justify-center ">
        {projects.map((each, i)=>
           <ProjectCard key={`project-${i}`} {...each} index={i} />
        )}
      </ul>
    </div>
    </div>
  );
};

export default Works;
