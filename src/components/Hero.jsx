import { motion } from "framer-motion";
import { styles } from "../styles";
import { ProfileCanvas } from "./canvas";
import { useState,useEffect } from "react";
import { useTypewriter,Cursor } from "react-simple-typewriter";


const Hero = () => {
  const [texts]=useTypewriter({
    words:['Pritthish','Web Devloper','Student'],
    typeSpeed:100,
    deleteSpeed:60,
    loop:{}
  })
  return (
    <section className="relative w-full h-screen mx-auto z-0 flex justify-end ">

<ProfileCanvas />
      <div
        className={`${styles.paddingX} absolute inset-0 sm:top-[57px] xl:top-[260px] xl:left-[50px] max-h-[300px] mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full  bg-secondary" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>

        <div className="">
          <h1 className={`${styles.heroHeadText}`}>
          <span className="text-[#7D8DA1]">Hi,I'm </span> <span className="text-secondary">{texts}</span><Cursor/>
          </h1>
          <p className={`${styles.heroSubText} mt-2 xl:w-[800px]`}>
          I'm a frontend web devloper based in New Delhi, India.<br className="sm:block hidden"/>Glad to get you here . This is my personal Portfolio .<br/> 
          Look at my works and enjoy them . Hope you like them .  
          </p>
          <button>
              <a
                href="#_"
                class="px-5 py-2.5 relative rounded-2xl group  text-white font-medium inline-block"
              >
                <span class="absolute top-0 left-0 w-full h-full rounded-2xl opacity-50 filter blur-sm bg-gradient-to-br from-blue-100 to-blue-500"></span>
                <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-2xl opacity-50 from-blue-100 to-blue-500"></span>
                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-2xl shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-blue-100 to-blue-500"></span>
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-2xl bg-gradient-to-br to-blue-100 from-blue-500"></span>
                <span class="relative">Download CV</span>
              </a>
            </button>
        </div>
        
      </div>
      
    </section>
    
  );
};

export default Hero;
