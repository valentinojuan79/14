import React from "react";

export function ForestBackgroundAsset({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Sky Gradient */}
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E130C" />
          <stop offset="40%" stopColor="#3E1F14" />
          <stop offset="75%" stopColor="#2A3D2C" />
          <stop offset="100%" stopColor="#16291C" />
        </linearGradient>

        {/* Mountain Gradient */}
        <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A2619" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1C2E20" stopOpacity="0.9" />
        </linearGradient>

        {/* Mist Gradient */}
        <linearGradient id="mistGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F4A261" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#2A4B36" stopOpacity="0.0" />
        </linearGradient>

        {/* Ground Base Gradient */}
        <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#233A29" />
          <stop offset="35%" stopColor="#192C1F" />
          <stop offset="70%" stopColor="#142118" />
          <stop offset="100%" stopColor="#0B130E" />
        </linearGradient>

        {/* Path Gradient */}
        <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#523821" opacity="0.6" />
          <stop offset="50%" stopColor="#3D2817" opacity="0.8" />
          <stop offset="100%" stopColor="#2B1A0D" opacity="0.9" />
        </linearGradient>
      </defs>

      {/* 1. Sky */}
      <rect width="800" height="500" fill="url(#skyGrad)" />

      {/* Sun/Ember Warm Glow in Background */}
      <circle cx="400" cy="120" r="140" fill="#E24E1B" opacity="0.15" />
      <circle cx="400" cy="120" r="80" fill="#F2B705" opacity="0.2" />

      {/* Distant Mountain Silhouettes */}
      <path
        d="M-50 260 L80 160 L210 240 L380 130 L540 220 L680 150 L850 270 L850 350 L-50 350 Z"
        fill="url(#mountainGrad)"
      />

      {/* Fog/Atmospheric Layer 1 */}
      <rect y="180" width="800" height="100" fill="url(#mistGrad)" />

      {/* Far Background Pine Tree Line */}
      <g fill="#1B3828" opacity="0.75">
        <polygon points="20,250 32,200 44,250" />
        <polygon points="35,250 50,185 65,250" />
        <polygon points="58,250 72,205 86,250" />

        <polygon points="120,260 135,190 150,260" />
        <polygon points="142,260 160,175 178,260" />

        <polygon points="230,250 245,195 260,250" />
        <polygon points="255,250 272,180 289,250" />

        <polygon points="350,240 368,170 386,240" />
        <polygon points="380,240 395,190 410,240" />

        <polygon points="480,250 498,180 516,250" />
        <polygon points="510,250 528,190 546,250" />

        <polygon points="610,245 628,175 646,245" />
        <polygon points="640,245 658,185 676,245" />

        <polygon points="720,255 738,190 756,255" />
        <polygon points="750,255 770,175 790,255" />
      </g>

      {/* Ground Base */}
      <path
        d="M-20 220 Q 200 190 400 220 T 820 210 L 820 520 L -20 520 Z"
        fill="url(#groundGrad)"
      />

      {/* Dirt Trails and Paths */}
      <path
        d="M 120 500 C 180 420 220 360 310 320 C 390 285 450 270 520 250 C 600 230 680 225 750 220 L 780 235 C 700 242 610 250 525 275 C 440 300 370 320 290 360 C 180 415 130 460 70 500 Z"
        fill="url(#pathGrad)"
      />

      {/* Midground Pine Tree Line */}
      <g fill="#142E1F">
        <polygon points="0,230 18,160 36,230" />
        <polygon points="15,235 38,140 61,235" />

        <polygon points="170,235 190,150 210,235" />
        <polygon points="200,230 218,170 236,230" />

        <polygon points="420,225 440,145 460,225" />
        <polygon points="450,230 468,165 486,230" />

        <polygon points="690,220 712,130 734,220" />
        <polygon points="725,225 745,150 765,225" />
      </g>

      {/* Forest Floor Vegetation & Details */}
      {/* Rocks */}
      <ellipse cx="180" cy="380" rx="14" ry="7" fill="#1C271E" stroke="#2D3F32" strokeWidth="2" />
      <ellipse cx="192" cy="383" rx="8" ry="4" fill="#2D3F32" />

      <ellipse cx="620" cy="340" rx="18" ry="9" fill="#1C271E" stroke="#2D3F32" strokeWidth="2" />
      <ellipse cx="630" cy="342" rx="10" ry="5" fill="#2D3F32" />

      <ellipse cx="440" cy="450" rx="22" ry="10" fill="#1A241C" stroke="#2A3B2F" strokeWidth="2" />

      {/* Grass Tufts */}
      <g fill="#2F583B">
        <path d="M 60 410 Q 55 390 50 385 Q 60 395 65 410 Q 70 392 75 388 Q 72 400 75 410 Z" />
        <path d="M 280 460 Q 275 440 270 435 Q 280 445 285 460 Q 290 442 295 438 Q 292 450 295 460 Z" />
        <path d="M 520 390 Q 515 370 510 365 Q 520 375 525 390 Q 530 372 535 368 Q 532 380 535 390 Z" />
        <path d="M 710 430 Q 705 410 700 405 Q 710 415 715 430 Q 720 412 725 408 Q 722 420 725 430 Z" />
      </g>

      {/* Cute Wild Mushrooms */}
      <g>
        {/* Stem */}
        <rect x="235" y="415" width="4" height="8" rx="2" fill="#E2D4C9" />
        {/* Cap */}
        <path d="M 230 416 C 230 408 244 408 244 416 Z" fill="#E63946" />
        <circle cx="234" cy="412" r="1" fill="#FFFFFF" />
        <circle cx="240" cy="411" r="1" fill="#FFFFFF" />

        {/* Small Companion Mushroom */}
        <rect x="243" y="418" width="3" height="5" rx="1" fill="#E2D4C9" />
        <path d="M 240 419 C 240 413 249 413 249 419 Z" fill="#E63946" />
      </g>

      <g>
        <rect x="580" y="445" width="5" height="10" rx="2" fill="#E2D4C9" />
        <path d="M 574 446 C 574 436 591 436 591 446 Z" fill="#F4A261" />
        <circle cx="580" cy="440" r="1.2" fill="#FFFFFF" />
        <circle cx="586" cy="442" r="1" fill="#FFFFFF" />
      </g>

      {/* Fallen Log */}
      <g>
        <rect x="330" y="410" width="60" height="14" rx="6" transform="rotate(-6 330 410)" fill="#3D2514" stroke="#28170B" strokeWidth="2" />
        <ellipse cx="331" cy="413" rx="4" ry="6" transform="rotate(-6 331 413)" fill="#52341E" />
        <path d="M 345 408 Q 360 405 380 403" stroke="#2F583B" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function GreenTreeAsset({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Shadow */}
      <ellipse cx="50" cy="92" rx="28" ry="6" fill="#152B1E" opacity="0.4" />
      {/* Trunk */}
      <rect x="43" y="65" width="14" height="25" rx="3" fill="#5C3A21" />
      <rect x="46" y="68" width="4" height="18" rx="1" fill="#422815" />
      {/* Foliage Layers */}
      <path d="M50 10 L82 50 H18 L50 10 Z" fill="#2D6A4F" />
      <path d="M50 10 L82 50 H50 Z" fill="#1B4332" opacity="0.3" />
      <path d="M50 25 L88 68 H12 L50 25 Z" fill="#2D6A4F" />
      <path d="M50 25 L88 68 H50 Z" fill="#1B4332" opacity="0.3" />
      <path d="M50 40 L94 82 H6 L50 40 Z" fill="#40916C" />
      <path d="M50 40 L94 82 H50 Z" fill="#2D6A4F" opacity="0.3" />
      {/* Highlights */}
      <path d="M50 10 L30 40 H45 L50 10 Z" fill="#52B788" opacity="0.5" />
      <path d="M50 25 L25 58 H42 L50 25 Z" fill="#52B788" opacity="0.5" />
      <path d="M50 40 L20 72 H40 L50 40 Z" fill="#52B788" opacity="0.5" />
    </svg>
  );
}

export function BurningTreeAsset({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Shadow */}
      <ellipse cx="50" cy="92" rx="28" ry="6" fill="#1E0A03" opacity="0.5" />
      {/* Trunk */}
      <rect x="43" y="65" width="14" height="25" rx="3" fill="#3D2110" />
      {/* Scorched Tree Foliage Background */}
      <path d="M50 12 L82 50 H18 L50 12 Z" fill="#8B3A13" />
      <path d="M50 27 L88 68 H12 L50 27 Z" fill="#8B3A13" />
      <path d="M50 42 L94 82 H6 L50 42 Z" fill="#602307" />
      {/* Flames */}
      <g className="animate-pulse">
        {/* Outer Flame */}
        <path
          d="M50 5 C30 25 25 45 25 65 C25 80 35 88 50 88 C65 88 75 80 75 65 C75 45 70 25 50 5 Z"
          fill="#E63946"
        />
        {/* Mid Flame */}
        <path
          d="M50 18 C38 32 32 48 32 66 C32 78 40 84 50 84 C60 84 68 78 68 66 C68 48 62 32 50 18 Z"
          fill="#F4A261"
        />
        {/* Inner Flame */}
        <path
          d="M50 32 C42 42 38 54 38 68 C38 76 43 80 50 80 C57 80 62 76 62 68 C62 54 58 42 50 32 Z"
          fill="#E7C169"
        />
        {/* Core Hot Spark */}
        <ellipse cx="50" cy="72" rx="6" ry="10" fill="#FFFFFF" />
      </g>
      {/* Floating Sparks */}
      <circle cx="30" cy="20" r="2.5" fill="#F4A261" className="animate-ping" />
      <circle cx="72" cy="30" r="3" fill="#E63946" className="animate-ping" />
      <circle cx="60" cy="12" r="2" fill="#E7C169" />
    </svg>
  );
}

export function GoldenTreeAsset({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Golden Aura/Glow */}
      <circle cx="50" cy="50" r="42" fill="#FFE066" opacity="0.35" className="animate-pulse" />
      {/* Shadow */}
      <ellipse cx="50" cy="92" rx="28" ry="6" fill="#4A3B00" opacity="0.4" />
      {/* Trunk */}
      <rect x="43" y="65" width="14" height="25" rx="3" fill="#8C6D1F" />
      {/* Golden Foliage */}
      <path d="M50 10 L82 50 H18 L50 10 Z" fill="#FFD700" />
      <path d="M50 10 L82 50 H50 Z" fill="#DAA520" opacity="0.4" />
      <path d="M50 25 L88 68 H12 L50 25 Z" fill="#FFD700" />
      <path d="M50 25 L88 68 H50 Z" fill="#DAA520" opacity="0.4" />
      <path d="M50 40 L94 82 H6 L50 40 Z" fill="#FFCA28" />
      <path d="M50 40 L94 82 H50 Z" fill="#D4A017" opacity="0.4" />
      {/* Sparkling Stars */}
      <path d="M50 5 L52 12 L59 14 L52 16 L50 23 L48 16 L41 14 L48 12 Z" fill="#FFF" />
      <path d="M25 35 L26 40 L31 41 L26 42 L25 47 L24 42 L19 41 L24 40 Z" fill="#FFF" />
      <path d="M75 45 L76 49 L80 50 L76 51 L75 55 L74 51 L70 50 L74 49 Z" fill="#FFF" />
    </svg>
  );
}

export function CharredTreeAsset({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Ash Shadow */}
      <ellipse cx="50" cy="92" rx="28" ry="6" fill="#0D0D0D" opacity="0.6" />
      {/* Dead Burnt Trunk */}
      <path d="M42 90 L40 50 L32 35 L38 32 L44 45 L47 25 L53 25 L54 48 L62 38 L67 42 L58 55 L56 90 Z" fill="#1C1917" />
      <path d="M44 90 L45 52 L50 30 L52 30 L48 55 L54 90 Z" fill="#292524" />
      {/* Embers/Smoke wisps */}
      <circle cx="45" cy="35" r="1.5" fill="#EF4444" opacity="0.8" />
      <circle cx="52" cy="45" r="2" fill="#F97316" opacity="0.7" />
      <path d="M48 20 Q42 12 46 5" stroke="#A8A29E" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M54 22 Q60 15 55 8" stroke="#A8A29E" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function FlyingCatAsset({
  isDousing = false,
  className = "w-20 h-20",
}: {
  isDousing?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
        {/* Jetpack Smoke & Flame */}
        <g className="animate-pulse">
          <ellipse cx="38" cy="88" rx="7" ry="12" fill="#F97316" />
          <ellipse cx="38" cy="92" rx="4" ry="7" fill="#FACC15" />
          <ellipse cx="82" cy="88" rx="7" ry="12" fill="#F97316" />
          <ellipse cx="82" cy="92" rx="4" ry="7" fill="#FACC15" />
        </g>

        {/* Jetpack Thrusters */}
        <rect x="30" y="65" width="16" height="22" rx="4" fill="#475569" stroke="#0F172A" strokeWidth="3" />
        <rect x="74" y="65" width="16" height="22" rx="4" fill="#475569" stroke="#0F172A" strokeWidth="3" />
        <rect x="40" y="70" width="40" height="10" rx="3" fill="#64748B" stroke="#0F172A" strokeWidth="2" />

        {/* Cat Body */}
        <ellipse cx="60" cy="62" rx="26" ry="22" fill="#F97316" stroke="#0F172A" strokeWidth="3.5" />
        <ellipse cx="60" cy="64" rx="16" ry="14" fill="#FFEDD5" />

        {/* Cat Paws holding hose */}
        <circle cx="42" cy="68" r="6" fill="#FFEDD5" stroke="#0F172A" strokeWidth="2.5" />
        <circle cx="78" cy="68" r="6" fill="#FFEDD5" stroke="#0F172A" strokeWidth="2.5" />

        {/* Firehose */}
        <path d="M30 80 Q 20 85 15 95 Q 25 105 45 92 Q 60 82 72 75" fill="none" stroke="#DC2626" strokeWidth="6" strokeLinecap="round" />
        <path d="M70 76 L88 70" stroke="#94A3B8" strokeWidth="7" strokeLinecap="round" />
        <path d="M86 68 L94 65 L90 73 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="2" />

        {/* Cat Head */}
        <circle cx="60" cy="38" r="24" fill="#F97316" stroke="#0F172A" strokeWidth="3.5" />

        {/* Ears */}
        <path d="M42 22 L34 4 L50 16 Z" fill="#F97316" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
        <path d="M41 20 L37 8 L47 16 Z" fill="#FCA5A5" />
        <path d="M78 22 L86 4 L70 16 Z" fill="#F97316" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
        <path d="M79 20 L83 8 L73 16 Z" fill="#FCA5A5" />

        {/* Firefighter Helmet */}
        <path d="M34 32 C34 16 44 10 60 10 C76 10 86 16 86 32 Z" fill="#EF4444" stroke="#0F172A" strokeWidth="3" />
        <rect x="30" y="30" width="60" height="7" rx="3.5" fill="#FACC15" stroke="#0F172A" strokeWidth="2.5" />
        {/* Fire Badge */}
        <polygon points="60,16 65,22 60,28 55,22" fill="#FACC15" stroke="#0F172A" strokeWidth="1.5" />

        {/* Eyes */}
        <circle cx="50" cy="40" r="4" fill="#0F172A" />
        <circle cx="70" cy="40" r="4" fill="#0F172A" />
        <circle cx="51.5" cy="38.5" r="1.5" fill="#FFFFFF" />
        <circle cx="71.5" cy="38.5" r="1.5" fill="#FFFFFF" />

        {/* Snout & Nose */}
        <polygon points="60,44 56,47 64,47" fill="#FCA5A5" stroke="#0F172A" strokeWidth="1" />
        <path d="M57 50 Q60 53 63 50" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />

        {/* Whiskers */}
        <path d="M38 42 L24 40 M38 46 L22 47" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
        <path d="M82 42 L96 40 M82 46 L98 47" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />

        {/* Firefighter Mask (Nose & Mouth) — only worn while actively dousing */}
        {isDousing && (
          <g>
            {/* Straps to the sides of the head */}
            <path d="M45 42 Q 30 40 26 33" stroke="#0F172A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M75 42 Q 90 40 94 33" stroke="#0F172A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Mask body covering snout */}
            <path
              d="M45 41 Q60 34 75 41 Q78 52 60 57 Q42 52 45 41 Z"
              fill="#38BDF8"
              stroke="#0F172A"
              strokeWidth="3"
            />
            {/* Vent/filter lines */}
            <path
              d="M50 46 L70 46 M50 50 L70 50"
              stroke="#0F172A"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.55"
            />
            {/* Little metal filter cap */}
            <circle cx="60" cy="49" r="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
          </g>
        )}

        {/* Water Stream when dousing */}
        {isDousing && (
          <g className="animate-pulse">
            <path
              d="M92 68 Q 110 60 130 65 Q 145 70 160 80"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M92 68 Q 110 60 130 65 Q 145 70 160 80"
              fill="none"
              stroke="#E0F2FE"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="125" cy="60" r="6" fill="#38BDF8" />
            <circle cx="145" cy="72" r="8" fill="#0284C7" />
            <circle cx="160" cy="82" r="10" fill="#38BDF8" />
            <circle cx="135" cy="78" r="5" fill="#BAE6FD" />
          </g>
        )}
      </svg>
    </div>
  );
}

export function WaterSplashAsset({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M30 5 C30 5 12 28 12 40 C12 50 20 55 30 55 C40 55 48 50 48 40 C48 28 30 5 30 5 Z"
        fill="#0284C7"
      />
      <path
        d="M30 12 C30 12 18 30 18 40 C18 46 23 50 30 50 C37 50 42 46 42 40 C42 30 30 12 30 12 Z"
        fill="#38BDF8"
      />
      <circle cx="24" cy="38" r="4" fill="#E0F2FE" opacity="0.8" />
      <circle cx="10" cy="20" r="3" fill="#38BDF8" />
      <circle cx="50" cy="22" r="4" fill="#0284C7" />
      <circle cx="44" cy="12" r="2.5" fill="#BAE6FD" />
    </svg>
  );
}

// Kepulan asap kecil yang ngebul dari pohon yang lagi kebakar.
// 3 puff dengan delay & drift beda-beda biar keliatan natural, bukan gerak barengan.
export function SmokePuffAsset({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`pointer-events-none relative ${className}`} aria-hidden="true">
      <span
        className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-ink/40 blur-[2px] animate-smoke-rise"
        style={{ animationDelay: "0s", marginLeft: "-6px" }}
      />
      <span
        className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full bg-ink/35 blur-[1.5px] animate-smoke-rise"
        style={{ animationDelay: "0.7s", marginLeft: "2px" }}
      />
      <span
        className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-ink/30 blur-[1px] animate-smoke-rise"
        style={{ animationDelay: "1.4s", marginLeft: "-2px" }}
      />
    </div>
  );
}

// Kabut asap tipis yang ngambang di seluruh area game, makin pekat kalau makin
// banyak pohon yang abis — biar berasa makin genting.
export function AmbientHazeAsset({
  intensity = 0,
  className = "absolute inset-0",
}: {
  intensity?: number; // 0 sampai 1
  className?: string;
}) {
  const opacity = Math.min(0.5, 0.08 + intensity * 0.42);
  return (
    <div className={`${className} pointer-events-none overflow-hidden`} aria-hidden="true">
      <div
        className="absolute -inset-x-10 top-1/3 h-40 bg-gradient-to-b from-transparent via-ink/60 to-transparent blur-2xl animate-haze-drift"
        style={{ opacity }}
      />
      <div
        className="absolute -inset-x-10 bottom-0 h-32 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent blur-xl animate-haze-drift"
        style={{ opacity: opacity * 0.85, animationDelay: "3s", animationDirection: "reverse" }}
      />
    </div>
  );
}
