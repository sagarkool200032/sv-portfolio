import React from 'react'
import web1 from "@/assets/web1.png";
import web2 from "@/assets/web2.png";
import web3 from "@/assets/web3.png";
import web4 from "@/assets/web4.png";
import web5 from "@/assets/web5.png";
import web6 from "@/assets/web6.png";
import { motion } from 'framer-motion';

const index = () => {
  return (
    <section id='projects' className="py-8">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Welcome to my portfolio's beating heart—the Projects section! Here, I showcase 
            a selection of the projects that define my journey as an emerging software developer.
            Each project represents a unique challenge I've taken on, a problem I've solved, or an 
            idea I've brought to life.
            </p>
          </div>
          <motion.div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
            <div className="basis-1/3 flex-1 ">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
              <div className="mx-auto text-center mt-3">
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-0.5 border-none rounded-md" target="_blank" href='https://admin-mern-frontend-es22.onrender.com/'>Live Demo</a>
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-0.5 border-none rounded-md ml-3" target="_blank" href='https://github.com/sagarkool200032/admin-mern'>GitHub Repo</a>
              </div>
            </div>
            <div className="basis-1/3 flex-1 ">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
              <div className="mx-auto text-center mt-3">
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-0.5 border-none rounded-md" target="_blank" href='https://gym-typescript-23p.pages.dev/'>Live Demo</a>
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-0.5 border-none rounded-md ml-3" target="_blank" href='https://github.com/sagarkool200032/gym-typescript'>GitHub Repo</a>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
              <div className="mx-auto text-center mt-3">
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-0.5 border-none rounded-md" target="_blank" href='https://admin-frontend-oequ.onrender.com/'>Live Demo</a>
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-0.5 border-none rounded-md ml-3" target="_blank" href='https://github.com/sagarkool200032/blog-sociopedia-mern'>GitHub Repo</a>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
              <div className="mx-auto text-center mt-3">
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-0.5 border-none rounded-md" target="_blank" href='https://movie-recommendation-system-sv-465c6878a20e.herokuapp.com/'>Live Demo</a>
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-0.5 border-none rounded-md ml-3" target="_blank" href='https://github.com/sagarkool200032/movies-recommender-system'>GitHub Repo</a>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
              <div className="mx-auto text-center mt-3">
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-0.5 border-none rounded-md" target="_blank" href='https://expense-tracker-react.pages.dev/'>Live Demo</a>
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-0.5 border-none rounded-md ml-3" target="_blank" href='https://github.com/sagarkool200032/expense-tracker-react'>GitHub Repo</a>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
              <div className="mx-auto text-center mt-3">
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-0.5 border-none rounded-md" target="_blank" href='https://giphy-api-react.pages.dev/'>Live Demo</a>
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-0.5 border-none rounded-md ml-3" target="_blank" href='https://github.com/sagarkool200032/giphy-api-react'>GitHub Repo</a>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              {/* <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              /> */}
            </div>
          </motion.div>
        </section>
  )
}

export default index