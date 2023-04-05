import ThemeSwitch from "../features/theme/ThemeSwitch";
import reactLogo from "../../public/react.svg";
import viteLogo from "../../public/vite.svg";
import githubMark from "../assets/github-mark.svg";
import githubMarkWhite from "../assets/github-mark-white.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <nav className="bg-gray-50 dark:bg-gray-800">
      <div className="p-5 flex justify-between items-center md:w-[800px] lg:w-[1080px] m-auto">
        {/* logo */}
        <div className="flex gap-3">
          <a href="https://react.dev/" target="_blank">
            <img src={reactLogo} alt="React Logo" className=" w-8 " />
          </a>
          <a href="https://vitejs.dev/" target="_blank">
            <img src={viteLogo} alt="React Logo" className=" w-8 " />
          </a>
          <Link reloadDocument to="/">
            {darkMode ? (
              <img src={githubMarkWhite} alt="React Logo" className="w-8" />
            ) : (
              <img src={githubMark} alt="React Logo" className="w-8" />
            )}
          </Link>
        </div>
        {/* theme Switch */}
        <ThemeSwitch />
      </div>
    </nav>
  );
}

export default Navbar;
