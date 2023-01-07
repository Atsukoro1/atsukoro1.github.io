import { motion } from "framer-motion";
import { IconType } from "react-icons";

export interface TechnologyI<T> {
	icon: IconType;
	name: string;
	color?: T;
}

const Technology = (props: TechnologyI<string | number>) => {
	return (
		<motion.div
			className={`
                w-fit pb-1 pt-1 pr-6 pl-6 rounded-full justify-center text-slate-300 m-2 flex
                bg-opacity-100 dark:bg-opacity-10 bg-blue-600 border-b-4 border-blue-700 border-opacity-30
            `}
		>
			<props.icon className="mr-2" color="white" size={24} />
			&nbsp;
			<label className="text-white">{props.name}</label>
		</motion.div>
	);
};

export default Technology;
