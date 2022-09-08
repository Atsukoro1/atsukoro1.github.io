import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import data from '../assets/data';

interface IProps {
    title: string;
    description: string;
    projectCount: number;
    selected: boolean;
    onClick: () => void;
}

const ActivityCard = ({
    title,
    description,
    projectCount,
    selected,
    onClick
}: IProps) => {
    const [isSelected, setSelected] = useState<boolean>(selected);

    useEffect(() => {
        setSelected(selected);
    }, [selected]);

    return (
        <motion.div 
            onClick={() => { onClick() }}
            className={
                `dark:bg-slate-800 bg-slate-200 mb-5 p-2 rounded-md grid grid-cols-2 hover:cursor-pointer
                ${isSelected ? "shadow-2xl shadow-slate-300 dark:shadow-slate-800" : "opacity-80"}`
            }
            animate={{
                scale: isSelected ? 1.04 : 1,
                transition: {
                    type: "spring",
                    duration: 200,
                    stiffness: 300,
                    bounce: 200
                }
            }}
        >
            <motion.div>
                <motion.h1
                    className={`
                        ${isSelected ? "text-blue-500" : "text-gray-400"}
                        font-poppins font-medium mb-2`
                    }
                >
                    { title }
                </motion.h1>

                <motion.p className="text-gray-500 text-[14px] mb-[12px] font-poppins">
                    { description }
                </motion.p>

                <motion.label className="text-blue-600 text-[12px] font-poppins">
                    { projectCount } projects
                </motion.label>
            </motion.div>

            <motion.div>
                <FontAwesomeIcon
                    className='float-right text-blue-600 mt-3 mr-3'
                    size="2x"
                    icon={faProjectDiagram}
                />
            </motion.div>
        </motion.div>
  )
}

export default ActivityCard