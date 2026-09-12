"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  GreenTreeAsset,
  BurningTreeAsset,
  GoldenTreeAsset,
  CharredTreeAsset,
  FlyingCatAsset,
  WaterSplashAsset,
} from "./GameAssets";

type GameState = "idle" | "playing" | "won" | "lost";
type TreeStatus = "safe" | "burning" | "charred";

interface Tree {
  id: number;
  x: number; // percent of field width
  y: number; // percent of field height
  status: TreeStatus;
  remaining: number; // ms left before it chars, while burning
  golden: boolean; // pohon emas langka, bonus poin lebih gede
  spread: boolean; // udah pernah nularin ke tetangga apa belum
}

interface Splash {
  id: number;
  x: number;
  y: number;
  label: string;
  tone: "good" | "great";
}

const GAME_SECONDS = 40;
const TREE_COUNT = 10;
const TICK_MS = 150;
const BURN_MS = 4200; // waktu sebelum pohon abis kalau dicuekin
const DOUSE_MULT = 6; // seberapa cepet padam kalau kucing lagi nyemprot
const EXTINGUISH_RADIUS = 13; // % jarak biar dianggap "kesiram"
const MAX_CHARRED = 4;
const IGNITE_START_MS = 1700;
const IGNITE_MIN_MS = 800;

// Fitur baru: kombo, pohon emas, dan api yang bisa nular ke tetangga
const GOLDEN_CHANCE = 0.14; // peluang pohon yang kebakar itu pohon emas
const COMBO_FOR_BONUS = 3; // padamin berturut-turut segini baru dapet bonus
const SPREAD_THRESHOLD = 0.4; // di bawah 40% sisa waktu, mulai bisa nular
const SPREAD_TICK_CHANCE = 0.06; // peluang nular tiap tick pas udah kritis
const SPREAD_RADIUS = 24; // % jarak maksimal biar dianggap "tetangga"

const CHAR_TAUNTS = [
  "yah, satu pohon abis 🪵",
  "buruan dikit napa, keburu abis",
  "kucingnya lemot amat sih nyampenya",
  "itu di sana lho, bukan di situ",
  "apinya nular tuh, gerak lebih cepet dong",
];

const WAVE_MESSAGES = [
  "🔥 makin serem nih, semangat",
  "🔥 apinya nambah cepet, awas",
  "🔥 hutannya makin gede ancamannya",
  "🔥 kucingnya mulai capek, jangan lengah",
];

const SKIP_TAUNTS = [
  "eh kepencet apa nih, kok gabisa ya 🤔",
  "coba pencet lagi, siapa tau kali ini beneran skip (enggak)",
  "kucingnya udah kepalang butuh bantuan, jangan kabur dong",
  "yaudah gih maenin aja, gampang kok cuma geser-geser doang",
  "tombol ini emang didesain buat php-in kamu, sori bukan sori",
  "hutannya nangis liat kamu nyariin jalan pintas",
];

function generateTrees(count: number): Tree[] {
  const cols = 5;
  const rows = Math.ceil(count / cols);
  const trees: Tree[] = [];
  let id = 0;
  outer: for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (trees.length >= count) break outer;
      const baseX = ((c + 0.5) / cols) * 100;
      const baseY = 28 + ((r + 0.5) / rows) * 58;
      const x = Math.min(94, Math.max(6, baseX + (Math.random() - 0.5) * 11));
      const y = Math.min(92, Math.max(26, baseY + (Math.random() - 0.5) * 12));
      trees.push({ id: id++, x, y, status: "safe", remaining: 0, golden: false, spread: false });
    }
  }
  return trees;
}

interface Props {
  onComplete: (score: number) => void;
}

export default function ForestFireGame({ onComplete }: Props) {
  const [gameState, setGameState] = useState<GameState>("idle");
  const [trees, setTrees] = useState<Tree[]>([]);
  const [splashes, setSplashes] = useState<Splash[]>([]);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [charred, setCharred] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_SECONDS);
  const [catX, setCatX] = useState(50);
  const [catY, setCatY] = useState(60);
  const [dousing, setDousing] = useState(false);
  const [taunt, setTaunt] = useState<string | null>(null);
  const [wave, setWave] = useState<string | null>(null);
  const [shake, setShake] = useState(false);
  const [igniteMs, setIgniteMs] = useState(IGNITE_START_MS);

  const [skipMsg, setSkipMsg] = useState<string | null>(null);
  const [skipOffset, setSkipOffset] = useState({ x: 0, y: 0 });
  const [skipAttempts, setSkipAttempts] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const treesRef = useRef<Tree[]>([]);
  const catXRef = useRef(50);
  const catYRef = useRef(60);
  const scoreRef = useRef(0);
  const comboRef = useRef(0);
  const charredRef = useRef(0);
  const splashIdRef = useRef(0);
  const tauntTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const waveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shakeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    catXRef.current = catX;
    catYRef.current = catY;
  }, [catX, catY]);

  const flashTaunt = (msg: string) => {
    setTaunt(msg);
    if (tauntTimeout.current) clearTimeout(tauntTimeout.current);
    tauntTimeout.current = setTimeout(() => setTaunt(null), 1200);
  };

  const flashWave = (msg: string) => {
    setWave(msg);
    if (waveTimeout.current) clearTimeout(waveTimeout.current);
    waveTimeout.current = setTimeout(() => setWave(null), 1600);
  };

  const triggerShake = () => {
    setShake(true);
    if (shakeTimeout.current) clearTimeout(shakeTimeout.current);
    shakeTimeout.current = setTimeout(() => setShake(false), 400);
  };

  const addSplash = (x: number, y: number, label: string, tone: "good" | "great") => {
    const id = splashIdRef.current++;
    setSplashes((prev) => [...prev, { id, x, y, label, tone }]);
    setTimeout(() => {
      setSplashes((prev) => prev.filter((s) => s.id !== id));
    }, 650);
  };

  const winGame = useCallback(() => {
    setGameState("won");
    confetti({
      particleCount: 150,
      spread: 95,
      origin: { y: 0.6 },
      colors: ["#F2B705", "#E24E1B", "#2F6B4F", "#F6EFDD"],
    });
    onComplete(scoreRef.current);
  }, [onComplete]);

  const loseGame = useCallback(() => {
    setGameState("lost");
  }, []);

  const startGame = () => {
    const initial = generateTrees(TREE_COUNT);
    treesRef.current = initial;
    setTrees(initial);
    setSplashes([]);
    scoreRef.current = 0;
    comboRef.current = 0;
    charredRef.current = 0;
    setScore(0);
    setCombo(0);
    setCharred(0);
    setTimeLeft(GAME_SECONDS);
    setCatX(50);
    setCatY(60);
    setIgniteMs(IGNITE_START_MS);
    setTaunt(null);
    setWave(null);
    setShake(false);
    setGameState("playing");
  };

  // "Skip" button: sengaja gak pernah beneran skip. Ini emang trolling.
  const trollSkip = () => {
    const nextX = (Math.random() - 0.5) * 140;
    const nextY = (Math.random() - 0.5) * 60;
    setSkipOffset({ x: nextX, y: nextY });
    setSkipMsg(SKIP_TAUNTS[skipAttempts % SKIP_TAUNTS.length]);
    setSkipAttempts((n) => n + 1);
  };

  // Api makin sering muncul makin lama makin serem, sambil kasih tau lewat banner
  useEffect(() => {
    if (gameState !== "playing") return;
    const ramp = setInterval(() => {
      setIgniteMs((m) => Math.max(IGNITE_MIN_MS, m - 130));
      flashWave(WAVE_MESSAGES[Math.floor(Math.random() * WAVE_MESSAGES.length)]);
    }, 6000);
    return () => clearInterval(ramp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState]);

  // Nyalain pohon random, kadang jadi pohon emas (bonus poin lebih gede)
  useEffect(() => {
    if (gameState !== "playing") return;
    const ignite = setInterval(() => {
      const current = treesRef.current;
      const safeIdxs = current
        .map((t, i) => (t.status === "safe" ? i : -1))
        .filter((i) => i >= 0);
      if (safeIdxs.length === 0) return;
      const idx = safeIdxs[Math.floor(Math.random() * safeIdxs.length)];
      const golden = Math.random() < GOLDEN_CHANCE;
      const updated = current.map((t, i) =>
        i === idx
          ? { ...t, status: "burning" as const, remaining: BURN_MS, golden, spread: false }
          : t
      );
      treesRef.current = updated;
      setTrees(updated);
    }, igniteMs);
    return () => clearInterval(ignite);
  }, [gameState, igniteMs]);

  // Cek kedekatan kucing & pohon yang lagi kebakar tiap tick, plus cek
  // apakah ada api yang udah kritis dan bisa nular ke pohon tetangga.
  useEffect(() => {
    if (gameState !== "playing") return;
    const tick = setInterval(() => {
      const current = treesRef.current;
      let scoreDelta = 0;
      let charredDelta = 0;
      let anyNear = false;
      const newSplashes: { x: number; y: number; label: string; tone: "good" | "great" }[] = [];
      const spreadTargets = new Set<number>();

      const updated = current.map((t) => {
        if (t.status !== "burning") return t;
        const dx = t.x - catXRef.current;
        const dy = t.y - catYRef.current;
        const dist = Math.hypot(dx, dy);
        const near = dist < EXTINGUISH_RADIUS;
        if (near) anyNear = true;
        const remaining = t.remaining - TICK_MS * (near ? DOUSE_MULT : 1);

        if (remaining <= 0) {
          if (near) {
            comboRef.current += 1;
            const streak = comboRef.current;
            const bonus = t.golden ? 3 : streak >= COMBO_FOR_BONUS ? 2 : 1;
            scoreDelta += bonus;
            newSplashes.push({
              x: t.x,
              y: t.y,
              label: t.golden ? "🌟 +3" : bonus === 2 ? `+2 combo x${streak}` : "+1",
              tone: bonus >= 2 ? "great" : "good",
            });
            return { ...t, status: "safe" as const, remaining: 0, golden: false, spread: false };
          }
          comboRef.current = 0;
          charredDelta += 1;
          return { ...t, status: "charred" as const, remaining: 0 };
        }

        // Udah kritis & belum dipadamin: ada peluang nular ke tetangga terdekat.
        if (
          !near &&
          !t.spread &&
          remaining / BURN_MS < SPREAD_THRESHOLD &&
          Math.random() < SPREAD_TICK_CHANCE
        ) {
          let bestIdx = -1;
          let bestDist = SPREAD_RADIUS;
          current.forEach((other) => {
            if (other.status !== "safe" || spreadTargets.has(other.id)) return;
            const d = Math.hypot(other.x - t.x, other.y - t.y);
            if (d < bestDist) {
              bestDist = d;
              bestIdx = other.id;
            }
          });
          if (bestIdx >= 0) spreadTargets.add(bestIdx);
          return { ...t, remaining, spread: true };
        }

        return { ...t, remaining };
      });

      const finalTrees =
        spreadTargets.size === 0
          ? updated
          : updated.map((t) =>
              spreadTargets.has(t.id) && t.status === "safe"
                ? { ...t, status: "burning" as const, remaining: BURN_MS, golden: false, spread: false }
                : t
            );

      treesRef.current = finalTrees;
      setTrees(finalTrees);
      setDousing(anyNear);

      if (scoreDelta > 0) {
        scoreRef.current += scoreDelta;
        setScore(scoreRef.current);
        setCombo(comboRef.current);
      }
      newSplashes.forEach((s) => addSplash(s.x, s.y, s.label, s.tone));

      if (charredDelta > 0) {
        charredRef.current += charredDelta;
        setCharred(charredRef.current);
        setCombo(0);
        flashTaunt(CHAR_TAUNTS[Math.floor(Math.random() * CHAR_TAUNTS.length)]);
        triggerShake();
        if (charredRef.current >= MAX_CHARRED) {
          loseGame();
        }
      }
    }, TICK_MS);
    return () => clearInterval(tick);
  }, [gameState, loseGame]);

  // Countdown
  useEffect(() => {
    if (gameState !== "playing") return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          winGame();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameState, winGame]);

  const moveCat = (clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = ((clientX - rect.left) / rect.width) * 100;
    const py = ((clientY - rect.top) / rect.height) * 100;
    setCatX(Math.min(96, Math.max(4, px)));
    setCatY(Math.min(94, Math.max(10, py)));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const step = 6;
    if (e.key === "ArrowLeft") setCatX((x) => Math.max(4, x - step));
    if (e.key === "ArrowRight") setCatX((x) => Math.min(96, x + step));
    if (e.key === "ArrowUp") setCatY((y) => Math.max(10, y - step));
    if (e.key === "ArrowDown") setCatY((y) => Math.min(94, y + step));
  };

  return (
    <section className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-6 border-4 border-ink bg-paper px-6 py-5 text-center shadow-hard sm:px-10"
      >
        <h2 className="font-display text-xl text-ember sm:text-2xl">
          Terbangin Kucingnya, Padamin Beneran
        </h2>
        <p className="mt-2 text-sm text-ink/75 sm:text-base">
          Kucingnya terbang bawa air, ikutin mouse / jari / tombol panah.
          Pohon bakal kebakar random di titik acak — terbangin kucing ke
          situ buat nyemprotnya sebelum keburu abis. Api yang dicuekin
          kelamaan bisa nular ke pohon sebelahnya, dan sesekali ada{" "}
          <span className="font-semibold text-ember">pohon emas 🌟</span>{" "}
          yang bonus poinnya lebih gede. Maksimal {MAX_CHARRED} pohon boleh
          abis, lebih dari itu ya kalah.
        </p>
      </motion.div>

      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseMove={(e) => gameState === "playing" && moveCat(e.clientX, e.clientY)}
        onTouchMove={(e) => {
          if (gameState === "playing" && e.touches[0]) {
            moveCat(e.touches[0].clientX, e.touches[0].clientY);
          }
        }}
        className={`relative h-[22rem] w-full select-none overflow-hidden border-4 border-ink shadow-hard-lg outline-none focus:ring-4 focus:ring-ember/50 sm:h-[27rem] md:h-[30rem] ${
          shake ? "animate-shake" : ""
        }`}
        style={{
          background: "linear-gradient(to bottom, #3a2413 0%, #201A13 40%, #201A13 100%)",
          touchAction: gameState === "playing" ? "none" : "auto",
        }}
      >
        {/* HUD */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-1.5 px-3 py-2.5 sm:gap-2 sm:px-4 sm:py-3">
          <span className="border-2 border-ink bg-caution px-2 py-1 font-display text-[10px] text-ink sm:px-3 sm:text-xs">
            SELAMAT {score}
            {combo >= COMBO_FOR_BONUS ? ` 🔥x${combo}` : ""}
          </span>
          <span className="border-2 border-ink bg-ember px-2 py-1 font-display text-[10px] text-paper sm:px-3 sm:text-xs">
            ABIS {charred}/{MAX_CHARRED}
          </span>
          {gameState === "playing" && (
            <span className="border-2 border-ink bg-paper px-2 py-1 font-display text-[10px] text-ink sm:px-3 sm:text-xs">
              {timeLeft}s
            </span>
          )}
        </div>

        {taunt && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute left-1/2 top-16 z-30 -translate-x-1/2 border-2 border-ink bg-ember px-4 py-1.5 font-display text-[11px] text-paper sm:text-xs"
          >
            {taunt}
          </motion.div>
        )}

        {wave && gameState === "playing" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-x-0 bottom-3 z-30 mx-auto w-fit border-2 border-ink bg-pine px-4 py-1.5 font-display text-[10px] text-paper sm:text-xs"
          >
            {wave}
          </motion.div>
        )}

        {/* Idle overlay */}
        {gameState === "idle" && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-ink/85 px-6 text-center backdrop-blur-sm">
            <FlyingCatAsset className="w-24 h-24" />
            <p className="max-w-xs text-paper/90">
              {GAME_SECONDS} detik, {TREE_COUNT} pohon. Jangan biarin lebih
              dari {MAX_CHARRED} yang abis. Awas apinya bisa nular.
            </p>
            <button
              onClick={startGame}
              className="border-2 border-ink bg-caution px-6 py-2.5 font-display text-sm text-ink shadow-hard-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              MULAI TERBANG
            </button>

            <div className="relative mt-1 h-10 w-40">
              <motion.button
                type="button"
                onClick={trollSkip}
                onMouseEnter={trollSkip}
                animate={{ x: skipOffset.x, y: skipOffset.y }}
                transition={{ type: "spring", stiffness: 300, damping: 14 }}
                className="absolute inset-0 mx-auto w-fit whitespace-nowrap text-xs text-paper/50 underline underline-offset-4"
              >
                lewati aja deh, males main
              </motion.button>
            </div>
            {skipMsg && (
              <p className="font-scribble max-w-[16rem] text-xl text-caution">
                {skipMsg}
              </p>
            )}
          </div>
        )}

        {/* Lost overlay */}
        {gameState === "lost" && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 bg-ink/90 px-6 text-center backdrop-blur-sm">
            <CharredTreeAsset className="w-20 h-20" />
            <p className="font-display text-lg text-ember">hutannya abis :(</p>
            <p className="max-w-xs text-paper/80">
              {charred} pohon udah jadi arang. gapapa, namanya juga belajar
              terbang. kadonya masih ngunci, coba lagi dong.
            </p>
            <button
              onClick={startGame}
              className="border-2 border-ink bg-caution px-5 py-2 font-display text-sm text-ink shadow-hard-sm transition-transform hover:-translate-y-0.5"
            >
              COBA LAGI
            </button>
          </div>
        )}

        {/* Won overlay */}
        {gameState === "won" && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 bg-ink/90 px-6 text-center backdrop-blur-sm">
            <div className="flex gap-2">
              <GreenTreeAsset className="w-16 h-16" />
              <GoldenTreeAsset className="w-16 h-16" />
              <GreenTreeAsset className="w-16 h-16" />
            </div>
            <p className="font-display text-lg text-pine">hutan selamat!</p>
            <p className="max-w-xs text-paper/85">
              {score} pohon berhasil kamu padamin. kadonya udah kebuka di
              bawah, buruan buka.
            </p>
            <button
              onClick={startGame}
              className="border-2 border-paper/40 px-5 py-2 text-sm text-paper/90 transition-colors hover:bg-paper/10"
            >
              main lagi (opsional)
            </button>
          </div>
        )}

        {/* Trees */}
        {gameState === "playing" &&
          trees.map((t) => (
            <div
              key={t.id}
              className="absolute z-10 flex flex-col items-center"
              style={{
                left: `${t.x}%`,
                top: `${t.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="relative">
                {t.status === "safe" && <GreenTreeAsset className="w-12 h-12 sm:w-14 sm:h-14" />}
                {t.status === "burning" && (
                  t.golden ? (
                    <GoldenTreeAsset className="w-12 h-12 sm:w-14 sm:h-14 animate-bounce" />
                  ) : (
                    <BurningTreeAsset className="w-12 h-12 sm:w-14 sm:h-14" />
                  )
                )}
                {t.status === "charred" && <CharredTreeAsset className="w-12 h-12 sm:w-14 sm:h-14 opacity-75" />}
              </div>
              {t.status === "burning" && (
                <div className="mt-0.5 h-1.5 w-10 border border-ink/80 bg-ink/60 rx-1 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-150 ${t.golden ? "bg-caution" : "bg-ember"}`}
                    style={{ width: `${Math.max(0, (t.remaining / BURN_MS) * 100)}%` }}
                  />
                </div>
              )}
            </div>
          ))}

        {/* Splashes */}
        {splashes.map((s) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 1, y: 0, scale: 0.5 }}
            animate={{ opacity: 0, y: -22, scale: 1 }}
            transition={{ duration: 0.65 }}
            className="pointer-events-none absolute z-20 flex flex-col items-center"
            style={{ left: `${s.x}%`, top: `${s.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <WaterSplashAsset className="w-8 h-8" />
            <span
              className={`-mt-1 whitespace-nowrap font-display text-[10px] ${
                s.tone === "great" ? "text-caution" : "text-paper"
              }`}
            >
              {s.label}
            </span>
          </motion.div>
        ))}

        {/* Cat */}
        {gameState === "playing" && (
          <motion.div
            className="absolute z-10 flex flex-col items-center"
            style={{ left: `${catX}%`, top: `${catY}%` }}
            animate={{
              x: "-50%",
              y: "-50%",
              scale: dousing ? 1.15 : 1,
            }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
          >
            <FlyingCatAsset isDousing={dousing} className="w-20 h-20 sm:w-24 sm:h-24" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
