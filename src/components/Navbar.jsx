import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../utils/styles";
import { logo1, Rlogo, menu, close } from "../assets";
import { motion as m, useScroll, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const navVariants = (delay) => {
  return {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.2,
        mass: 0.4,
        damping: 13,
        delay,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeInOut",
        mass: 0.4,
        damping: 13,
        delay:delay/2
      },
    },
  };
};
const variants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: "-90px", opacity: 0.4 },
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  const toTop = () => {
    setActive("Home");
    window.scrollTo(0, 0);
  };

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 70 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  }, []);

  return (
    <m.nav
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        type: "spring",
        mass: 0.4,
        damping: 12,
        bounce: 10,
      }}
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto h-[40px] lg:h-[50px]">
        <Link to="/" className="flex items-center gap-2 z-20" onClick={toTop}>
          <img src={logo1} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Rohit &nbsp;| <span className="sm:block hidden">&nbsp;Tomar</span>
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((each) => (
            <a
              key={each.id}
              className={`${
                active === each.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(each.title)}
              href={`#${each.id}`}
            >
              {each.title}
            </a>
          ))}
        </ul>
        <div className=" md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={`object-contain cursor-pointer z-20 p-3 ${
              toggle && "bg-[#00041b] rounded-full"
            }`}
            onClick={() => setToggle((prev) => !prev)}
          />
          <AnimatePresence>
            {toggle && (
              <m.div
                initial={{
                  height: 0,
                  y:0,
                  opacity: 0,
                }}
                animate={{
                  height: "100vh",
                  y:0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    type: "spring",
                    ease: "easeInOut",
                    when: "beforeChildren",
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                    delay:0.8,
                    type: "spring",
                    ease: "easeInOut",
                  },
                }}
                className={`gradient absolute w-screen h-screen mx-[-24px] flex justify-center items-center`}
              >
                <ul className="list-none flex flex-col justify-center h-screen items-center mt-[240px] gap-5 underline leading-1">
                  {navLinks.map((each, i) => (
                    <m.a
                      variants={navVariants((i + 1) * 0.2)}
                      exit="exit"
                      animate="animate"
                      initial="hidden"
                      key={each.id}
                      className={`${
                        active === each.title ? "text-white" : "text-secondary"
                      } hover:text-white text-[18px] font-medium cursor-pointer`}
                      onClick={() => {
                        setToggle((prev) => !prev);
                        setActive(each.title);
                      }}
                      href={`#${each.id}`}
                      to
                    >
                      {each.title}
                    </m.a>
                  ))}
                </ul>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </m.nav>
  );
};

export default Navbar;
