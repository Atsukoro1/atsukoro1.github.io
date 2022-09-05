import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";

const DarkModeButton = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    // TODO: Fix
    useEffect(() => {
        const theme: string | null = localStorage.getItem("theme");

        setDarkMode(
            !theme || theme === "dark"
                ? true
                : false
        );

        if(!theme || theme === "dark") {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
        };
    }, []);

    useEffect(() => {
        if(localStorage.getItem("theme") === "dark") {
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark");
        }
    }, [darkMode]);

    return (
        <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={
                `${darkMode ? "bg-blue-600" : "bg-gray-600"} 
                relative inline-flex h-8 w-14 items-center rounded-full
                transition ease-in-out duration-200`
            }
        >
        <FontAwesomeIcon 
            icon={
                darkMode 
                ? faMoon
                : faSun
            }
            className={`
                ${darkMode ? "translate-x-8" : "translate-x-2"} 
                transition ease-in-out duration-200 inline-block 
                h-4 w-4 transform rounded-full text-white`}
        />
    </Switch>
  );
};

export default DarkModeButton;
