import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Link from './Link'



const index = (props) => {
  
  return (
    
       <nav className={`py-10  font-burtons flex justify-between dark:text-white `}>
            <h1 className="font-burtons text-xl">Sagar Verma</h1>
            <ul className="hidden md:flex justify-between gap-5 items-center">
              <Link
                page="Home"
                selectedPage={props.selectedPage}
                setSelectedPage={props.setSelectedPage}
              />
              <Link
                page="About"
                selectedPage={props.selectedPage}
                setSelectedPage={props.setSelectedPage}
              />
                            <Link
                page="Skills"
                selectedPage={props.selectedPage}
                setSelectedPage={props.setSelectedPage}
              />    
              <Link
                page="Projects"
                selectedPage={props.selectedPage}
                setSelectedPage={props.setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={props.selectedPage}
                setSelectedPage={props.setSelectedPage}
              />  
              <li>
                <BsFillMoonStarsFill
                  onClick={props.handler}
                  className=" cursor-pointer text-2xl"
                />
              </li>


              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1Q3v1byaRSpTRpFCyoeI-Hg4QoT5WL_0o/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
            <ul className='md:hidden flex justify-end gap-5 items-center '>
            <li>
                <BsFillMoonStarsFill
                  onClick={props.handler}
                  className=" cursor-pointer text-2xl"
                />
              </li>


              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-1 border-none rounded-md"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>


          
      
    
  )
}

export default index