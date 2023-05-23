import React from "react";
import Navbar from "./Navbar";
import Penguin from "./svg/Penguin";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { user } = useAuth();
  return (
    <div className="flex justify-between items-end bg-blue-300 py-2 px-4 h-[80px]">
      <div className="w-16">
        <Penguin />
      </div>
      <p>{user?.name}</p>
      <Navbar />
    </div>
  );
}
