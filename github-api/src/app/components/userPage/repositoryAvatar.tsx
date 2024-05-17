import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fetchUserProfile } from "@/lib/fetchUserProfile";

export default async function RepositoryAvatar({ username }: any) {
  const userData = await fetchUserProfile(username);
  return (
    <div className="flex items-center gap-2 md:flex-col">
      <Avatar className="w-24 h-24 md:w-44 md:h-44 lg:w-80 lg:h-80">
        <AvatarImage
          src={`${userData.user.data.avatar_url}`}
          alt="github-avatar"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h2 className="tracking-tight text-md lg:text-lg text-gray-500">
        {username}
      </h2>
    </div>
  );
}
