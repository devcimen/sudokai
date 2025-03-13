"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

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
    <div className="p-6 pt-16 pb-8 flex items-center flex-col h-screen">
      <motion.h1
        className="text-[32px] font-extrabold tracking-[-0.01em] bg-gradient-to-r from-primary-500 via-primary-700 to-primary-900 text-transparent bg-clip-text"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-primary-500">SU</span>DOKAI
      </motion.h1>
      <motion.div
        className="flex flex-col gap-4 mt-8 w-full h-full justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div className="flex flex-row gap-4" variants={buttonVariants}>
          <Button variant={difficulty === "easy" ? "primary" : "secondary"} onClick={() => setDifficulty("easy")}>
            Easy
          </Button>
          <Button variant={difficulty === "medium" ? "primary" : "secondary"} onClick={() => setDifficulty("medium")}>
            Medium
          </Button>
          <Button variant={difficulty === "hard" ? "primary" : "secondary"} onClick={() => setDifficulty("hard")}>
            Hard
          </Button>
        </motion.div>
        <motion.div className="flex flex-col gap-4" variants={buttonVariants}>
          <Button onClick={() => router.push("/play")}>New Game</Button>
          <Button onClick={() => router.push("/how-to-play")} variant="secondary">
            How to Play
          </Button>
          <Button onClick={() => router.push("/stats")} variant="secondary">
            Stats
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
