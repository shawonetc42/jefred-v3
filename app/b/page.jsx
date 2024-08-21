"use client";
import Link from "next/link";
import TruncatedText from "@/components/helper/TruncatedText";
import timeSince from "@/components/helper/timeSince";
import React, { Suspense } from "react";
import Loading from "../home/loading";

const Posts = async () => {
  const response = await fetch("https://testtmon.onrender.com/test", {
    cache: "no-store",
  });
  const data = await response.json();
  console.log(data);

  return (
    <div className="">
      <div className="max-w-3xl mx-auto">
        <ul>
          {data
            .slice()
            .reverse()
            .map((item) => (
              <div
                key={item._id}
                className="flex flex-col px-4 py-3.5 bg-white rounded-2xl max-w-[570px] max-md:pr-5 mt-2 min-w-0 md:min-w-[570px]"
              >
                <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-2">
                    <img
                      loading="lazy"
                      srcSet={item.image || "Profile.svg"}
                      className="shrink-0 w-8 h-8 aspect-square rounded-full"
                    />
                    <div className="flex flex-col my-auto">
                      <div className="flex gap-1 px-px text-black whitespace-nowrap">
                        <Link href={`/profile/${item.userid}`} prefetch={false}>
                          <div className="grow font-semibold text-sm hover:text-[#45B09E]">
                            {item.username}
                          </div>
                        </Link>
                      </div>
                      <div className="flex gap-2 mt-1.5 text-xs text-black text-opacity-50">
                        <div>Ceo Of Jefred</div>
                        <div>{timeSince(item.time)}</div>
                      </div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9402328fe51869bb873a53b4b6e1b5634864e7ad2fdb19f1fb019e496ead5fc3?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                    className="shrink-0 my-auto w-1 aspect-[0.24]"
                  />
                </div>
                <div className="mt-2 text-black max-md:max-w-full">
                  <TruncatedText text={item.questiontext} />
                </div>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default function PostsPage() {
  return (
    <div className="">
      <Suspense fallback={<Loading />}>
        <Posts />
      </Suspense>
    </div>
  );
}
