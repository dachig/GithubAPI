import { fetchRepositoryCommits } from "../../../../lib/fetchRepositoryCommits";
import Commits from "@/app/components/commits";

export default async function UserPage({
  params,
}: {
  params: { user: string; repository: string };
}) {
  const commits = await fetchRepositoryCommits(params.user, params.repository);
  return (
    <main className="relative isolate overflow-hidden py-4 md:py-8 lg:py-16">
      <div className="mx-auto gap-x-1 gap-y-16 px-8 max-w-5xl">
        <div className="mx-auto flex flex-col gap-4">
          <h2 className="text-2xl text-gray-500">
            Commits for {params.repository}
          </h2>
          <hr />
          <Commits commits={commits} />
        </div>
      </div>
    </main>
  );
}
