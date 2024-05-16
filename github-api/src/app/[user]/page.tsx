// "use client";
import Link from "next/link";
import { fetchUserPublicRepositories } from "../../../lib/fetchUserPublicRepositories";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaRegStar } from "react-icons/fa";

export default async function UserPage({
  params,
}: {
  params: { user: string };
}) {
  const repositories = await fetchUserPublicRepositories(params.user);
  console.log(repositories.repositories.data[0]);
  return (
    <main className="relative isolate overflow-hidden py-4 md:py-8 lg:py-16">
      <div className="mx-auto gap-x-1 gap-y-16 px-4 max-w-7xl">
        <div className="mx-auto flex flex-col md:flex-row gap-4">
          <div className="flex items-center gap-2 md:flex-col">
            <Avatar className="w-24 h-24 md:w-44 md:h-44 lg:w-80 lg:h-80">
              <AvatarImage
                src={`${repositories.repositories.data[0].owner.avatar_url}`}
                alt="github-avatar"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="tracking-tight text-md lg:text-lg text-gray-500">
              {params.user}
            </h2>
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="text-md lg:text-lg tracking-tight text-gray-500 ">
              Public repositories of {params.user}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {repositories.repositories.data.map((v, index) => (
                <Card key={index} className="p-4 flex flex-col gap-4">
                  <div className="flex justify-between">
                    <Link
                      href={`/${params.user}/${v.name}`}
                      className="text-blue-600 font-semibold text-sm hover:border-b-2 hover:border-blue-600"
                    >
                      {v.name}
                    </Link>
                    <Badge className="text-gray-500" variant={"outline"}>
                      {v.private == false ? "Public" : "Private"}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">
                      {v.description && v.description.length > 150
                        ? `${v.description.substring(0, 200)}...`
                        : v.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    {v.stargazers_count && v.stargazers_count > 0 ? (
                      <div className="flex gap-1 items-center text-sm text-gray-500">
                        {" "}
                          <FaRegStar className="text-lg text-yellow-500" />{" "}
                       {v.stargazers_count}
                      </div>
                    ) : null}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
