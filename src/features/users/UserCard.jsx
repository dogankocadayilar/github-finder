import { UsersIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos } from "../repos/reposSlice";

function UserCard() {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  return (
    <div className="text-gray-700 dark:text-gray-300 max-w-[500px]">
      {users.loading && <div>Loading...</div>}
      {!users.loading && users.error != "" && (
        <div className="text-red-500 font-semibold">{users.error}</div>
      )}
      {!users.loading && users.error == "" && users.user && (
        <div className="flex flex-col gap-4">
          <img
            src={users?.user.avatar_url}
            alt="Profile Picture"
            className="rounded-2xl object-contain"
          />
          <div>
            <h1 className="font-bold text-2xl">{users?.user.name}</h1>
            <h2 className="font-thin text-xl">{users?.user.login}</h2>
          </div>
          <div className="flex gap-2 items-center">
            <UsersIcon className="w-5" />
            <span>{users?.user.followers} followers</span> ·
            <span>{users?.user.following} following</span>
          </div>
          <div className="flex flex-col">
            {users?.user.bio && (
              <span>
                <span className="font-semibold">Bio - </span>
                {users?.user.bio}
              </span>
            )}
            {users?.user.blog !== "" && (
              <span>
                <span className="font-semibold">Blog - </span>
                {users?.user.blog}
              </span>
            )}
            {users?.user.company && (
              <span>
                <span className="font-semibold">Company - </span>
                {users?.user.company}
              </span>
            )}
            {users?.user.email && (
              <span>
                <span className="font-semibold">Email - </span>
                {users?.user.email}
              </span>
            )}
            {users?.user.location && (
              <span>
                <span className="font-semibold">Location - </span>{" "}
                {users?.user.location}
              </span>
            )}
            {users?.user.twitter_username && (
              <span>
                <span className="font-semibold">Twitter - </span>
                {users?.user.twitter_username}
              </span>
            )}
          </div>
          <button
            onClick={(e) => {
              dispatch(fetchRepos(users.user.login));
              e.target.remove();
            }}
            className="bg-gray-700 text-gray-200 py-3 rounded-xl font-semibold dark:bg-gray-300 dark:text-gray-900"
          >
            See Repositories
          </button>
        </div>
      )}
    </div>
  );
}

export default UserCard;
