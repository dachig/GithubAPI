"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CommitCard from "@/app/components/repositoryPage/commitCard";

export default function CommitsAndFilter({ commits }: any) {
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
      {filteredCommits.map((commit: any) => (
        <CommitCard key={commit.commit.tree.sha} commit={commit} />
      ))}
    </div>
  );
}
