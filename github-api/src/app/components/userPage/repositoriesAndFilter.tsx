"use client";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { RepositoryCard } from "@/app/components/userPage/repositoryCard";

const filterOptions = ["stars", "language"];

export default function RepositoriesAndFilter({ repositories, username }: any) {
  const [selectedFilter, setSelectedFilter] = useState("clear");
  const [filteredRepositories, setFilteredRepositories] =
    useState(repositories);
  function handleFilterChange(filter: string) {
    setSelectedFilter(filter);
    let sortedRepositories = [...repositories];

    switch (filter) {
      case "stars":
        sortedRepositories.sort(
          (a: any, b: any) => b.stargazers_count - a.stargazers_count
        );
        break;
      case "language":
        sortedRepositories.sort((a: any, b: any) =>
          (a.language || "").localeCompare(b.language || "")
        );

        break;
      case "clear":
        sortedRepositories = [...repositories];
        break;
      default:
        break;
    }
    setFilteredRepositories(sortedRepositories);
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {filterOptions.map(
          (filter, index) =>
            filter != "clear" && (
              <Badge
                className="hover:cursor-pointer"
                onClick={() => handleFilterChange(filter)}
                key={index}
                variant={selectedFilter == filter ? "default" : "outline"}
              >
                {filter}
              </Badge>
            )
        )}
        {selectedFilter != "clear" && (
          <Badge
            className="hover:cursor-pointer"
            onClick={() => handleFilterChange("clear")}
            variant="outline"
          >
            Clear
          </Badge>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRepositories.map((repo: any, index: number) => (
          <RepositoryCard key={index} repo={repo} user={username} />
        ))}
      </div>
    </div>
  );
}
