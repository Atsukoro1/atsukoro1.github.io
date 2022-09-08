import LanguageSwitch from "./LanguageSwitch";
import DarkModeButton from "./DarkModeButton";

import { IProps } from "./LanguageSwitch";

const Navbar = ({ onLanguageChange }: IProps) => {
  return (
    <nav className="bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="fixed flex h-16 items-center">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h1 className="text-2xl font-bold">
                <label className="text-blue-600">.</label>
                <label className="dark:text-white text-black">jakub</label>
                <label className="text-blue-600">()</label>
              </h1>
            </div>
          </div>
          <div className="fixed right-0 flex items-center mr-8">
            <LanguageSwitch onLanguageChange={(lang) => {
              onLanguageChange(lang);
            }}/>
            &nbsp;&nbsp;&nbsp;
            <DarkModeButton/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
