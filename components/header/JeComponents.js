import React from "react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default function JeComponents({ currentPath, session }) {
  const getLinkClass = (path) => {
    return currentPath === path
      ? "text-lg font-semibold active"
      : "text-lg font-semibold";
  };

  return (
    <div className="bg-white w-full py-1 shadow-sm">
      <div className="flex container max-w-6xl items-center mx-auto justify-between ">
        <img src="/jefredround.svg" alt="logo" className="w-8 h-8" />
        <div className="flex gap-20 justify-between items-center px-5 max-w-[460px] max-md:flex-wrap">
          <Link href="/" className={getLinkClass("/")}>
            <img
              loading="lazy"
              src="/HomeFill.svg"
              className="shrink-0 w-7 aspect-square fill-black fill-opacity-0"
            />
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d25f47569e9678371966eb3660821dd84a1e6e3761e1e9601589c6ca415170de?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="shrink-0 w-7 aspect-square fill-black fill-opacity-0"
            />
          </Link>
          <Link href="/profile" className={getLinkClass("/profile")}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dac4aa11ec42d2e0283839fb11be67b6f7281d779a3629ce1afd4a11c2d3098?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="shrink-0 w-7 aspect-square fill-black fill-opacity-0"
            />
          </Link>
          <Link href="/questions" className={getLinkClass("/questions")}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab5eeb4ad3ffa2becfe8e1bfb8d0077f2cd1119f388c74380518dbe5d4b4c9cf?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="shrink-0 w-8 aspect-square fill-black fill-opacity-0"
            />
          </Link>
          <Link href="/" className={getLinkClass("/")}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/67a3ced36b815c8ce36799561b614cdacb616151af8e1586511de85c53438c36?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="shrink-0 w-8 aspect-[0.92]"
            />
          </Link>
          {session ? (
            <img
              loading="lazy"
              srcSet={session?.user?.image}
              className="shrink-0 rounded-full w-[30px]"
            />
          ) : (
            <img
              loading="lazy"
              srcSet="Profile.svg"
              className="shrink-0 rounded-full w-[30px]"
            />
          )}
        </div>
        <div className="flex gap-5 pl-3.5 text-xs rounded-2xl bg-neutral-100 max-w-[267px] text-black text-opacity-50">
          <div className="flex-auto my-auto">Search for anything </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fead9280b402c5f726f0da73d2cf4cf5390dbc06c788df0c7d81061b6801b63?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
            className="shrink-0 aspect-[1.39] w-[61px]"
          />
        </div>
      </div>
    </div>
  );
}
