import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface IProps {
    selectedItem: number;
}

interface IContent {
    emoji: string;
    title: string;
    description: string;
    longDescription: string;
}

const ActivityContent = ({ selectedItem }: IProps) => {
    const [selected, setSelected] = useState<number>(0);

    useEffect(() => {
        setSelected(selectedItem);
    }, [selectedItem]);

    const content: IContent[] = [
        {
            emoji: "🖥️",
            title: "Backend damn crazy",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repellat ipsum a. Magni, maxime! Assumenda, nisi placeat fugit totam itaque repellat aperiam numquam quidem nam recusandae molestiae, tempora non omnis!"
        },
        {
            emoji: "🌐",
            title: "Frontend damn crazy",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repellat ipsum a. Magni, maxime! Assumenda, nisi placeat fugit totam itaque repellat aperiam numquam quidem nam recusandae molestiae, tempora non omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            emoji: "📷",
            title: "Design damn crazy",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repellat ipsum a. Magni, maxime! Assumenda, nisi placeat fugit totam itaque repellat aperiam numquam quidem nam recusandae molestiae, tempora non omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ];

    return (
        <motion.div>
            <motion.label className='text-gray-400 font-roboto text-[15px]'>
                What I do
            </motion.label>

            <motion.h1 className='text-blue-600 text-[30px] font-poppins font-bold mt-5'>
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