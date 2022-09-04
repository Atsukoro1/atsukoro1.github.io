import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from "framer-motion"

const Socials = () => {
  return (
    <motion.div className="fixed bottom-0 left-7">
        <FontAwesomeIcon
            href="https://www.linkedin.com/in/jakub-dornicak-b6953423b/"
            icon={faGithub}
            size="2x"
            className={
              `text-gray-400 mb-2 ml-[-12px] hover:cursor-pointer hover:text-white
               transition ease-in-out duration-200`
            }
        />

        <br/>

        <FontAwesomeIcon
            href="https://www.linkedin.com/in/jakub-dornicak-b6953423b/"
            icon={faLinkedin}
            size="2x"
            className={
              `text-gray-400 mb-2 ml-[-12px] hover:cursor-pointer hover:text-white
               transition ease-in-out duration-200`
            }
        />
        <div className="h-[150px] w-[2px] mb-10 bg-gray-400"></div>

        <p className="font-roboto text-xl text-gray-400 -rotate-90 ml-[-45px] mb-[40px]">Socials</p>
    </motion.div>
  )
}

export default Socials