import ThemeSwitch from "./ThemeSwitch";
import reactLogo from "../../public/react.svg";
import viteLogo from "../../public/vite.svg";

function Navbar() {
  return (
    <nav className="bg-gray-50 dark:bg-gray-800">
      <div className="p-5 flex justify-between items-center md:w-[800px] lg:w-[1080px] m-auto">
        {/* logo */}
        <div className="flex gap-3">
          <img src={reactLogo} alt="React Logo" className=" w-8 " />
          <img src={viteLogo} alt="React Logo" className=" w-8 " />
        </div>
        {/* theme Switch */}
        <ThemeSwitch />
      </div>
    </nav>
  );
}

export default Navbar;
