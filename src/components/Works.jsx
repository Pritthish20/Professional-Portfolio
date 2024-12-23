import React from "react";
import { styles } from "../styles";
import { cineview , sudoku_solver , poke_store , weather_app} from "../assets";
import { SectionWrapper } from "../hoc";

const Cards = ({ image, title }) => {
  return (
    <>
      <div className="  sm:h-[220px] sm:w-[390px] xl:h-[370px] xl:w-[570px] group relative overflow-hidden border-3 border-secondary rounded-xl">
        <div className="group-hover:bg-primary/70 w-full h-full absolute z-40 transition-all duration-300"></div>
        <img
          className="  group-hover:scale-125 transition-all duration-500"
          src={image}
          alt=""
        />
        <div className="absolute -bottom-full left-12 text-[26px]  group-hover:bottom-24 transition-all duration-500 z-50 text-secondary">
          {title}
        </div>
        <div className="absolute -bottom-full left-12 text-[19px]  group-hover:bottom-16 transition-all duration-500 z-50 text-[#7D8DA1]">
          <span>Project Title</span>
        </div>
      </div>
    </>
  );
};

const Works = () => {
  return (
    <section className="section">
      <div className=" container mx-auto">
        <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 ">
          <div className="">
            <h2 className={`${styles.sectionHeadText}`}>My Recent Works.</h2>
            <p className="mt-4 text-[#7D8DA1] text-[17px] max-w-3xl leading-[30px]">
              As a web devloper , the following are my recent work. I hope you will enjoy them
            </p>
            <button>
              <a
                target="_blank"
                href="https://github.com/Pritthish20?tab=repositories"
                class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block"
              >
                <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-blue-100 to-blue-500"></span>
                <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-blue-100 to-blue-500"></span>
                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-blue-100 to-blue-500"></span>
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-blue-100 from-blue-500"></span>
                <span class="relative">View all Projects</span>
              </a>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <Cards image={cineview} title="CineView" />
          <Cards image={poke_store} title="PokéStore" />
          <Cards image={weather_app} title="Weather App"/>
          <Cards image={sudoku_solver} title="Sudoku Solver" />
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Works,"work");
