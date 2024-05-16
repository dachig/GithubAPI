import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";

export default function Repositories({ repositories, user }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repositories.repositories.data.map((repo: any, index: number) => (
        <Card key={index} className="p-4 flex flex-col gap-4">
          <div className="flex justify-between">
            <Link
              href={`/${user}/${repo.name}`}
              className="text-blue-600 font-semibold text-sm hover:border-b-2 hover:border-blue-600"
            >
              {repo.name}
            </Link>
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
          <div className="mt-auto">
            {repo.stargazers_count && repo.stargazers_count > 0 ? (
              <div className="flex gap-1 items-center text-sm text-gray-500">
                {" "}
                <FaRegStar className="text-lg text-yellow-500" />{" "}
                {repo.stargazers_count}
              </div>
            ) : null}
          </div>
        </Card>
      ))}
    </div>
  );
}