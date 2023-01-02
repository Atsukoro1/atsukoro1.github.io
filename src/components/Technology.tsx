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
                ${!props.color
                    ? "bg-slate-300 dark:bg-slate-700"
                    : `bg-${props.color}-600 bg-opacity-40 border-b-8 border-solid 
                     border-blue-600 border-opacity-50 hover:border-b-4 transition-all ease-in-out`
                }
            `}
        >
			<props.icon 
                className="mr-2" 
                color="white" 
                size={24}
            />
			&nbsp;
			<label className="dark:text-white text-slate-700">
                {props.name}
            </label>
		</motion.div>
	);
};

export default Technology;