import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "./ui/avatar";

const UserAvatar = ({
  username,
  userAvatar,
}: {
  username: string;
  userAvatar?: string;
}) => {
  return (
    <Avatar className="bg-zinc-200 w-10 h-10 flex items-center justify-center">
      <AvatarImage src={userAvatar} />
      <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
