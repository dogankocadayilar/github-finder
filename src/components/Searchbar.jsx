import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../features/search/searchSlice";
import { Link } from "react-router-dom";
import { fetchUsers } from "../features/users/usersSlice";

function Searchbar() {
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();

  return (
    <div className="flex w-full rounded-lg overflow-hidden outline outline-gray-800 dark:outline-gray-300 outline-1 md:w-[600px]">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="w-full indent-4 text-md outline-none border-none bg-transparent"
      />
      <Link
        to="/user"
        onClick={() => dispatch(fetchUsers(searchValue))}
        className="flex items-center justify-center w-14 py-3 cursor-pointer"
      >
        <MagnifyingGlassIcon className="w-5" />
      </Link>
    </div>
  );
}

export default Searchbar;
