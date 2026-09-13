"use client";

import { motion } from "framer-motion";
import FloatingDecor from "@/components/FloatingDecor";

export default function LockedTeaser() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-caution px-5 py-16">
      <FloatingDecor />
      <div className="hazard-stripes absolute inset-x-0 top-0 z-10 h-4 sm:h-5" />
      <div className="hazard-stripes absolute inset-x-0 bottom-0 z-10 h-4 sm:h-5" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: -1 }}
        transition={{ type: "spring", stiffness: 140, damping: 12 }}
        className="relative z-10 max-w-sm border-4 border-ink bg-paper px-6 py-10 text-center shadow-hard-lg sm:px-10"
      >
        <span className="absolute -left-4 -top-4 h-8 w-16 -rotate-12 border border-ink/20 bg-caution/80 shadow-sm" />
        <span className="absolute -right-4 -top-4 h-8 w-16 rotate-12 border border-ink/20 bg-caution/80 shadow-sm" />

        <p className="font-display text-xs text-ember sm:text-sm">
          AKSES DITOLAK 🚫
        </p>

        <h1 className="font-display mt-4 text-2xl leading-snug text-ink sm:text-3xl">
          udah dibilangin
          <br />
          buka besok ya??
        </h1>

    

        <p className="font-scribble mt-6 text-xl text-ember">
          NGEYEL 😈😈
        </p>
      </motion.div>
    </main>
  );
}
