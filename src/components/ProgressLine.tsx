import { motion, useScroll, useSpring } from "framer-motion";

const ProgressLine = () => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<div className="left-0 right-0 fixed">
			<motion.div
				className={`top-0 z-10 bg-blue-600 h-1`}
				style={{
					scaleX: scaleX,
					transformOrigin: "0%",
				}}
			/>
		</div>
	);
};

export default ProgressLine;
