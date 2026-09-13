"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 👇 Ganti isi pesan ini sesuka kamu, ini tinggal draft asal-asalan.
const MESSAGE = `Hbd yh,

Semoga di umur yg seperempat abad ini kamu selalu dikasih kesehatan, dimudahkan segala urusannya, dilancarkan kerjaannya, dan ap pun yg lagi kamu kejar sekarang bisa satu-satu tercapai. 

Semoga kamu juga selalu dikelilingi orang-orang baik, dikasih banyak hal yang bikin kamu happy, dan dijauhkan dari hal-hal yang bikin kamu terlalu capek.

Semoga apa pun yang lagi kamu hadepin sekarang pelan pelan jadi lebih baik. kalau lagi capek, jangan lupa istirahat. jangan semuanya dipikirin sendiri.

Semoga tahun ini jadi tahun yang baik buat kamu. Banyak rezeki, banyak kesempatan baik, banyak alasan buat senyum.

Di tengah semua itu, semoga kamu tetep jadi orang yang gampang bersyukur atas hal-hal kecil, tetep rendah hati saat banyak hal yang tercapai.

Dan yang paling penting, semoga kelak dibukakan hatinya agar pindah haluan menjadi TIFOSI.

Wes ngono ae. GOD BLESS U 🎂🔥`;

// 👇 Ganti dengan namamu.
const SIGNATURE = "— TIFOSI GARIS KERAS";

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
              HBDDDD GEE
            </h2>

          

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
