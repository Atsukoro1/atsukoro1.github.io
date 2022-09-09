import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import data from '../assets/data';

interface IProps {
    selectedItem: number;
    selectedLang: number;
}

interface IContent {
    emoji: string;
    title: string;
    description: string;
    longDescription: string;
}

const ActivityContent = ({ selectedItem, selectedLang }: IProps) => {
    const [selected, setSelected] = useState<number>(0);
    const [animating, setAnimating] = useState<boolean>(true);
    const [lang, setLang] = useState<number>(0);

    useEffect(() => {
        setLang(selectedLang);
        setSelected(selectedItem);
    }, [selectedItem, selectedLang]);

    useEffect(() => {
        setTimeout(() => {
            setAnimating(!animating);
        }, 500)
    }, [animating]);

    const content: IContent[] = [
        {
            emoji: "🖥️",
            title: data[lang].activityContent[0],
            description: data[lang].activityContent[3], 
            longDescription: data[lang].activityContent[6]
        },
        {
            emoji: "🌐",
            title: data[lang].activityContent[1],
            description: data[lang].activityContent[4], 
            longDescription: data[lang].activityContent[7]
        },
        {
            emoji: "⌨️",
            title: data[lang].activityContent[2],
            description: data[lang].activityContent[5], 
            longDescription: data[lang].activityContent[8]
        }
    ];

    return (
        <motion.div className='mb-8'>
            <motion.h4
                initial={{
                    translateY: 100
                }}
                animate={{
                    translateY: 0
                }}
                transition={{
                    type: "spring",
                    duration: 200,
                    bounce: 100,
                    stiffness: 300
                }}
                className='text-gray-400 font-roboto text-[15px]'
            >
                { data[lang].activityContent[9] }
            </motion.h4>

            <motion.h1 
                className='text-blue-600 text-[30px] font-poppins font-bold mt-5'
            >
                {
                    `${content[selected].emoji} ${content[selected].title}`
                }
            </motion.h1>

            <motion.h3 className='text-gray-400 mt-2'>
                {
                    content[selected].description 
                }
            </motion.h3>

            <motion.p className='text-gray-500 text-[14px] mt-4'>
                { 
                    content[selected].longDescription 
                }
            </motion.p>
        </motion.div>
    )
}

export default ActivityContent