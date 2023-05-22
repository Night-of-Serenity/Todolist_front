import React from "react";
import Navbar from "./Navbar";
import Penguin from "./svg/Penguin";

export default function Header() {
  return (
    <div className="flex justify-between items-end bg-green-500 py-2 px-4 h-[80px]">
      <div className="w-16">
        <Penguin />
      </div>
      <Navbar />
    </div>
  );
}
