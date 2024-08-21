// UserProfileImage.js
"use client";
import React from "react";

const UserProfileImage = ({ session }) => {
  return session ? (
    <img
      loading="lazy"
      src={session.user?.image || "Profile.svg"}
      className="shrink-0 rounded-full w-[30px]"
    />
  ) : (
    <img
      loading="lazy"
      srcSet="Profile.svg"
      className="shrink-0 rounded-full w-[30px]"
    />
  );
};

export default UserProfileImage;
