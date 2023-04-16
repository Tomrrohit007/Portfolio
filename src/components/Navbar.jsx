import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../utils/styles";
import { logo1 } from "../assets/index";
import { motion as m, useScroll, useMotionValueEvent } from "framer-motion";

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

const variants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: "-90px", opacity: 0.4 },
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const toggleBar = () => {
    setToggle((prev) => !prev);
  };

  const toTop = () => {
    setActive("Home");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    history.scrollRestoration = 'manual';
    const defaultUrl = 'http://localhost:5173/';
    // 'https://webdevrohit.netlify.app/' 


    if (window.location.href !== defaultUrl) {
      window.location.href = defaultUrl;
    }
  }, []);

  function update() {
    if (scrollY.get() < scrollY.getPrevious()) {
      setHidden(false);
    } else if (scrollY.get() > 70 && scrollY.get() > scrollY.getPrevious()) {
      setHidden(true);
      setToggle(false);
    }
  }

  useMotionValueEvent(scrollY, "change", () => update());

  toggle
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");

  const mobileNav = () => {
    return (
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.6,
        }}
        className={`mobile-ham`}
        aria-expanded={toggle.toString()}
      >
        <ul className="nav-item-list list-none w-screen h-screen flex justify-center gap-8 flex-col items-center ">
          {navLinks.map((nav, index) => (
            <li
              className={`font-poppins select-none font-semibold cursor-pointer hover:text-[#bee5f1] text-[1rem] text-white ${
                navLinks.length - 1 === index ? "mr-0" : "mb-10"
              }`}
              key={nav.id}
            >
              <button onClick={setToggle}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </button>
            </li>
          ))}
        </ul>
      </m.div>
    );
  };

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
        <Link to="/" className="flex items-center gap-2 z-20 " onClick={toTop}>
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
        <div className=" md:hidden flex flex-1 justify-end items-center flex-grow-1">
          <svg
            className="button-three"
            aria-controls="primary-navigation"
            aria-expanded={toggle.toString()}
            onClick={toggleBar}
            stroke="var(--button-color)"
            fill="none"
            viewBox="-25 -40 180 180"
            width="60"
          >
            <path
              className="line"
              strokeWidth="20"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m 15 20 h 100 a 1 1 0 0 1 0 45 h -100 a 1 1 0 0 1 0 -60 h 55 a 1 1 0 0 1 1 1 v 140"
            ></path>
          </svg>
          {mobileNav()}
        </div>
      </div>
    </m.nav>
  );
};

export default Navbar;
