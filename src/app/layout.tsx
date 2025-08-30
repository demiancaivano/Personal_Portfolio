import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./structured-data";

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
  description: "Professional portfolio of Demian Nicolás Caivano, Full Stack Developer specialized in React, Flask, and PostgreSQL. Explore my projects including Dr_Shopper e-commerce platform and experience in modern web development.",
  keywords: "Demian Caivano, Full Stack Developer, React, Flask, PostgreSQL, Python, JavaScript, Portfolio, Web Development, Dr_Shopper, E-commerce, Argentina Developer",
  authors: [{ name: "Demian Nicolás Caivano", url: "mailto:demian.caivano@gmail.com" }],
  creator: "Demian Nicolás Caivano",
  publisher: "Demian Nicolás Caivano",
  metadataBase: new URL('https://demian-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Demian Nicolás Caivano - Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing full-stack development projects including Dr_Shopper e-commerce platform. Specialized in React, Flask, and PostgreSQL.",
    type: "website",
    locale: "en_US",
    url: "https://demian-portfolio.vercel.app",
    siteName: "Demian Caivano Portfolio",
    images: [
      {
        url: "/profile-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Demian Nicolás Caivano - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Demian Nicolás Caivano - Full Stack Developer",
    description: "Professional portfolio showcasing full-stack development projects. Specialized in React, Flask, and PostgreSQL.",
    images: ["/profile-photo.jpg"],
  },
  verification: {
    google: "google-site-verification-code", // Agregar después de configurar Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
