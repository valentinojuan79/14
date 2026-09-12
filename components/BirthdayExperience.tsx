"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import FloatingDecor from "@/components/FloatingDecor";
import ForestFireGame from "@/components/ForestFireGame";
import MessageReveal from "@/components/MessageReveal";
import Footer from "@/components/Footer";

export default function BirthdayExperience() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-caution">
      <FloatingDecor />
      <Hero />
      <ForestFireGame onComplete={() => setUnlocked(true)} />
      <MessageReveal unlocked={unlocked} />
      <Footer />
    </main>
  );
}
