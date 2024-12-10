import SpinnerLoading from "@/components/ui/SpinnerLoading";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "test page",
  description: "Next Test Description",
};

// Loading
// Suspance
// Static Meta Data
// Dynamic Meta Data

async function FetchingPosts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await data.json();

  if (!res) {
    notFound();
  }

  return (
    <>
      <ul>
        {res?.map((el) => (
          <li
            className="border mb-1 p-2 rounded-md bg-gray-100 border-slate-500 capitalize"
            key={el?.id}
          >
            {el?.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function TestPage() {
  return (
    <>
      <div className="bg-blue-200 p-2 rounded-md my-5 border-slate-500 border-[2px]">
        <div>Suspance Test</div>
        <div>Suspance Test</div>
        <div>Suspance Test</div>
        <div>Suspance Test</div>
      </div>

      <Suspense fallback={<SpinnerLoading />}>
        <FetchingPosts />
      </Suspense>
    </>
  );
}
