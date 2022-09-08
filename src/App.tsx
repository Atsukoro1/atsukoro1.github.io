import { faCss3, faNodeJs, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { SelectedLanguage } from "./components/LanguageSwitch";
import { faC } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll } from "framer-motion";
import useViewPort from "./hooks/useViewPort";
import { useState } from "react";

import ActivityContent from "./components/ActivityContent";
import ProgressLine from "./components/ProgressLine";
import ActivityCard from "./components/ActivityCard";
import Socials from "./components/Socials";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

function App() {
  const [language, setLanguage] = useState<SelectedLanguage>(SelectedLanguage.ENGLISH);
  const [selectedActivityCard, setSelectedActivityCard] = useState<number>(0);
  const { scrollYProgress } = useScroll();
  const [_, width] = useViewPort();

  return (
    <div style={{
      backgroundImage: "url('../background.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh"
    }} className="bg-white dark:bg-slate-900">
      <div className="none md:block fixed top-0">
        <ProgressLine/>

        {language}
        
        {
          scrollYProgress.get() < 2 && <Navbar
            onLanguageChange={(lang) => {
              setLanguage(lang);
            }}
          />
        }

        <Socials/>
      </div>

      {/* Main content */}
      <motion.div
        className="ml-auto mrt- mr-auto md:w-[1000px] w-[350px] text-center md:text-left"
        initial={{ rotate: 45 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
      
        <div className="inline-flex mt-40">
          {/* TODO: Make the hand moving */}
          <motion.h4
            drag
            draggable={true}
            animate={{
              rotate: [0, 35, 0],
            }}
            transition={{
              type: "keyframes",
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.2],
              repeat: Infinity,
              repeatDelay: 0
            }}
            className="w-[fit-content] text-[25px]"
          >
            👋
          </motion.h4> 

          &nbsp;
        
          <motion.h4 
            className="text-blue-600 font-roboto md:text-2xl text-xl"> 
            Hi, my name is
          </motion.h4>
        </div>

        <br/>
        <label className={`
          text-dark dark:text-white font-poppins font-bold md:text-[60px] 
          text-[30px]
        `}>
          Jakub Dornicak
        </label>

        <p 
          className="font-poppins font-bold md:text-[60px] text-[25px] mt-[-7px] text-blue-600"
          style={{
            textShadow: `0 0 2px #2563eb, 0 0 40px #2563eb`
          }}
        >
          I build full-stack web apps
        </p>

        <p className="font-poppins mt-2 text-[15px] md:text-[20px] dark:text-gray-300 text-gray-500">
          Frontend & Backend web developing<br/>
          nevim neco nevim neco tu bude
        </p>

        <button className={`
          font-roboto text-blue-600 solid border-blue-600 border-2 pl-5 pb-3 pt-3 pr-5
          transition ease-in-out duration-200 mt-8 rounded-lg font-bold inline-flex 
          items-center hover:bg-blue-600 hover:bg-opacity-10
        `}>
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>Download my CV</span>
        </button>
      </motion.div>

      <div className={
        `grid grid-cols-2 grid-cols-1 md:grid-cols-2 w-[500px] md:w-[1000px] 
        mr-auto ml-auto mt-40`
      }>
        <div className="text-left">
          <ActivityCard
            onClick={() => setSelectedActivityCard(0)}
            selected={selectedActivityCard === 0}
            title="Backend"
            description="Create digital products with unique ideas"
            projectCount={12}
          />

          {
            (width < 800 && selectedActivityCard === 0) &&
              <>
                <ActivityContent selectedItem={0}/>
              </>
          }

          <ActivityCard
            onClick={() => setSelectedActivityCard(1)}
            selected={selectedActivityCard === 1}
            title="Frontend"
            description="Create digital products with unique ideas"
            projectCount={20}
          />

          {
            (width < 800 && selectedActivityCard === 1) &&
              <>
                <ActivityContent selectedItem={1}/>
              </>
          }

          <ActivityCard
            onClick={() => setSelectedActivityCard(2)}
            selected={selectedActivityCard === 2}
            title="Design"
            description="Create digital products with unique ideas"
            projectCount={10}
          />

          {
            (width < 800 && selectedActivityCard === 2) &&
              <>
                <ActivityContent selectedItem={2}/>
              </>
          }
        </div>

        <div className="text-left ml-[100px]">
          {
            (width > 800) && 
              <>
                <ActivityContent selectedItem={selectedActivityCard}/>
              </>
          }
        </div>
      </div>

      <div className={`
        mt-[150px] mr-auto ml-auto w-[400px] md:w-[800px] text-center md:text-left`
      }>
        <h1 className="font-poppins font-bold text-blue-600 text-[35px]">💻 My projects</h1>
        <p className="mt-3 text-slate-500 dark:text-slate-400 text-xl table w-[410px] md:w-[522px]">
          These are the projects that I am most proud of, started as a hobby,
          now trying to use this experiences in real projects.
        </p>
      </div>

      <div 
        className={
          `mt-[50px] w-[300px] mr-auto ml-auto w-[50%] grid grid-cols-1 md:grid-cols-2 md:w-[800px]
           2xl:w-[1200px] 2xl:grid-cols-3 grid-gap-4`
        }
      >
        <Project
          name="Portfolio"
          description="The simple portfolio you are currently on. I built it using technologies like Framer motion, React and Tailwindcss."
          technologies={[
            {
              name: "React",
              icon: faReact
            },
            {
              name: "Node.js",
              icon: faNodeJs
            }, 
            {
              name: "Tailwind",
              icon: faCss3
            }
          ]}
        />

        <Project
          name="Netscrape"
          description="Network packet sniffer, display everything that's flowing through your network in beautiful human readable format!"
          technologies={[
            {
              name: "C",
              icon: faC
            }
          ]}
        />

        <Project
          name="Contalk"
          description="Messenger-like application with fully working friend system, real time messaging and authentication."
          technologies={[
            {
              name: "Node.js",
              icon: faNodeJs
            },
            {
              name: "React",
              icon: faReact
            }
          ]}
        />

        <Project
          name="Viceverse"
          description="Website for our web services company, made with Vue and Tailwind CSS."
          technologies={[
            {
              name: "VueJS",
              icon: faVuejs
            },
            {
              name: "Tailwind",
              icon: faCss3
            }
          ]}
        />
      </div>

      <div className="mt-[50px] mb-[250px] w-[500px] mr-auto ml-auto text-center">
        <motion.h1
          className="text-blue-600 font-poppins font-bold text-[27px]"
        >
          Contact ✌️
        </motion.h1>

        <motion.p className="text-gray-400 text-[16px]">
        If you would like to discuss working on your future project or just have a chat, 
        feel free to contact me via email using the button below.
        </motion.p>

        <a href="mailto:dornicakkuba@gmail.com">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ 
              type: "spring", 
              stiffness: 400,
              damping: 17,
              duration: 0.5 
            }}
            className={`
              bg-blue-600 text-white font-roboto pt-3 pr-5 pl-5 pb-3 mb-28
              rounded-md mt-5 hover:opacity-75 transition ease-in-out duration-200`
            }
          >
            Contact me
          </motion.button>
        </a>
      </div>
    </div>
  );
}

export default App;
