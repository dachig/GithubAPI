import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function RepositoryAvatar({ avatarUrl, user }: any) {
  return (
    <div className="flex items-center gap-2 md:flex-col">
      <Avatar className="w-24 h-24 md:w-44 md:h-44 lg:w-80 lg:h-80">
        <AvatarImage
          src={`${avatarUrl}`}
          alt="github-avatar"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h2 className="tracking-tight text-md lg:text-lg text-gray-500">
        {user}
      </h2>
    </div>
  );
}
