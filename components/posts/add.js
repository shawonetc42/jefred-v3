"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function AddPosts() {
  const router = useRouter();
  return (
    <div className="flex gap-4 md:hidden">
      <img onClick={() => router.push("/ask")} src="/add.svg" alt="" />
      <img
        onClick={() => router.push("/notifications")}
        src="/notifications_active.svg"
        alt=""
      />
    </div>
  );
}
