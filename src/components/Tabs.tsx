import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface Tab {
	title: string;
	element: JSX.Element;
	onClick?: () => void;
	selected?: boolean;
}

type TabT = typeof Tab;

interface TabsProps {
	tabs: Tab[];
}

const Tab = ({ title, onClick, selected }: Tab) => {
	const [active, setActive] = useState<boolean>(selected ? selected : false);

	useEffect(() => {
		setActive(selected ? selected : false);
	}, [selected]);

	return (
		<AnimatePresence>
			<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.2 }}
			onClickCapture={onClick}
		>
			<motion.div className={`
                w-fit text-center rounded-tl-lg rounded-tr-lg p-1 md:p-2 text-white mr-2 ml-2
				${active && "bg-opacity-30"}
                ${!active && "bg-opacity-20"}
            `}>
				{title}
			</motion.div>

			{selected && <motion.div layoutId="underline" className="bg-blue-600 h-0.5 w-full"/>}
		</motion.div>
		</AnimatePresence>
	);
};

export default ({ tabs }: TabsProps) => {
	const [selected, setSelected] = useState<number>(0);

	const element = useMemo(() => {
		return tabs[selected].element;
	}, [selected]);

	return (
		<>
			<div className="flex pr-3 pt-3 pl-3 w-[420px] blue-400 dark:bg-blue-600 bg-opacity-20 rounded-tr-lg rounded-tl-xl hover:cursor-pointer">
				{tabs.map((el, index) => {
					return (
						<Tab
							onClick={() => setSelected(index)}
							key={index as keyof TabT}
							title={el.title}
							element={el.element}
							selected={selected === index}
						/>
					);
				})}
			</div>

			<div className="bg-blue-600 bg-opacity-10 w-[420px]">
				{element}
			</div>
		</>
	);
};
