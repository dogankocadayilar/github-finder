import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import User from "./pages/User";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <main
      className={`${
        darkMode ? "dark bg-gray-800" : "bg-gray-50"
      }  min-h-screen `}
    >
      <Navbar />
      <div className="flex flex-col items-center  p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
