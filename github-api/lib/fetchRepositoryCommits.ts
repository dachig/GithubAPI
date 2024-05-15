import { Octokit } from "octokit";
import { fetchUserPublicRepositories } from "./fetchUserPublicRepositories";

export async function fetchRepositoryCommits(user: string, repository: string) {
  const repositories = await fetchUserPublicRepositories(user);

  const commits = await repositories.octokit.request(
    "GET /repos/{owner}/{repo}/commits",
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
