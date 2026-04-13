import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KoalityKids — Improving the World, One Child at a Time",
  description:
    "KoalityKids is an active learning app for children. Use child-safe AI to explore, identify, and discover the world — earning badges and building curiosity along the way.",
  keywords:
    "kids learning app, child-safe AI, active learning, nature exploration, kids education app, species identification, KoalityKids",
  openGraph: {
    title: "KoalityKids — Improving the World, One Child at a Time",
    description:
      "The fun, safe way for kids to actively explore and learn about the world around them.",
    type: "website",
    url: "https://koalitykids.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
