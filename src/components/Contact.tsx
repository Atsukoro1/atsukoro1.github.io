import { useState } from "react";
import { IconType } from "react-icons";

interface PropsI {
	text: string;
	icon: IconType;
	copyText?: string;
	href?: string;
}

enum ContactState {
	COPIED = 1,
	IDLE = 2,
}

export default (props: PropsI) => {
	const [state, setState] = useState<ContactState>(ContactState.IDLE);
	const [text, setText] = useState<string>(props.text);

	const onClick = () => {
		setState(ContactState.COPIED);
		setText("Copied!");

		navigator.clipboard.writeText(props.copyText || "");

		setTimeout(() => {
			setState(ContactState.IDLE);
			setText(props.text);
		}, 2000);
	};

	return (
		<div
			{...(props.copyText && { onClick: onClick })}
			className={`
				${state === ContactState.COPIED ? "bg-green-600" : "bg-blue-600"} 
				w-fit flex p-3 rounded-lg hover:opacity-90 hover:cursor-pointer
				active:scale-105 ease-in-out 
			`}
		>
			<props.icon color="white" size={24} />

			{!props.href && <span className="text-white ml-2">{text}</span>}
			{props.href && (
				<a className="text-white ml-2" href={props.href}>
					{text}
				</a>
			)}
		</div>
	);
};
