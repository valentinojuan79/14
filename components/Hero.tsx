"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-24">
      <div className="hazard-stripes absolute inset-x-0 top-0 h-4 sm:h-5" />
      <div className="hazard-stripes absolute inset-x-0 bottom-0 h-4 sm:h-5" />

      <motion.div
        initial={{ opacity: 0, scale: 2.2, rotate: -18 }}
        animate={{ opacity: 1, scale: 1, rotate: -6 }}
        transition={{ type: "spring", damping: 10, stiffness: 120, delay: 0.2 }}
        className="mb-6 border-4 border-ember bg-paper px-4 py-1.5 font-display text-xs text-ember shadow-hard-sm sm:text-sm"
      >
        SURAT PERINGATAN RESMI No. 09/GEA/2026
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 1 }}
        animate={{ opacity: 1, y: 0, rotate: -1 }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        className="relative max-w-3xl border-4 border-ink bg-paper px-6 py-10 text-center shadow-hard-lg sm:px-14 sm:py-14"
      >
        {/* tape biar berasa ditempel di tembok */}
        <span className="absolute -left-4 -top-4 h-8 w-16 -rotate-12 border border-ink/20 bg-caution/80 shadow-sm" />
        <span className="absolute -right-4 -top-4 h-8 w-16 rotate-12 border border-ink/20 bg-caution/80 shadow-sm" />

        <p className="font-display text-xs tracking-wide text-ember sm:text-sm">
          TINGKAT BAHAYA: TINGGI 🔥
        </p>

        <h1 className="font-display mt-4 text-3xl leading-tight text-ink sm:text-5xl md:text-6xl">
          GEA
          <br />
          ULANG TAHUN!
        </h1>

        <p className="mx-auto mt-6 max-w-md text-sm text-ink/80 sm:text-base">
          Telah terdeteksi kebakaran hutan yang cukup serius. Satu-satunya
          petugas damkar yang tersedia adalah seekor kucing, dan jujur aja dia{" "}
          <span className="font-semibold text-ember">agak lelet</span>. Dia
          butuh bantuan kamu buat nyelametin hutannya sebelum bisa dikasih
          kado di bawah.
        </p>

        <p className="mt-3 text-sm text-ink/60">
          (iya, ini emang sengaja dibikin ribet. selamat ulang tahun.)
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, rotate: -4 }}
        animate={{ opacity: 1, rotate: -4 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="font-scribble mt-8 text-2xl text-ink/70"
      >
        psst, geser ke bawah dulu ↓
      </motion.p>
    </section>
  );
}
