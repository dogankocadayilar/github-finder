import { useSelector } from "react-redux";
import RepoCard from "../../components/RepoCard";

function RepoList() {
  const repos = useSelector((state) => state.repos);
  return (
    <div className="dark:text-gray-300">
      {repos.loading && <div>Loading...</div>}
      {!repos.loading && repos.error != "" && <div>{repos.error}</div>}
      {!repos.loading && repos.error == "" && repos.repos?.length == 0 && (
        <div className="text-xl font-bold">
          There is no repositories to show
        </div>
      )}
      {!repos.loading &&
        repos.error == "" &&
        repos.repos &&
        repos.repos.map((repo) => (
          <RepoCard
            key={repo.id}
            name={repo.name}
            visibility={repo.visibility}
            description={repo.description}
            language={repo.language}
            license={repo.license}
            updated_at={repo.updated_at}
            url={repo.html_url}
          />
        ))}
    </div>
  );
}

export default RepoList;
