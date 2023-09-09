import React from 'react'
import design from '@/assets/design.png'
import code from '@/assets/code.png'
import consulting from '@/assets/consulting.png'
import { FaReact,FaHtml5, FaCss3Alt, FaNodeJs, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiRedux, SiTailwindcss,SiMui, SiExpress, SiMongodb } from "react-icons/si";



const index = () => {
  return ( 
    <section id='about'>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I'm Sagar, a dedicated developer hailing from the vibrant tech landscape of India. Currently, I'm on an exciting journey pursuing a 
              <span className="text-teal-500"> Master of Science in Computer Science </span>
              at California State University, Fullerton.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            My passion lies in crafting web applications using  
              <span className="text-teal-500"> React.js, Node.js, Django, and mastering REST APIs </span>
              , all while harnessing the power of  
              <span className="text-teal-500"> MongoDB and MySQL</span>.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            In my free time, I'm an ardent learner, continuously upskilling to stay ahead in the ever-evolving tech landscape.
            </p>
          </div>
          <h3 id='skills' className="text-3xl py-1 mt-3 dark:text-white ">My Skills</h3>
          <div className="lg:w-4/5 mx-auto w-full">
            {/* <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <img className='mx-auto' src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div> */}
            {/* <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img className='mx-auto' src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img className='mx-auto' src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div> */}

<div className="text-center text-white shadow-lg p-5 md:p-6 lg:p-10 rounded-xl my-10 bg-gradient-to-r from-cyan-500 to-teal-500 flex justify-center gap-3 md:gap-6 lg:gap-14 flex-wrap flex-1">
  <FaHtml5 className='text-[50px] md:text-[100px] '/>
  <FaCss3Alt className='text-[50px] md:text-[100px] '/>
  <IoLogoJavascript className='text-[50px] md:text-[100px] '/>
  <SiTypescript className='text-[44px] mt-[3.5px] md:text-[88px] md:mt-1.5 '/>
  <FaReact className='text-[50px] md:text-[100px] '/>
  <SiRedux className='text-[44px]  md:text-[88px] md:mt-1.5 '/>
  <SiTailwindcss className='text-[44px] mt-[3.5px] md:text-[88px] md:mt-1.5 '/>
  <SiMui className='text-[44px] mt-[3.5px] md:text-[88px] md:mt-1.5 '/>
  <FaNodeJs className='text-[50px] md:text-[100px]'/>
  <SiExpress className='text-[44px] mt-[3.5px] md:text-[88px] md:mt-1.5 '/>
  <SiMongodb className='text-[44px] mt-[3.5px] md:text-[88px] md:mt-1.5 '/>
  <FaPython className='text-[50px] md:text-[100px]'/>
  
</div>
          </div>
        </section>
  )
}

export default index