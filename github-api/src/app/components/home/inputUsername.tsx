"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Octokit } from "octokit";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";

export function InputUsername() {
  const [username, setUsername] = useState("");
  const [notValidMessage, setNotValidMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
  });
  function isUsernameValid(username: string) {
    setLoading(true);

    new Promise((resolve, reject) => {
      octokit
        .request("GET /users/{username}", {
          username,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        })
        .then(resolve)
        .catch(reject);
    })
      .then((checkUser: any) => {
        if (checkUser.data.public_repos === 0) {
          setNotValidMessage("This user has no public repositories.");
          setLoading(false);
          setTimeout(() => {
            setNotValidMessage("");
          }, 2000);
        } else {
          router.push(`/${username}`);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        }
      })
      .catch((error: any) => {
        setNotValidMessage("This username does not exist.");
        setLoading(false);
        setTimeout(() => {
          setNotValidMessage("");
        }, 2000);
      });
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
          className="text-gray-900"
        />
        <Button
          type="button"
          onClick={() => isUsernameValid(username)}
          className="px-6 text-white hover:bg-primary-foreground"
        >
          {loading ? (
            <ClipLoader
              className="my-0 mx-auto block border-white"
              color="#ffffff"
              loading={loading}
              size={25}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            "Search"
          )}
        </Button>
      </div>
      <span className="text-red-600 text-sm font-semibold">
        {notValidMessage}
      </span>
    </div>
  );
}
