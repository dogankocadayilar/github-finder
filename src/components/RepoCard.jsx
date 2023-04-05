function RepoCard({
  name,
  description,
  visibility,
  language,
  license,
  updated_at,
  url,
}) {
  return (
    <div className="flex flex-col gap-2 border-b bg-transparent  p-2">
      <div className="space-x-3 flex items-center">
        <a className="underline font-bold text-lg" href={url} target="_blank">
          {name}
        </a>
        <span className="px-2 outline h-6 flex w-min rounded-full items-center outline-1">
          {visibility}
        </span>
      </div>
      <p>{description}</p>
      <div className="space-x-10 flex">
        <span className="flex w-min gap-2 items-center">
          <span className="w-2 h-2 outline outline-1 rounded-full" />
          {language}
        </span>
        <span>{license?.name}</span>
        <span>{new Date(updated_at).toDateString()}</span>
      </div>
    </div>
  );
}

export default RepoCard;
