import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./themeSlice";

function ThemeSwitch() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center space-x-2">
      <SunIcon className="w-5 text-gray-700 dark:text-gray-300" />
      <div className="theme-switch">
        <input
          type="checkbox"
          className="checkbox"
          checked={darkMode}
          onChange={() => dispatch(toggleTheme())}
        />
        <div className="switcher" />
      </div>
      <MoonIcon className="w-5 text-gray-700 dark:text-gray-300" />
    </div>
  );
}

export default ThemeSwitch;
