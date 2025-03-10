"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("visitedSudokai");

    if (!hasVisited) {
      localStorage.setItem("visitedSudokai", "true");
      router.replace("/splash");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  return (
    <div className="p-6 pt-16 pb-8 flex items-center flex-col ">
      <h1 className="text-[32px] font-extrabold tracking-[-0.01em] bg-gradient-to-r from-primary-500 via-primary-700 to-primary-900 text-transparent bg-clip-text">
        <span className="text-primary-500">SU</span>DOKAI
      </h1>
      <p className="text-lg mt-4 text-center text-primary-500">
        A modern and minimalistic color sudoku web app
        coming soon
      </p>
    </div>
  );
}
