import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "./searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { fetchUsers } from "../users/usersSlice";

function Searchbar() {
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchValue.trim() === "") return;
    dispatch(fetchUsers(searchValue.trim()));
    navigate("/user");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full rounded-lg overflow-hidden outline outline-gray-800 dark:outline-gray-300 outline-1 md:w-[600px]"
    >
      <input
        type="text"
        value={searchValue}
        placeholder="Search with Github username..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="w-full indent-4 text-md outline-none border-none bg-transparent"
      />
      <button className="flex items-center justify-center w-14 py-3 cursor-pointer">
        <MagnifyingGlassIcon className="w-5" />
      </button>
    </form>
  );
}

export default Searchbar;
