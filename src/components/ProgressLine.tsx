import { motion, useScroll } from "framer-motion"

const ProgressLine = () => {
    const { scrollYProgress } = useScroll()

    return (
        <motion.div
            className={
                `top-0 left-0 right-0 fixed bg-blue-600 h-1`
            }
            style={{
                scaleX: scrollYProgress,
                transformOrigin: "0%"
            }}
        >
        </motion.div>
    )
}

export default ProgressLine