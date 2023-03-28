import { useState, useRef } from "react";
import "../index.css";
import emailjs from "@emailjs/browser";
import { styles } from "../utils/styles";
import EarthCanvas from "./canvas/Earth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (form.name === "" || form.email === "" || form.message === "") {
      setLoading(false);
      toast.warning("Please fill all the field!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: false,
        theme: "dark",
      });
    } else {
      emailjs
        .send(
          "service_qnvnjnj",
          "template_5o7zrip",
          {
            from_name: form.name,
            to_name: "Rohit",
            from_email: form.email,
            to_email: "rohitwebdev007@gmail.com",
            message: form.message,
          },
          "x5UZAPTcen2A83SDh"
        )

        .then(
          (result) => {
            setLoading(false);
            toast.success("Thank you. I will reach out to you soon!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: false,
              theme: "dark",
            });

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            toast.success("Something went wrong!", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: false,
              theme: "dark",
            });
          }
        );
    }
  };

  return (
    <section className="`mt-[50px] flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h1 className={styles.sectionHeadText}>Contact me</h1>
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label htmlFor="" className="flex flex-col">
            <span className="text-white mb-2 px-[2px] font-medium">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white mb-2 px-[2px] font-medium">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white mb-2 px-[2px] font-medium">
              Your Message
            </span>
            <textarea
              rows="10"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button className="bg-tertiary py-3 px-8 outline-none w-fit button text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? "Sending" : "Send"}
          </button>
          <ToastContainer />
        </form>
      </div>
      <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </div>
    </section>
  );
};

export default Contact;
