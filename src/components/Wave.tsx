import { motion } from "framer-motion"

interface IProps {
    path: string;
    opacity: number;
}

const Wave = ({ path, opacity }: IProps) => {
  return (
    <motion.svg className={"mb-[-22%]"} xmlns={"http://www.w3.org/2000/svg"} viewBox="0 0 1440 320">
        <path className={`opacity-[0.3]`} fill="#475569" fill-opacity="1" d={path}></path>
    </motion.svg>
  )
}

export default Wave