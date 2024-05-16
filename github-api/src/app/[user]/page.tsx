import { fetchUserPublicRepositories } from "../../../lib/fetchUserPublicRepositories";
import Repositories from "../components/repositories";
import RepositoryAvatar from "../components/repositoryAvatar";

export default async function UserPage({
  params,
}: {
  params: { user: string };
}) {
  const repositories = await fetchUserPublicRepositories(params.user);
  return (
    <main className="relative isolate overflow-hidden py-4 md:py-8 lg:py-16">
      <div className="mx-auto gap-x-1 gap-y-16 px-8 max-w-7xl">
        <div className="mx-auto flex flex-col md:flex-row gap-4">
          <RepositoryAvatar
            avatarUrl={repositories.repositories.data[0].owner.avatar_url}
            user={params.user}
          />

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
