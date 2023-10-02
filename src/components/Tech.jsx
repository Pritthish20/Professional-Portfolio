import React from 'react'
import { styles } from '../styles'
import {motion} from 'framer-motion'
import { SectionWrapper } from '../hoc'

const Skills=({name,x,y})=>{
  return(
    <motion.div className="flex items-center justify-center rounded-full font-semibold bg-[#82ccd0] opacity-70 text-primary py-5 px-6 shadow-primary cursor-pointer absolute"
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y}}
            transition={{duration:1.5}}
            once={true}

            >
              {name}
            </motion.div>
  )
}

const Tech = () => {
  return (
    <>
      <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      <div className="w-full h-screen relative flex items-center justify-center xl:bg-circular sm:bg-cirsmall">
            <motion.div className="flex items-center justify-center rounded-full font-bold bg-[#82ccd0] opacity-70 text-primary p-9 shadow-primary cursor-pointer"
            whileHover={{scale:1.05}}
            >
              Web
            </motion.div>
            <Skills name="CSS" x="-5vw" y="-10vw"/>
            <Skills name="HTML" x="-20vw" y="-2vw"/>
            <Skills name="ReactJS" x="0vw" y="12vw"/>
            <Skills name="Javascript" x="20vw" y="6vw"/>
            <Skills name="Tailwind CSS" x="15vw" y="-12vw"/>
            <Skills name="DSA" x="-20vw" y="-15vw"/>
            <Skills name="C++" x="33vw" y="-6vw"/>
            <Skills name="Web Design" x="-25vw" y="18vw"/>
            <Skills name="OOPS" x="24vw" y="-24vw"/>

      </div>
    </>
  )
}

export default SectionWrapper(Tech);