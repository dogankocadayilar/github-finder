import UserCard from "../features/users/UserCard";
import RepoList from "../features/repos/RepoList";

function User() {
  return (
    <section className="md:flex md:gap-10 md:w-[800px] lg:w-[1080px] justify-center">
      <UserCard />
      <RepoList />
    </section>
  );
}

export default User;
