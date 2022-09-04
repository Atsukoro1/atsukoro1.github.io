import { motion } from "framer-motion";

import ProgressLine from "./components/ProgressLine";
import Socials from "./components/Socials";
import Navbar from "./components/Navbar";

function App() {
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
    </div>
  );
}

export default App;
