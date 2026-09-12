import React from "react";

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
