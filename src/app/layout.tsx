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
  title: "Tolga Cavga - Full Stack Developer",
  description: "Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, performanslı ve ölçeklenebilir uygulamalar geliştiren deneyimli bir yazılım geliştiricisi.",
  keywords: "web developer, full stack developer, react, next.js, typescript, javascript, portfolio, cv",
  authors: [{ name: "Tolga Cavga" }],
  creator: "Tolga Cavga",
  openGraph: {
    title: "Tolga Cavga - Full Stack Developer",
    description: "Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, performanslı ve ölçeklenebilir uygulamalar geliştiren deneyimli bir yazılım geliştiricisi.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolga Cavga - Full Stack Developer",
    description: "Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, performanslı ve ölçeklenebilir uygulamalar geliştiren deneyimli bir yazılım geliştiricisi.",
  },
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
        {children}
      </body>
    </html>
  );
}
