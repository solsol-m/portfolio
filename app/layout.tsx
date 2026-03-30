import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceSans = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Malak Elmalahi | Full Stack Developer",
  description:
    "Elite portfolio by Malak Elmalahi. Modern, scalable, visually stunning web applications with motion-first UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceSans.variable} ${mono.variable} ${inter.variable} h-full`}>
      <body className="min-h-full bg-[#04040a] text-white font-sans antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
