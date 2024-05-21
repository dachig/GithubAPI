import { Octokit } from "octokit";

export async function fetchRepositoryCommits(
  user: string,
  repository: string,
  page: number
) {  const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
  });

  const commits = await octokit.request(
    `GET /repos/{owner}/{repo}/commits?per_page=20&page=${page}`,
    {
      owner: user,
      repo: repository,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  return { user, commits };
}
