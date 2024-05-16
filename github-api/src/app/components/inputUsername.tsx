"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Octokit } from "octokit";
import { useRouter } from "next/navigation";

export function InputUsername() {
  const [username, setUsername] = useState("");
  const [notValidMessage, setNotValidMessage] = useState("");
  const router = useRouter();
  const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
  });

  async function isUsernameValid(username: string) {
    try {
      const checkUser = await octokit.request("GET /users/{username}", {
        username,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      if (checkUser.data.public_repos == 0) {
        setNotValidMessage("This user has no public repositories.");
        setTimeout(() => {
          setNotValidMessage("");
        }, 3000);
      } else {
        router.push(`/${username}`);
      }
    } catch (error) {
      setNotValidMessage("This username does not exist.");
      setTimeout(() => {
        setNotValidMessage("");
      }, 3000);
    }
  }

  return (
    <div>
      <div className="mt-6 flex max-w-md gap-x-4">
        <Input
          id="github-username"
          required
          onChange={(e) => setUsername(e.target.value)}
          type="search"
          placeholder="Enter a username"
          className="bg-white/5 text-white"
        />
        <Button
          type="button"
          onClick={() => isUsernameValid(username)}
          className="px-6 text-white hover:bg-primary-foreground"
        >
          Search
        </Button>
      </div>
      <span className="text-red-600 text-sm font-semibold">
        {notValidMessage}
      </span>
    </div>
  );
}
