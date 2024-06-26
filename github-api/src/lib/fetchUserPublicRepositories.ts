import { Octokit } from "octokit";

export async function fetchUserPublicRepositories(username: any) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
  });
  const repositories = await octokit.request("GET /users/{username}/repos", {
    username,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  return { username, repositories };
}
