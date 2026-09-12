"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 👇 Ganti isi pesan ini sesuka kamu, ini tinggal draft asal-asalan.
const MESSAGE = `Selamat ulang tahun, Gea!

Makasih udah mau capek-capek nyelametin hutan cuma buat baca beberapa
kalimat receh ini. Serius deh, semoga umur baru kamu dijauhin dari drama
gak penting, dijauhin dari kucing damkar yang lelet, dan didekatin sama
hal-hal yang bikin kamu ketawa lepas kayak biasanya.

Semoga apa yang lagi kamu kejar sekarang pelan-pelan kesampean, sehat
terus, jangan kurang piknik, dan tetep jadi orang yang rame diajak ngobrol.

Udah gitu doang. Selamat ulang tahun 🎂🔥`;

// 👇 Ganti dengan namamu.
const SIGNATURE = "— dari aku, si penulis surat peringatan palsu";

interface Props {
  unlocked: boolean;
}

export default function MessageReveal({ unlocked }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (unlocked && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [unlocked]);

  return (
    <section
      ref={ref}
      className="relative z-10 mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center"
    >
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.div
            key="locked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-3 border-4 border-ink/30 bg-ink/5 px-8 py-14"
          >
            <span className="text-4xl">🔒</span>
            <p className="text-ink/60">
              masih dikunci. padamin dulu apinya di atas, baru boleh buka.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: -1 }}
            transition={{ type: "spring", stiffness: 160, damping: 14 }}
            className="relative w-full border-4 border-ink bg-paper px-6 py-10 shadow-hard-lg sm:px-12"
          >
            <span className="absolute -left-4 -top-5 h-8 w-16 -rotate-12 border border-ink/20 bg-caution/80" />
            <span className="absolute -right-4 -top-5 h-8 w-16 rotate-12 border border-ink/20 bg-caution/80" />

            <p className="font-display text-xs text-ember">SURAT SUDAH DIBUKA ✔</p>

            <h2 className="font-display mt-4 text-2xl text-ink sm:text-3xl">
              Buat Gea
            </h2>

            {/* Ganti src di bawah ini pakai foto beneran, taruh filenya di folder /public */}
            <div className="mx-auto mt-6 aspect-square w-40 overflow-hidden border-2 border-ink bg-ink/10 sm:w-48">
              <img
                src="/gea-photo.jpg"
                alt="Foto kenangan"
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>

            <p className="mx-auto mt-8 max-w-md whitespace-pre-line text-left text-base leading-relaxed text-ink/90">
              {MESSAGE}
            </p>

            <p className="font-scribble mt-6 text-2xl text-ember">{SIGNATURE}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
