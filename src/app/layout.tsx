import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const telma = localFont({
  src: [
    { path: "../../public/fonts/Telma-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Telma-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Telma-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-telma",
  display: "swap",
});

const hoover = localFont({
  src: [
    { path: "../../public/fonts/Hoover-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Hoover-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Hoover-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-hoover",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://victoria-and-sons-auto.vercel.app"),
  title: "Victoria and Sons Auto Repair · Newark NJ · (973) 623-1414",
  description:
    "Family auto repair at 1233 Broad St, Newark NJ. Diagnostics, brakes, engine, transmission, suspension and inspection — 4.8 stars across 462 Google reviews. Call (973) 623-1414.",
  openGraph: {
    title: "Victoria and Sons Auto Repair — check on your car like a pizza tracker",
    description:
      "4.8 stars across 462 Google reviews. Diagnostics to transmissions at 1233 Broad St, Newark NJ. Call (973) 623-1414.",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0e0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${telma.variable} ${hoover.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
