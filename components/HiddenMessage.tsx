"use client";

import { motion } from "framer-motion";
import FloatingDecor from "@/components/FloatingDecor";

const SOFT_EMOJIS = ["🌿", "✨", "🌲", "💛"];

export default function HiddenMessage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-pine px-5 py-16">
      <FloatingDecor emojis={SOFT_EMOJIS} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: -1 }}
        transition={{ type: "spring", stiffness: 130, damping: 13 }}
        className="relative z-10 max-w-md border-4 border-ink bg-paper px-6 py-10 text-center shadow-hard-lg sm:px-12 sm:py-14"
      >
        <span className="absolute -left-4 -top-5 h-8 w-16 -rotate-12 border border-ink/20 bg-paper/80" />
        <span className="absolute -right-4 -top-5 h-8 w-16 rotate-12 border border-ink/20 bg-paper/80" />

        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-display text-xs tracking-wide text-pine sm:text-sm"
        >
          🌲 you found the hidden grove 🌲
        </motion.p>

        <h1 className="font-display mt-4 text-xl leading-snug text-ink sm:text-2xl">
          ini bukan bagian dari
          <br />
          surat peringatan
        </h1>

        <p className="mt-3 text-sm text-ink/60">
          gak ada api, gak ada kucing damkar, gak ada lelucon. ini beneran,
          cuma buat kamu.
        </p>

        <div className="mx-auto mt-8 max-w-sm border-t-2 border-dashed border-ink/20 pt-8 text-left">
          <p className="whitespace-pre-line text-base leading-relaxed text-ink/90">
            Selamat ulang tahun, Gea.{"\n\n"}
            Semua yang ada di halaman utama tadi cuma buat bikin kamu ketawa
            (atau kesel, hehe). Tapi yang satu ini beda — ini yang paling
            jujur dari semuanya.{"\n\n"}
            I love you, no matter what. I hope nothing but the best for
            you — today, and always.
          </p>
        </div>

        <p className="font-scribble mt-8 text-2xl text-pine">— aku 💛</p>
      </motion.div>
    </main>
  );
}
