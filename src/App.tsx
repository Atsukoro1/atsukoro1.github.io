import { motion } from "framer-motion";

import ActivityContent from "./components/ActivityContent";
import ProgressLine from "./components/ProgressLine";
import ActivityCard from "./components/ActivityCard";
import Socials from "./components/Socials";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

import { faCss3, faNodeJs, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [selectedActivityCard, setSelectedActivityCard] = useState<number>(0);

  return (
    <div className="App">
      <div className="none md:block fixed top-0">
        <ProgressLine/>
        <Navbar></Navbar>
        <Socials></Socials>
      </div>

      {/* Main content */}
      <motion.div
        className="ml-auto mr-auto md:w-[1000px] w-[500px] mt-[250px] text-center md:text-left"
        initial={{ rotate: 45 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <h4 className="text-blue-600 font-roboto md:text-2xl text-xl">👋 Hi, my name is</h4>

        <label className="font-poppins font-bold md:text-[60px] text-[35px] text-white">Jakub Dornicak</label>
        <p className="font-poppins text-gray-400 font-bold md:text-[60px] text-[35px] mt-[-10px] text-white">I build things for the web</p>
        <p className="font-poppins mt-2 text-[20px] text-gray-400">
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

      <div className="grid grid-cols-2 w-[1000px] mr-auto ml-auto mt-40">
        <div className="text-left">
          <ActivityCard
            onClick={() => setSelectedActivityCard(0)}
            selected={selectedActivityCard === 0}
            title="Backend"
            description="Create digital products with unique ideas"
            projectCount={12}
          />

          <ActivityCard
            onClick={() => setSelectedActivityCard(1)}
            selected={selectedActivityCard === 1}
            title="Frontend"
            description="Create digital products with unique ideas"
            projectCount={20}
          />

          <ActivityCard
            onClick={() => setSelectedActivityCard(2)}
            selected={selectedActivityCard === 2}
            title="Design"
            description="Create digital products with unique ideas"
            projectCount={10}
          />
        </div>

        <div className="text-left ml-[100px]">
          <ActivityContent selectedItem={selectedActivityCard}/>
        </div>
      </div>

      <div className="mt-[150px] mr-auto ml-auto w-[800px]">
        <h1 className="font-poppins font-bold text-blue-600 text-[35px]">💻 My projects</h1>
        <p className="mt-3 text-gray-400 text-xl table w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="mt-[50px] mr-auto ml-auto w-[800px] grid grid-cols-2">
        <Project
          name="Portfolio"
          description="Simple portofolio made using React, Node.js, Typescript, TailwindCSS and Framer motion. This project is used as my main website."
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
          description="TCP traffic sniffer, displaying packets in human-readable format, I will do a remake of this in rust with GUI soon."
          technologies={[
            {
              name: "C",
              icon: faC
            }
          ]}
        />

        <Project
          name="Contalk"
          description="Messenger-like application, simple chan using websockets (socket.io) and frontend using react."
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
          description="Website for our company, made with Vue and tailwind."
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
    </div>
  );
}

export default App;
