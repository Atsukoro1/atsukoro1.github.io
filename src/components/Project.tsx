import { faDiagramNext } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import Technology from "./Technology";

interface ITechnology {
	name: string;
	icon: IconType;
}

interface IProps {
	name: string;
	description?: string;
	technologies: ITechnology[];
	imagePath?: string;
}

const Project = ({ name, description, technologies, imagePath }: IProps) => {
	// TODO: Make animations here work and responsive based on screen size

	return (
		<motion.div
			className="bg-slate-200 dark:bg-slate-800 h-fit w-[370px] rounded-lg mb-10 overflow-hidden hover:cursor-pointer"
			whileHover={{
				translateY: -5,
			}}
			transition={{
				type: "spring",
				stiffness: 200,
			}}
		>
			<div
				style={{
					backgroundImage: `url(./assets/${imagePath})`,
				}}
				className="relative cover h-[100px] w-full bg-cover bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden"
			>
				<div className="bg-gradient-to-t from-slate-200 dark:from-slate-800 to-slate-200) h-[200px] absolute overflow-hidden mt-[-90px] w-[370px]"></div>
			</div>

			<div className="p-4 mt-[-85px] overflow-hidden">
				<FontAwesomeIcon
					className="text-blue-600 mb-5"
					icon={faDiagramNext}
					size="3x"
				/>

				<motion.h1 className="text-slate-700 dark:text-gray-200 font-poppins text-xl font-normal">
					{name}
				</motion.h1>

				<motion.p className="text-gray-500 dark:text-gray-400 font-poppins text-[15px] table w-[250px]">
					{description}
				</motion.p>

				<div className="grid grid-cols-2 mt-4">
					{technologies.map((el: ITechnology, key: number) => {
						return <Technology name={el.name} icon={el.icon} />;
					})}
				</div>
			</div>
		</motion.div>
	);
};

export default Project;
