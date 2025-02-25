import React from "react";
import Profile from "@/app/components/user-dashboard/profile/Profile";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  return (
    <div>
      <Profile />
    </div>
  );
}
