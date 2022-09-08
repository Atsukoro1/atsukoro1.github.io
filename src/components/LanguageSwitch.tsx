import { useState, useEffect } from 'react';
import { Tab } from "@headlessui/react";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export enum SelectedLanguage {
    CZECH = 1,
    ENGLISH = 2,
}

export interface IProps {
    onLanguageChange: (lang: SelectedLanguage) => void;
}

// TODO: Refactor this shit
const LanguageSwitch = ({ onLanguageChange }: IProps) => {
    const [language, setLanguage] = useState<SelectedLanguage>(SelectedLanguage.ENGLISH);

    function switchLanguage(selected: SelectedLanguage) {
        switch(selected) {
            case SelectedLanguage.CZECH:
                onLanguageChange(SelectedLanguage.CZECH);
                setLanguage(SelectedLanguage.CZECH);
                localStorage.setItem("language", "czech");
                break;
            
            case SelectedLanguage.ENGLISH:
                onLanguageChange(SelectedLanguage.ENGLISH);
                setLanguage(SelectedLanguage.ENGLISH);
                localStorage.setItem("language", "english");
                break;
        };
    };

    useEffect(() => {
        const lang: string | null = localStorage.getItem("language");

        setLanguage(
            !lang || lang === "english" 
                ? () => {
                    onLanguageChange(SelectedLanguage.ENGLISH);
                    return SelectedLanguage.ENGLISH;
                }
                : () => {
                    onLanguageChange(SelectedLanguage.CZECH);
                    return SelectedLanguage.CZECH;
                }
        );

        if(!lang) {
            localStorage.setItem("language", "english");
        }
    }, [onLanguageChange]);

    return (
        <Tab.Group
            onChange={(index: number) => {
                switch(index) {
                    case 0:
                        switchLanguage(SelectedLanguage.CZECH);
                        break;

                    case 1: 
                        switchLanguage(SelectedLanguage.ENGLISH);
                        break;
                }
            }}
        >
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                <Tab
                    className={() => 
                        classNames(
                            'w-full rounded-lg py-2.5 h-7 w-10 text-sm font-medium leading-5 text-white',
                            'ring-slate-700 ring-opacity-60 ring-offset-2 ring-offset-white/[0.09] focus:outline-none focus:ring-2',

                            language === SelectedLanguage.CZECH
                                ? 'bg-white/[0.13] shadow'
                                : 'text-white hover:bg-white/[0.12] hover:text-white'
                        )
                    }
                    onClick={() => switchLanguage(SelectedLanguage.CZECH)}
                >
                    <img 
                        className="h-[25px] w-[25px] align-middle relative mt-[-8px] ml-[8px]" 
                        src="./assets/english_flag.png"
                        alt='english_flag'
                    />
                </Tab>

                <Tab
                    className={() =>
                        classNames(
                            'w-full rounded-lg py-2.5 h-7 w-10 text-sm font-medium leading-5 text-white',
                            'ring-slate-700 ring-opacity-60 ring-offset-2 ring-offset-white/[0.09] focus:outline-none focus:ring-2',

                            language === SelectedLanguage.ENGLISH
                                ? 'bg-white/[0.13] shadow'
                                : 'text-white hover:bg-white/[0.12] hover:text-white'
                        )
                    }
                    onClick={() => switchLanguage(SelectedLanguage.ENGLISH)}
                >
                    <img
                        className="h-[25px] w-[25px] align-middle relative mt-[-8px] ml-[8px]" 
                        src="./assets/czech_flag.png"
                        alt='czech_flag'
                    />
                </Tab>
            </Tab.List>
        </Tab.Group>
    )
}

export default LanguageSwitch