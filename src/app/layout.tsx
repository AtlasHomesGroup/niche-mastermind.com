import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niche Mastermind — Master Every Book, One Game at a Time",
  description:
    "Interactive mastery games built from real books. Flashcards, number crunching, funnel diagnosis, and quizzes — all in one place.",
  openGraph: {
    title: "Niche Mastermind",
    description:
      "Interactive mastery games built from real books by Michael Franke.",
    url: "https://niche-mastermind.com",
    siteName: "Niche Mastermind",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
