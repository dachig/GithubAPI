import { fetchUserPublicRepositories } from "../../../lib/fetchUserPublicRepositories";
import Repositories from "../components/repositories";
import RepositoryAvatar from "../components/repositoryAvatar";
import NextBreadcrumb from "../components/breadcrumbs";
import { FaHome } from "react-icons/fa";
import { TbMathGreater } from "react-icons/tb";

export default async function UserPage({
  params,
}: {
  params: { user: string };
}) {
  const repositories = await fetchUserPublicRepositories(params.user);
  return (
    <main className="relative isolate overflow-hidden py-4 md:py-8 lg:py-16">
      <div className="mx-auto gap-y-16 px-8 max-w-7xl">
        <div className="mx-auto flex flex-col md:flex-row gap-4">
          <div className="flex items-start md:items-center flex-col gap-4">
            <NextBreadcrumb
              homeElement={<FaHome className="text-xl" />}
              separator={<TbMathGreater className="text-sm mt-1 text-gray-400" />}
              activeClasses="text-blue-600"
              containerClasses="flex mx-auto"
              listClasses="hover:underline mx-4 font-medium text-sm"
              capitalizeLinks
            />
            <RepositoryAvatar
              avatarUrl={repositories.repositories.data[0].owner.avatar_url}
              user={params.user}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <h2 className="text-md lg:text-lg tracking-tight text-gray-500 ">
              Public repositories of {params.user}
            </h2>
            <Repositories repositories={repositories} user={params.user} />
          </div>
        </div>
      </div>
    </main>
  );
}
