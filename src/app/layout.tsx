import type { Metadata } from "next";
import { Geist, Geist_Mono, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import treeLogo from "../assets/treeLogo.png";
import treeLogoWebp from "../assets/treeLogo.webp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Linktree - 000Volk000",
  description:
    "Linktree de Darío Martínez Kostyuk, generado mediante Next y Github Pages",
  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/webp" href={treeLogoWebp.src} />
        <link rel="icon" type="image/png" href={treeLogo.src} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="color-scheme" content="light only" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${redHatDisplay.variable} antialiased`}
      >
        <div className="area">
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
