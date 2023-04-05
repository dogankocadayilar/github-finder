import Searchbar from "../components/Searchbar";
import githubMark from "../assets/github-mark.svg";
import githubMarkWhite from "../assets/github-mark-white.svg";
import { useSelector } from "react-redux";

function Home() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <section className="bg-gray-50 dark:bg-gray-800 px-3 flex flex-col gap-10">
      <div>
        <div className="grid place-items-center">
          <img
            src={darkMode ? githubMarkWhite : githubMark}
            alt="Github Logo"
            className=" object-contain w-[175px] md:w-[200px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 dark:text-gray-100 md:mx-auto md:gap-10">
        <h1 className="font-bold text-4xl">Github Finder</h1>
        <p className="text-center md:w-[800px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          qui debitis aliquam et sapiente omnis suscipit eius, similique cumque
          ipsam nam minus, nobis deserunt. Iste officia quis nostrum. Fuga
          distinctio nemo quam officiis, corporis, laudantium libero quis
          explicabo vitae sunt dignissimos. Repellendus aliquid ipsa
          exercitationem architecto, necessitatibus sequi at molestias.
        </p>
        <Searchbar />
      </div>
    </section>
  );
}

export default Home;
