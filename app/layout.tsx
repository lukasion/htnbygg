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
  title: "HTNBygg - Byggmester i Ålesund",
  description: "HTNBygg er en byggmester i Ålesund som utfører alt innen bygg og tømrerarbeid. Vi har lang erfaring og utfører alt fra små til store oppdrag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className={'background pointer-events-none'}></div>
        {children}
      </body>
    </html>
  );
}
