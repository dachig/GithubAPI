import { fetchUserPublicRepositories } from "@/lib/fetchUserPublicRepositories";
import Repositories from "@/app/components/repositories";
import RepositoryAvatar from "@/app/components/repositoryAvatar";
import NextBreadcrumb from "@/app/components/breadcrumbs";
import { FaHome } from "react-icons/fa";
import { TbMathGreater } from "react-icons/tb";

export default async function UserPage({
  params,
}: {
  params: { user: string };
}) {
  const repositoriesData = await fetchUserPublicRepositories(params.user);
  return (
    <main className="relative isolate overflow-hidden py-4 md:py-8 lg:py-16">
      <div className="mx-auto gap-y-16 px-8 max-w-7xl">
        <div className="mx-auto flex flex-col md:flex-row gap-4">
          <div className="flex items-start md:items-center flex-col gap-4">
            <NextBreadcrumb
              homeElement={<FaHome className="text-xl" />}
              separator={
                <TbMathGreater className="text-sm mt-1 text-gray-400" />
              }
              activeClasses="text-blue-600"
              containerClasses="flex mx-auto"
              listClasses="hover:underline mx-4 font-medium text-sm"
              capitalizeLinks
            />
            <RepositoryAvatar username={params.user} />
          </div>
          <div className="w-full flex flex-col gap-1">
            <h2 className="text-md lg:text-lg tracking-tight text-gray-900 ">
              Public repositories
            </h2>
            <Repositories
              repositories={repositoriesData.repositories.data}
              username={params.user}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
