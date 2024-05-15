import { fetchRepositoryCommits } from "../../../../lib/fetchRepositoryCommits";

export default async function UserPage({
  params,
}: {
  params: { user: string; repository: string };
}) {
  const commits = await fetchRepositoryCommits(params.user, params.repository);
  console.log(commits.commits.data[0].commit);
  return (
    <main>
      <h2>hallo</h2>
    </main>
  );
}
