"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

export default function Writecomment({ item }) {
  const [comment, setComment] = useState("");
  const { data: session } = useSession();

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://api1243.vercel.app/posts/${item._id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            commentText: comment,
            userId: session?.uid,
            userName: session?.user?.name,
            userPhoto: session?.user?.image,
            // Optionally add userId if needed
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Comment added successfully:", result);
        // Optionally, handle success feedback or update state
        setComment(""); // Clear the comment input
      } else {
        console.error("Failed to add comment");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="flex items-center justify-between gap-5 py-2 pr-6 pl-2.5 mt-4 w-full rounded-2xl bg-neutral-100 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-2 text-xs text-center text-black text-opacity-40">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7dc960f4226c4d7796333c398d12e74a2ca3ab5142f9476f3d5ffc54a3729c66?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7dc960f4226c4d7796333c398d12e74a2ca3ab5142f9476f3d5ffc54a3729c66?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7dc960f4226c4d7796333c398d12e74a2ca3ab5142f9476f3d5ffc54a3729c66?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7dc960f4226c4d7796333c398d12e74a2ca3ab5142f9476f3d5ffc54a3729c66?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7dc960f4226c4d7796333c398d12e74a2ca3ab5142f9476f3d5ffc54a3729c66?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7dc960f4226c4d7796333c398d12e74a2ca3ab5142f9476f3d5ffc54a3729c66?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7dc960f4226c4d7796333c398d12e74a2ca3ab5142f9476f3d5ffc54a3729c66?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7dc960f4226c4d7796333c398d12e74a2ca3ab5142f9476f3d5ffc54a3729c66?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="w-[26px]"
        />
      </div>
      <div className="w-40 md:w-full">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Write a comment"
            value={comment}
            onChange={handleInputChange}
            className="w-full h-6 bg-transparent focus:outline-none"
          />
        </form>
      </div>
      <div className="flex gap-3.5 my-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/096085abc0fdbca8bd236b65b72c75d134e861552b134209879033ed5dc29da6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="shrink-0 w-4 aspect-square fill-black fill-opacity-0"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/43d05346a2ee33973a7308578d45efb82238486494e24585dac054fba7568d04?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="shrink-0 w-4 aspect-square fill-black fill-opacity-0"
        />
      </div>
    </div>
  );
}
