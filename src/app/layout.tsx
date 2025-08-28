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
  title: "Demian Nicolás Caivano - Full Stack Developer",
  description: "Professional portfolio of Demian Nicolás Caivano, Full Stack Developer specialized in React, Flask, and PostgreSQL. Explore my projects and experience in modern web development.",
  keywords: "Demian Caivano, Full Stack Developer, React, Flask, PostgreSQL, Python, JavaScript, Portfolio",
  authors: [{ name: "Demian Nicolás Caivano", url: "mailto:demian.caivano@gmail.com" }],
  openGraph: {
    title: "Demian Nicolás Caivano - Full Stack Developer",
    description: "Professional portfolio of Demian Nicolás Caivano, Full Stack Developer specialized in React, Flask, and PostgreSQL.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
