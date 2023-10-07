import React from 'react'
import {
    AiOutlineGithub,
    AiFillLinkedin,
  } from "react-icons/ai";
  import { motion } from "framer-motion";

  import Dev from '@/assets/dev-ed-wave.png';

const index = () => {
  return (
    <section id='home'>
        <div className="text-center">
            <h2 className="text-5xl py- mb-5 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Sagar Verma
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Developer
            </h3>
            <p className="text-2xl py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Passionate Developer, Crafting Quality Designs and Code!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 mb-5 text-gray-600 dark:text-gray-400">
              <a target="_blank" href="https://github.com/sv2000-sagar"><AiOutlineGithub /></a>
              <a target="_blank" href="https://in.linkedin.com/in/sagar-verma-200032"><AiFillLinkedin /></a>
            </div>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
          >
              <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 overflow-hidden relative mt-2 mb-5 md:h-80 md:w-80">
                <img className='pt-5 ml-2 object-fill md:h-80 md:w-80 ' alt='dev-pic' src={Dev} />
              </div>
          </motion.div>
          </div>
          
          
        
    </section>
  )
}

export default index