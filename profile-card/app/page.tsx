import UserProfile from "@/components/UserProfile";
import Image from "next/image";
import { users } from "@/utils/data";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 items-center min-h-screen justify-center">
      {users.map((user) => (
        <UserProfile
          key={user.id}
          name={user.name}
          role={user.role}
          isOnline={user.isOnline}
          skills={user.technologies}
        />
      ))}
    </div>
  );
}
