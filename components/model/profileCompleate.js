import React from "react";

export default function ProfileCompleate() {
  return (
    <div className="flex flex-col pb-2.5 text-xs bg-white mt-2 rounded-2xl max-w-[278px] text-black text-opacity-50">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8951d89ef2342a50786d5a968eb47f5cfd4ef7b68202ee3c80811e71dc5a1107?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8951d89ef2342a50786d5a968eb47f5cfd4ef7b68202ee3c80811e71dc5a1107?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8951d89ef2342a50786d5a968eb47f5cfd4ef7b68202ee3c80811e71dc5a1107?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8951d89ef2342a50786d5a968eb47f5cfd4ef7b68202ee3c80811e71dc5a1107?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8951d89ef2342a50786d5a968eb47f5cfd4ef7b68202ee3c80811e71dc5a1107?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8951d89ef2342a50786d5a968eb47f5cfd4ef7b68202ee3c80811e71dc5a1107?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8951d89ef2342a50786d5a968eb47f5cfd4ef7b68202ee3c80811e71dc5a1107?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8951d89ef2342a50786d5a968eb47f5cfd4ef7b68202ee3c80811e71dc5a1107?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
        className="w-full rounded-2xl aspect-[2.63]"
      />
      <div className="self-start ml-16">Ceo of Jefred</div>
      <div className="mt-2.5 w-full border border-solid bg-neutral-100 border-neutral-100 min-h-[1px]" />
      <div className="flex gap-5 self-start mt-2 ml-6">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/924fac275097339290761debd08b781e04e3f999f1ad26c7f85cc9b38597c11f?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="shrink-0 aspect-[0.92] fill-black fill-opacity-0 w-[22px]"
        />
        <div className="my-auto">Add another account</div>
      </div>
    </div>
  );
}
