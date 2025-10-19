import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Hear Me",
  description: "Hear Me translates American Sign Language (ASL) into speech and text in real time, bridging communication between deaf and hearing communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased bg-background text-text`}
      >
        {children}
      </body>
    </html>
  );
}
