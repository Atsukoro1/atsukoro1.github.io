import { motion, useScroll, useTransform } from "framer-motion"

const ProgressLine = () => {
    const { scrollYProgress } = useScroll()

    return (
        <motion.div
            className={
                `top-0 left-0 fixed bg-blue-600 shadow-2xl 
                shadow-blue-500/50 h-1`
            }
            style={{
                width: "100%",
                scaleX: scrollYProgress
            }}
        >
        </motion.div>
    )
}

export default ProgressLine