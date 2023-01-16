import { useEffect, useMemo, useState } from "react";

interface Tab {
    title: string;
    element: JSX.Element;
    onClick?: () => void;
    selected?: boolean;
}

type TabT = typeof Tab;

interface TabsProps {
    tabs: Tab[]
}

const Tab = ({ title, onClick, selected }: Tab) => {
    const [active, setActive] = useState<boolean>(
        selected ? selected : false
    );

    useEffect(() => { 
        setActive(selected ? selected : false) 
    }, [selected]);

    return (
        <div 
            className={`
                bg-white m-1 rounded-lg p-2
                ${active ? 
                    "ring-4 ring-blue-400 ring-opacity-20 bg-opacity-100 text-black" 
                    : "bg-opacity-20 text-white"
                }
            `}
            onClickCapture={onClick}
        >
            {title}
        </div>
    )
}

export default ({ tabs }: TabsProps) => {
    const [selected, setSelected] = useState<number>(0);

    const element = useMemo(() => {
        return tabs[selected].element
    }, [selected]);

    return (
        <>
        <div className="flex bg-white bg-opacity-10 p-1 rounded-lg w-fit hover:cursor-pointer">
            {tabs.map((el, index) => {
                return (
                    <Tab
                        onClick={() => setSelected(index)}
                        key={index as keyof TabT}
                        title={el.title}
                        element={el.element}
                        selected={selected === index}
                    />
                )
            })}
        </div>

        {element}
        </>
    )
}