import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Commits({commits}: any) {
  return (
    <div className="flex flex-col gap-2">
      {commits.commits.data.map(
        (v:any, index:number) =>
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
                  {v.committer?.login && v.committer.login != "web-flow" ? (
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
  );
}
