"use client";

import { useEffect, useState } from "react";
import LockedTeaser from "@/components/LockedTeaser";

// 👇 Ganti tanggal ini sesuai target kamu. UNLOCK_MONTH pakai index 0
// (Januari = 0), jadi September = 8. Waktunya dicek pakai zona WIB
// (Asia/Jakarta), biar gak kacau kalau HP-nya di-setting zona waktu lain.
const UNLOCK_YEAR = 2026;
const UNLOCK_MONTH = 8; // September
const UNLOCK_DAY = 14;

function getJakartaNow(): Date {
  const jakartaString = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });
  return new Date(jakartaString);
}

function isUnlocked(): boolean {
  const now = getJakartaNow();
  const target = new Date(UNLOCK_YEAR, UNLOCK_MONTH, UNLOCK_DAY, 0, 0, 0);
  return now.getTime() >= target.getTime();
}

type Status = "checking" | "locked" | "unlocked";

interface Props {
  children: React.ReactNode;
}

export default function DateGate({ children }: Props) {
  // "checking" dulu biar server & client render hal yang sama pas pertama
  // kali, baru abis mount kita cek tanggal beneran di browser.
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    // Mode preview buat testing tanpa nunggu tanggalnya beneran:
    // tambahin ?preview=locked atau ?preview=unlocked di URL.
    const params = new URLSearchParams(window.location.search);
    const preview = params.get("preview");
    if (preview === "unlocked") {
      setStatus("unlocked");
      return;
    }
    if (preview === "locked") {
      setStatus("locked");
      return;
    }
    setStatus(isUnlocked() ? "unlocked" : "locked");
  }, []);

  if (status === "checking") {
    return <div className="min-h-screen bg-caution" aria-hidden="true" />;
  }

  if (status === "locked") {
    return <LockedTeaser />;
  }

  return <>{children}</>;
}
