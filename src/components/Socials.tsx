import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface Social {
	icon: IconType;
	href: string;
}

interface Props {
	socials: Social[]
}

const Socials = ({ socials }: Props) => {
	return (
		<motion.div>
			{socials.map((el, index) => {
				return (
					<span className="block" key={index as keyof typeof Socials}>
						<a href={el.href}>
							<el.icon 
								className="text-gray-400 mb-2 ml-[-12px] hover:cursor-pointer hover:text-white transition ease-in-out duration-200" 
								size={35}
							/>
						</a>

						<br />
					</span>
				)
			})}

			<div className="h-[150px] w-[2px] bg-gray-400" />
		</motion.div>
	);
};

export default Socials;
