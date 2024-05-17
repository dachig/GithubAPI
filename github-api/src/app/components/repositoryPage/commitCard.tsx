import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function CommitCard(commit: any) {
  return (
    <Card className="px-4 py-2 flex flex-col gap-2">
      <div>
        <h3 className="font-medium text-sm text-gray-900">
          {commit.commit.message}
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <Avatar className="w-8 h-8">
          <AvatarImage
            src={`${commit.committer?.avatar_url}`}
            alt="github-avatar"
          />
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>
        <span className="tracking-tight text-sm text-gray-500">
          {commit.committer?.login && commit.committer.login != "web-flow" ? (
            <Link
              className="text-gray-900 hover:underline"
              href={`/${commit.committer.login}`}
            >
              {commit.committer.login}
            </Link>
          ) : (
            commit.commit.committer?.name
          )}
          commited on {commit.commit.committer?.date?.substring(0, 10)}
        </span>
      </div>
    </Card>
  );
}
