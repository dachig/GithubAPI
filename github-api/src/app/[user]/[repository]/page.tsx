import { fetchRepositoryCommits } from "@/lib/fetchRepositoryCommits";
import CommitsAndFilter from "@/app/components/repositoryPage/commitsAndFilter";
import NextBreadcrumb from "@/app/components/breadcrumbs";
import { FaHome } from "react-icons/fa";
import { TbMathGreater } from "react-icons/tb";

export default async function RespositoryPage({
  params,
}: {
  params: { user: string; repository: string };
}) {
  const commitsData = await fetchRepositoryCommits(
    params.user,
    params.repository
  );
  return (
    <main className="relative isolate overflow-hidden py-4 md:py-8 lg:py-16">
      <NextBreadcrumb
        homeElement={<FaHome className="text-lg" />}
        separator={<TbMathGreater className="text-sm mt-1 text-gray-400" />}
        activeClasses="text-blue-600"
        containerClasses="flex max-w-5xl px-6 py-3 mx-auto"
        listClasses="hover:underline mx-4 font-medium text-sm"
        capitalizeLinks
      />
      <div className="mx-auto gap-y-16 px-8 max-w-5xl">
        <div className="mx-auto flex flex-col gap-4">
          <div className="flex gap-4">
            <h2 className="text-md lg:text-lg tracking-tight text-gray-900">
              Commits for {params.repository}
            </h2>
          </div>
          <hr />
          <CommitsAndFilter commits={commitsData.commits.data} />
        </div>
      </div>
    </main>
  );
}
