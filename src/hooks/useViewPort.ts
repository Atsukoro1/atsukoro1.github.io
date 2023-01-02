import { useEffect, useState } from "react";

const ResponsiveHook = () => {
	const [height, setHeight] = useState<number>(0);
	const [width, setWidth] = useState<number>(0);

	useEffect(() => {
		setHeight(window.innerHeight);
		setWidth(window.innerWidth);
	}, []);

	return [height, width];
};

export default ResponsiveHook;
