import Link from "next/link";
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
      <div className="flex flex-col">
        {repositories.repositories.data.map((v, index) => (
          <Link href={`/${params.user}/${v.name}`} key={index}>
            {v.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
