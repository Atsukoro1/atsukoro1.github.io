import { faCss3, faNodeJs, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
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

import data from './assets/data';

function App() {
  const [language, setLanguage] = useState<number>(0);
  const [selectedActivityCard, setSelectedActivityCard] = useState<number>(0);
  const { scrollYProgress } = useScroll();
  const [_, width] = useViewPort();

  return (
    <div style={{
      backgroundImage: "url('../assets/background.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh"
    }} className="bg-white dark:bg-slate-900">
      <div className="none md:block fixed top-0">
        <ProgressLine/>
        
        {
          scrollYProgress.get() < 2 && <Navbar
            onLanguageChange={(lang) => {
              setLanguage(lang - 1);
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
            { data[language].welcome[0] }
          </motion.h4>
        </div>

        <br/>
        <label className={`
          text-dark dark:text-white font-poppins font-bold md:text-[60px] 
          text-[30px]
        `}>
          { data[language].welcome[1] }
        </label>

        <p 
          className="font-poppins font-bold md:text-[60px] text-[25px] mt-[-7px] text-blue-600"
          style={{
            textShadow: `0 0 2px #2563eb, 0 0 40px #2563eb`
          }}
        >
          { data[language].welcome[2] }
        </p>

        <p className="font-poppins mt-2 text-[15px] md:text-[20px] dark:text-gray-300 text-gray-500">
          { data[language].welcome[3] }
        </p>

        <button className={`
          font-roboto text-blue-600 solid border-blue-600 border-2 pl-5 pb-3 pt-3 pr-5
          transition ease-in-out duration-200 mt-8 rounded-lg font-bold inline-flex 
          items-center hover:bg-blue-600 hover:bg-opacity-10
        `}>
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>{ data[language].welcome[4] }</span>
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
            title={data[language].whatIDo[0]}
            description={data[language].activityContent[3]}
            projectCount={12}
          />

          {
            (width < 800 && selectedActivityCard === 0) &&
              <>
                <ActivityContent 
                  selectedItem={0}
                  selectedLang={language}
                />
              </>
          }

          <ActivityCard
            onClick={() => setSelectedActivityCard(1)}
            selected={selectedActivityCard === 1}
            title={data[language].whatIDo[1]}
            description={data[language].activityContent[4]}
            projectCount={20}
          />

          {
            (width < 800 && selectedActivityCard === 1) &&
              <>
                <ActivityContent 
                  selectedItem={1}
                  selectedLang={language}
                />
              </>
          }

          <ActivityCard
            onClick={() => setSelectedActivityCard(2)}
            selected={selectedActivityCard === 2}
            title={data[language].whatIDo[2]}
            description={data[language].activityContent[5]}
            projectCount={10}
          />

          {
            (width < 800 && selectedActivityCard === 2) &&
              <>
                <ActivityContent 
                  selectedItem={2}
                  selectedLang={language}
                />
              </>
          }
        </div>

        <div className="text-left ml-[100px]">
          {
            (width > 800) && 
              <>
                <ActivityContent 
                  selectedItem={selectedActivityCard}
                  selectedLang={language}
                />
              </>
          }
        </div>
      </div>

      <div className={`
        mt-[150px] mr-auto ml-auto w-[400px] md:w-[800px] text-center md:text-left`
      }>
        <h1 className="font-poppins font-bold text-blue-600 text-[35px]">💻 { data[language].projectHeader[0] }</h1>
        <p className="mt-3 text-slate-500 dark:text-slate-400 text-xl table w-[410px] md:w-[522px]">
          { data[language].projectHeader[1] }
        </p>
      </div>

      <div 
        className={
          `mt-[50px] w-[300px] mr-auto ml-auto w-[50%] grid grid-cols-1 md:grid-cols-2 md:w-[800px]
           2xl:w-[1200px] 2xl:grid-cols-3 grid-gap-4`
        }
      >
        <Project
          name={ data[language].projects[0][0] }
          description={ data[language].projects[0][1] }
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
          imagePath={"project_portfolio.png"}
        />

        <Project
          name={ data[language].projects[1][0] }
          description={ data[language].projects[1][1] }
          technologies={[
            {
              name: "C",
              icon: faC
            }
          ]}
          imagePath={"project_netscrape.png"}
        />

        <Project
          name={ data[language].projects[2][0] }
          description={ data[language].projects[2][1] }
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
          imagePath={"project_contalk.png"}
        />

        <Project
          name={ data[language].projects[3][0] }
          description={ data[language].projects[3][1] }
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
          imagePath={"project_viceverse.png"}
        />
      </div>

      <div className="mt-[50px] mb-[250px] w-[500px] mr-auto ml-auto text-center">
        <motion.h1
          className="text-blue-600 font-poppins font-bold text-[27px]"
        >
          { data[language].contact[0] } ✌️
        </motion.h1>

        <motion.p className="text-gray-400 text-[16px]">
          { data[language].contact[1] }
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
            { data[language].contact[2] }
          </motion.button>
        </a>
      </div>
    </div>
  );
}

export default App;
