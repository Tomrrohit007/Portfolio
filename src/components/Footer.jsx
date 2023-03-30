import "../index.css";
import { motion as m } from "framer-motion";

const FadeInVariants = (i = 4) => {
  return {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        type: "spring",
        mass: 0.3,
        damping: 12,
        delay:0.18,
        duration: 0.2,
      },
    },
  };
};

function Footer() {
  const year = new Date().getFullYear();
  return (
    <m.footer 
    variants={FadeInVariants()}
    viewport={{once:false}}
    whileInView="animate"
    initial="hidden"
    className="bg-tertiary text-gray-600 body-font rounded-t-2xl rounded-b-[0px] mt-7 z-20">
      <div className="container py-6 items-center flex flex-col md:flex-row justify-between px-4 lg:px-14">
        <p className="text-md text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 leading-7 sm:border-gray-200 sm:py-4 sm:mt-0 mt-4">
          © {year} Rohit Tomar
        </p>
        <div className="flex flex-col gap-2 items-center">
          <p>+91-7876724528</p>
          <p>rohitwebdev007@gmail.com</p>
        </div>
        <span className=" sm:mt-0 mt-4 mr-2 justify-center sm:justify-start">
          <a
            className="text-gray-500"
            href="https://github.com/Tomrrohit007"
            target="_blank"
          >
            <m.div initial={{opacity:0.8}} whileHover={{opacity:1, scale:1.1}} className="icons8-github"></m.div>
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://www.linkedin.com/in/rohittt/"
            target="_blank"
          >
            <m.div initial={{opacity:0.8}} whileHover={{opacity:1, scale:1.1}} className="icons8-linkedin-circled"></m.div>
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://wa.me/+917876724528"
            target="_blank"
          >
            <m.div initial={{opacity:0.8}} whileHover={{opacity:1, scale:1.1}} className="icons8-whatsapp"></m.div>
          </a>
        </span>
      </div>
    </m.footer>
  );
}

export default Footer;
