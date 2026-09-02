import type { Metadata } from "next";
import { Anton, Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BrokeTechies | Broke Tech Bro & Broke Tech Sis",
  description:
    "We teach broke techies how to finally earn online. Eight in-demand skills, a stage-by-stage path, and a physical round table led by the founder.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${sourceSerif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
