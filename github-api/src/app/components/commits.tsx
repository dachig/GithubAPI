"use client";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Commits({ commits }: any) {
  const [filterQuery, setFilterQuery] = useState("");
  const [filteredCommits, setFilteredCommits] = useState(commits);
  function handleSearchChange() {
    const filteredCommits = commits.filter((v: any) =>
      v.commit.message.toLowerCase().includes(filterQuery.toLowerCase())
    );
    if (filterQuery.length > 0) {
      setFilteredCommits(filteredCommits);
    } else {
      setFilteredCommits(commits);
    }
  }
  function clearFilter() {
    setFilteredCommits(commits);
    setFilterQuery("");
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex">
        <Input
          id="github-username"
          required
          onChange={(e) => setFilterQuery(e.target.value)}
          type="text"
          placeholder="Search commit"
          className="outline-none bg-white text-gray-900 rounded-r-none"
          value={filterQuery}
        />
        <Button
          onClick={handleSearchChange}
          className="text-white rounded-none"
        >
          Search
        </Button>
        <Button
          variant="secondary"
          onClick={clearFilter}
          className="text-black rounded-l-none"
        >
          clear
        </Button>
      </div>
      {filteredCommits.map((v: any, index: number) => (
        <Card key={v.commit.tree.sha} className="px-4 py-2 flex flex-col gap-2">
          <div>
            <h3 className="font-medium text-sm text-gray-900">
              {v.commit.message}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage
                src={`${v.committer?.avatar_url}`}
                alt="github-avatar"
              />
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
            <span className="tracking-tight text-sm text-gray-500">
              {v.committer?.login && v.committer.login != "web-flow" ? (
                <Link href={`/${v.committer.login}`}> {v.committer.login}</Link>
              ) : (
                v.commit.committer?.name
              )}{" "}
              commited on {v.commit.committer?.date?.substring(0, 10)}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}
