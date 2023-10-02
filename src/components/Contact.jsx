import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { linkedin } from "../assets";

// template_yuo8kxj
// service_stdujuq
// uMF7UOUrIpDv9BUvS

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [load, setLoad] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);

    emailjs
      .send(
        "service_stdujuq",
        "template_0hw5xbm",
        {
          from_name: form.name,
          to_name: "Pritthish",
          from_email: form.email,
          to_email: "pritthishps20@gmail.com",
          message: form.message,
        },
        "uMF7UOUrIpDv9BUvS"
      )

      .then(
        () => {
          setLoad(false);
          alert("Thank you, I will reply back ASAP");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoad(false);
          console.log(error);
          alert("Somethig went wrong.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch / Hire me</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-[#7D8DA1] text-[20px] mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="py-4 px-6 placeholder:text-white-10 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-[#7D8DA1] text-[20px] mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="py-4 px-6 placeholder:text-white-10 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-[#7D8DA1] text-[20px] mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say ?"
              className="py-4 px-6 placeholder:text-white-10 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button type="submit">
            <a
              href="#_"
              className="px-5 py-2.5 relative rounded-xl group font-medium text-white font-medium inline-block"
            >
              <span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-50 filter blur-sm bg-gradient-to-br from-blue-100 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-xl opacity-50 from-blue-100 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-xl shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-blue-100 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-xl bg-gradient-to-br to-blue-100 from-blue-500"></span>
              <span className="relative">{load ? "Sending..." : "Send"}</span>
            </a>
          </button>
        </form>
        <div className="flex flex-row pt-10">
          <span className="text-[#7D8DA1] text-[20px] pt-2">
            Also,You can connect with me <span className="pl-3">Linkedin</span>
          </span>
          <a href="https://www.linkedin.com/in/pritthish-sarkar-90585b224/" target="_blank" className="pl-1"><img src={linkedin} alt="" /></a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
