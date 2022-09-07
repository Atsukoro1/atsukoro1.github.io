import { IconDefinition } from "@fortawesome/fontawesome-common-types/index";
import { faDiagramNext } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, Variants } from 'framer-motion';

interface ITechnology {
    name: string;
    icon: IconDefinition
}

interface IProps {
    name: string;
    description?: string;
    technologies: ITechnology[],
    imagePath?: string;
}

const Project = ({ 
    name,
    description, 
    technologies
}: IProps) => {
  // TODO: Make this work and be responsive
  // const cardVariants: Variants = {
  //   offscreen: {
  //     x: 150
  //   },
  //   onscreen: {
  //     x: 0,
  //     transition: {
  //       type: "spring",
  //       bounce: 0.7,
  //       duration: 1.5
  //     }
  //   }
  // };

  return (
    <motion.div 
      className="bg-slate-200 dark:bg-slate-800 h-[300px] w-[370px] p-4 rounded-lg mb-10"
      // initial="offscreen"
      // whileInView="onscreen"
      // variants={cardVariants}
      // viewport={{ amount: 0.9, once: true }}
    >
      <FontAwesomeIcon 
        className="text-blue-600 mb-5" 
        icon={faDiagramNext}
        size="3x"
      />

      <motion.h1 className="text-slate-700 dark:text-gray-200 font-poppins text-xl font-normal">
        { name }
      </motion.h1>

      <motion.p className="text-gray-500 dark:text-gray-400 font-poppins text-[15px] table w-[250px]">{ description }</motion.p>

      <div className="grid grid-cols-3 mt-4">
        { 
          /* Technology badges */
          technologies.map((el: ITechnology, key: number) => {

            return (
              <motion.div 
                className="bg-slate-300 dark:bg-slate-700 p-1 rounded-full text-center text-slate-300 m-2" 
                key={key}
              >
                <FontAwesomeIcon className="dark:text-white text-slate-700" icon={el.icon}/>
                &nbsp;
                <label className="dark:text-white text-slate-700">
                  { el.name }
                </label>
              </motion.div>
            )
          }) 
        }
      </div>
    </motion.div>
  )
}

export default Project