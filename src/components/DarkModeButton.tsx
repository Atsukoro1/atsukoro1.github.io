import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch } from "@headlessui/react";
import { useState, useEffect } from "react";

const DarkModeButton = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    function switchDarkMode(value: boolean) {
        if(value) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        }
    }

    useEffect(() => {
        const theme: string | null = localStorage.getItem("theme");

        console.log(theme);

        if(!theme || theme == "dark") {
            switchDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    return (
        <Switch
            checked={darkMode}
            onChange={switchDarkMode}
            className={
                `${darkMode ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"} 
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
