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
    const [animating, setAnimating] = useState<boolean>(true);

    useEffect(() => {
        setSelected(selectedItem);
    }, [selectedItem]);

    useEffect(() => {
        setTimeout(() => {
            setAnimating(!animating);
        }, 500)
    }, [animating]);

    const content: IContent[] = [
        {
            emoji: "🖥️",
            title: "Backend",
            description: "Functional side of websites I do.", 
            longDescription: "I enjoy writing complex web servers in Node.js, I've worked in libraries/frameworks like Express, Fastify, Nest.JS and others (you can find them all on my github). I also have experience with both SQL and NoSQL databases, specifically I've often worked with MongoDB, MySQL and PostgreSQL. I'm always open to try new technologies and improve the projects I'm working on."
        },
        {
            emoji: "🌐",
            title: "Frontend",
            description: "The visible site of the work I do.", 
            longDescription: "For most of my web applications I also did the frontend. Most of the time I work with React and VueJS, I can work with classic CSS and other CSS frameworks like TailwindCSS or Bootstrap. I often use the Framer motion library with React to create beautiful smooth animations on the page."
        },
        {
            emoji: "⌨️",
            title: "Other",
            description: "Other things I do in my free time.", 
            longDescription: "Apart from web applications, in my free time I make terminal or desktop applications using Rust. I don't have that much experience in this language yet, but I believe that in the future I will be able to work in it as well."
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
                What I do
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