import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const rajdhani = Rajdhani({
  weight: ["400" , "500", "600"],
  subsets: ["latin"],
  variable: "--rajdhani-font"
});

const mightySpidey = localFont({
    src: "../public/fonts/MightySpidey.ttf",
    variable: "--mighty-spidey-font",
});

export const metadata: Metadata = {
  title: "SpideyDev's Portfolio",
  description: "A project by SpideyDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rajdhani.variable} ${mightySpidey.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
