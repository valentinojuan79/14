import type { Metadata } from "next";
import HiddenMessage from "@/components/HiddenMessage";

// Sengaja gak dilink dari mana pun di situs ini, dan di-noindex biar gak
// nyasar ke hasil pencarian Google. Cuma bisa diakses kalau tau URL-nya
// persis: /hidden-grove
export const metadata: Metadata = {
  title: "🌲",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function HiddenGrovePage() {
  return <HiddenMessage />;
}
