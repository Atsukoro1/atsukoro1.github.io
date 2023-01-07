import { useState } from "react";
import { IconType } from "react-icons";

interface PropsI {
	text: string;
	icon: IconType;
	copyText?: string;
	href?: string;
}

export default (props: PropsI) => {
	const [text, setText] = useState<string>(props.text);

	const onClick = () => {
		setText("Copied!");
		navigator.clipboard.writeText(props.copyText || "");

		setTimeout(() => {
			setText(props.text);
		}, 2000);
	};

	const additional = {
		...(props.copyText && { onClick: onClick }),
		...(props.href && { href: props.href }),
	};

	return (
		<div
			className="bg-blue-600 w-fit flex p-3 rounded-lg hover:opacity-90 hover:cursor-pointer"
			{...additional}
		>
			<props.icon color="white" size={24} />
			<span className="text-white ml-2">{text}</span>
		</div>
	);
};
