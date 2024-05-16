import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fetchRepositoryCommits } from "../../../../lib/fetchRepositoryCommits";
import { fetchUserPublicRepositories } from "../../../../lib/fetchUserPublicRepositories";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FaRegStar } from "react-icons/fa";

export default async function UserPage({
  params,
}: {
  params: { user: string; repository: string };
}) {
  const commits = await fetchRepositoryCommits(params.user, params.repository);
  const repositories = await fetchUserPublicRepositories(params.user);

  console.log(commits.commits.data.map((commit) => commit));
  return (
    <main className="relative isolate overflow-hidden py-4 md:py-8 lg:py-16">
      <div className="mx-auto gap-x-1 gap-y-16 px-4 max-w-7xl">
        <div className="mx-auto flex flex-col gap-4">
          <h2 className="text-2xl text-gray-900">Commits</h2>
          <hr />
          <div className="flex flex-col gap-2">
            {commits.commits.data.map(
              (v, index) =>
                index < 20 && (
                  <Card
                    key={v.commit.tree.sha}
                    className="px-4 py-2 flex flex-col gap-2"
                  >
                    <div>
                      <h3 className="font-semibold">{v.commit.message}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src={`${v.committer?.avatar_url}`}
                          alt="github-avatar"
                        />
                        <AvatarFallback>NA</AvatarFallback>
                      </Avatar>
                      <span className="tracking-tight text-sm text-gray-500">
                        {v.committer?.login &&
                        v.committer.login != "web-flow" ? (
                          <Link href={`/${v.committer.login}`}>
                            {" "}
                            {v.committer.login}
                          </Link>
                        ) : (
                          v.commit.committer?.name
                        )}{" "}
                        commited on {v.commit.committer?.date?.substring(0, 10)}
                      </span>
                    </div>
                  </Card>
                )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
