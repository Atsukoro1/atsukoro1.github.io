import { motion, useScroll, useSpring } from "framer-motion"

const ProgressLine = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className={
                `top-0 left-0 right-0 fixed bg-blue-600 h-1`
            }
            style={{
                scaleX: scaleX,
                transformOrigin: "0%"
            }}
        >
        </motion.div>
    )
}

export default ProgressLine