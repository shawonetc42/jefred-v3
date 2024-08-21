import React from "react";
import Link from "next/link";
export default function JeHeaderComponents() {
  return (
    <div className="flex gap-8 justify-between items-center px-5 max-w-full md:max-w-[460px] md:gap-20">
      <Link
        href="/"
        prefetch={false}
        className="text-lg font-semibold shrink-0 w-7 aspect-square fill-black fill-opacity-0"
      >
        <img
          loading="lazy"
          src="/HomeFill.svg"
          className="shrink-0 w-7 aspect-square fill-black fill-opacity-0"
        />
      </Link>
      <Link
        href="/qupo"
        prefetch={false}
        className="text-lg font-semibold shrink-0 w-7 aspect-square fill-black fill-opacity-0"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d25f47569e9678371966eb3660821dd84a1e6e3761e1e9601589c6ca415170de?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="shrink-0 w-7 aspect-square fill-black fill-opacity-0"
        />
      </Link>
      <Link
        href="/qupo"
        className="group text-lg shrink-0 w-7 aspect-square fill-black fill-opacity-0 relative"
      >
        <div className="relative">
          <img
            loading="lazy"
            src="questions.svg"
            className="w-full h-full transition-transform transform hover:scale-110 hover:opacity-70"
            alt="Questions"
          />
          <div className="absolute -inset-x-5 w-20 top-10 flex items-center justify-center text-center text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <span className="hidden group-hover:inline-block bg-white px-2 py-2 border rounded-full">
              প্রশ্ন করো
            </span>
          </div>
        </div>
      </Link>
      <Link
        href="/questions"
        prefetch={false}
        className="text-lg font-semibold shrink-0 w-8 aspect-square fill-black fill-opacity-0"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab5eeb4ad3ffa2becfe8e1bfb8d0077f2cd1119f388c74380518dbe5d4b4c9cf?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="shrink-0 w-8 aspect-square fill-black fill-opacity-0"
        />
      </Link>
      <Link
        href="/"
        prefetch={false}
        className="text-lg font-semibold shrink-0 w-7 aspect-square"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/67a3ced36b815c8ce36799561b614cdacb616151af8e1586511de85c53438c36?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="shrink-0 w-8 aspect-[0.92]"
        />
      </Link>
    </div>
  );
}
