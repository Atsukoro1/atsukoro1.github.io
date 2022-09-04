import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import DarkModeButton from "./DarkModeButton"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h1 className="text-2xl font-bold">
                <label className="text-blue-600">.</label>
                <label className="text-white">jakub</label>
                <label className="text-blue-600">()</label>
              </h1>
            </div>
          </div>
          <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <DarkModeButton/>

            <motion.div 
              className="ml-5"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ 
                duration: 2.5,
                type: "spring", 
                stiffness: 260,
                damping: 20
              }}
            >
              <FontAwesomeIcon
                href="https://www.linkedin.com/in/jakub-dornicak-b6953423b/"
                icon={faLinkedin}
                size="2x"
                className={
                  `text-blue-600 ml-3 hover:cursor-pointer hover:text-white
                  transition ease-in-out duration-200`
                }
              />
            </motion.div>

            <motion.div
              className="ml-1"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ 
                duration: 2.5,
                type: "spring", 
                stiffness: 260,
                damping: 20
              }}
            >
              <FontAwesomeIcon 
                href="https://github.com/Atsukoro1"
                icon={faGithub}
                size="2x"
                className={
                  `text-blue-600 ml-3 hover:cursor-pointer hover:text-white
                  transition ease-in-out duration-200`
                }
              />
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
