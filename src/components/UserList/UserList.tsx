import React from "react";
import { UserCard } from "../UserCard/UserCard";
import type { User } from "../../types/user";

interface UserListProps {
  user: User;
}

export const UserList: React.FC<UserListProps> = ({ user }) => {
  return <UserCard {...user} />;
};