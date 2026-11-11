import React from "react";
import type { Metadata, Viewport } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  display: "swap",
});

const title = "Darío Martínez Kostyuk (Vukio) | Linktree - Rust, Kubernetes y Linux";
const description =
  "Linktree de Darío Martínez Kostyuk (Vukio) — Dario Martinez Kostyuk: estudiante de Ingeniería Informática en la UCO, apasionado de Rust, Kubernetes, Linux y el self-hosting. Coordinador del SalmorejoTech 2026.";

export const metadata: Metadata = {
  metadataBase: new URL("https://linktree.vukio.dev"),
  title,
  description,
  authors: [{ name: "Darío Martínez Kostyuk", url: "https://linktree.vukio.dev" }],
  creator: "Darío Martínez Kostyuk (Vukio)",
  keywords: [
    "Darío Martínez Kostyuk",
    "Dario Martinez Kostyuk",
    "Darío Martínez",
    "Dario Martinez",
    "Darío Kostyuk",
    "Dario Kostyuk",
    "Vukio",
    "000Volk000",
    "Linktree",
    "LinkTree",
    "Linktree Vukio",
    "Linktree Darío Martínez Kostyuk",
    "Linktree Dario Martinez Kostyuk",
    "Rust",
    "Kubernetes",
    "Linux",
    "UCO",
    "SalmorejoTech",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Linktree - Vukio",
    locale: "es_ES",
    firstName: "Darío",
    lastName: "Martínez Kostyuk",
    username: "Vukio",
    title,
    description,
  },
  twitter: { card: "summary", creator: "@000Volk000" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "only light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${redHatDisplay.variable} antialiased`}>
        <div className="area" aria-hidden="true">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
