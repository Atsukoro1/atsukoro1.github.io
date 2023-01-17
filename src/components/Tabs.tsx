import { useEffect, useMemo, useState } from "react";

interface Tab {
	title: string;
	element: JSX.Element;
	onClick?: () => void;
	selected?: boolean;
}

type TabT = typeof Tab;

interface TabsProps {
	tabs: Tab[];
}

const Tab = ({ title, onClick, selected }: Tab) => {
	const [active, setActive] = useState<boolean>(selected ? selected : false);

	useEffect(() => {
		setActive(selected ? selected : false);
	}, [selected]);

	return (
		<div
			className={`
                bg-blue-600 m-1.5 w-fit text-center rounded-lg p-1 md:p-2 text-white
                ${active && "ring-4 ring-blue-600 ring-opacity-40 bg-opacity-100"}
                ${!active && "bg-opacity-40"}
            `}
			onClickCapture={onClick}
		>
			{title}
		</div>
	);
};

export default ({ tabs }: TabsProps) => {
	const [selected, setSelected] = useState<number>(0);

	const element = useMemo(() => {
		return tabs[selected].element;
	}, [selected]);

	return (
		<>
			<div className="flex bg-blue-600 bg-opacity-30 p-1 md:p-2 rounded-2xl w-fit hover:cursor-pointer">
				{tabs.map((el, index) => {
					return (
						<Tab
							onClick={() => setSelected(index)}
							key={index as keyof TabT}
							title={el.title}
							element={el.element}
							selected={selected === index}
						/>
					);
				})}
			</div>

            <div className="bg-blue-600 bg-opacity-10 p-2 rounded-2xl w-fit mt-5">
                {element}
            </div>
		</>
	);
};
