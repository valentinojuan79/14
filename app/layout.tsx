import type { Metadata } from "next";
import { Bungee, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungee",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "SIAGA! Kebakaran Hutan 🔥🐱",
  description: "Surat peringatan penting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${bungee.variable} ${grotesk.variable} ${caveat.variable} font-body text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
