import "../index.css";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-tertiary text-gray-600 body-font rounded-t-2xl rounded-b-[0px] mt-7">
      <div className="container py-6 items-center flex flex-col md:flex-row justify-between px-4 lg:px-14">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 leading-7 sm:border-gray-200 sm:py-4 sm:mt-0 mt-4">
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
            <div className="icons8-github"></div>
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://www.linkedin.com/in/rohittt/"
            target="_blank"
          >
            <div className="icons8-linkedin-circled"></div>
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://wa.me/+917876724528"
            target="_blank"
          >
            <div className="icons8-whatsapp"></div>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
