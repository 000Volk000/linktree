import React from "react";
import type { Metadata, Viewport } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import treeLogo from "../assets/treeLogo.png";
import treeLogoWebp from "../assets/treeLogo.webp";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  display: "swap",
});

const title = "Darío Martínez Kostyuk | Rust, Kubernetes y Linux";
const description =
  "Darío Martínez Kostyuk: estudiante de Ingeniería Informática en la UCO, apasionado de Rust, Kubernetes, Linux y el self-hosting. Coordinador del SalmorejoTech 2026.";

// opengraph-image.jpg in this folder is picked up by Next automatically
export const metadata: Metadata = {
  metadataBase: new URL("https://linktree.vukio.dev"),
  title,
  description,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: treeLogoWebp.src, type: "image/webp" },
      { url: treeLogo.src, type: "image/png" },
    ],
    // explicit because a custom icons field disables the apple-icon.png convention
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Vukio",
    locale: "es_ES",
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
