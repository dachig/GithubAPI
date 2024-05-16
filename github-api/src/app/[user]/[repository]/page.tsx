import { fetchRepositoryCommits } from "../../../../lib/fetchRepositoryCommits";
import Commits from "@/app/components/commits";
import NextBreadcrumb from "../../components/breadcrumbs";
import { FaHome } from "react-icons/fa";
import { TbMathGreater } from "react-icons/tb";

export default async function UserPage({
  params,
}: {
  params: { user: string; repository: string };
}) {
  const commits = await fetchRepositoryCommits(params.user, params.repository);
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
          <h2 className="text-2xl text-gray-500">
            Commits for {params.repository}
          </h2>
          <hr />
          <Commits commits={commits} />
        </div>
      </div>
    </main>
  );
}
