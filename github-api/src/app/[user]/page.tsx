import { fetchUserPublicRepositories } from "../../../lib/fetchUserPublicRepositories";

export default async function UserPage({
  params,
}: {
  params: { user: string };
}) {
  const repositories = await fetchUserPublicRepositories(params.user);
  return (
    <main>
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Public repositories of {params.user}
      </h2>
      <div>
        {repositories.repositories.data.map((v, index) => (
          <h3 key={index}>{v.name}</h3>
        ))}
      </div>
    </main>
  );
}
