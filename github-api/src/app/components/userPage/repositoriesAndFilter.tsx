"use client";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { FaCode, FaRegStar } from "react-icons/fa";

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
          <Card key={index} className="p-4 flex flex-col gap-4">
            <div className="flex justify-between">
              {repo.size == 0 ? (
                <div className="text-blue-600 font-semibold text-sm flex flex-col">
                  <span>{repo.name}</span>
                  <span className="text-gray-400 text-xs font-normal">
                    This repository has no commits
                  </span>
                </div>
              ) : (
                <Link
                  href={`/${username}/${repo.name}`}
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  {repo.name}
                </Link>
              )}

              <Badge className="text-gray-500" variant={"outline"}>
                {repo.private == false ? "Public" : "Private"}
              </Badge>
            </div>
            <div>
              <p className="text-gray-500 text-sm">
                {repo.description && repo.description.length > 150
                  ? `${repo.description.substring(0, 200)}...`
                  : repo.description}
              </p>
            </div>
            <div className="mt-auto flex gap-2">
              {repo.stargazers_count && repo.stargazers_count > 0 ? (
                <div className="flex gap-1 items-center text-sm text-gray-500">
                  {" "}
                  <FaRegStar className="text-lg text-yellow-500" />{" "}
                  {repo.stargazers_count}
                </div>
              ) : null}
              {repo.language ? (
                <div className="flex gap-1 items-center text-sm text-gray-500">
                  <FaCode className="text-lg text-primary" /> {repo.language}
                </div>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
