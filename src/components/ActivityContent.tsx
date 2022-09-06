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
    const [selected, setSelected] = useState<number>(1);

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
            longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repellat ipsum a. Magni, maxime! Assumenda, nisi placeat fugit totam itaque repellat aperiam numquam quidem nam recusandae molestiae, tempora non omnis!"
        },
        {
            emoji: "📷",
            title: "Design damn crazy",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repellat ipsum a. Magni, maxime! Assumenda, nisi placeat fugit totam itaque repellat aperiam numquam quidem nam recusandae molestiae, tempora non omnis!"
        }
    ];

    return (
        <motion.div>
            <motion.label>
                What I do
            </motion.label>

            <motion.h1>
                {
                    `${content[selected].emoji} ${content[selected].title}`
                }
            </motion.h1>

            <motion.h3>
                { content[selected].description }
            </motion.h3>

            <motion.p>
                { content[selected].longDescription }
            </motion.p>
        </motion.div>
    )
}

export default ActivityContent