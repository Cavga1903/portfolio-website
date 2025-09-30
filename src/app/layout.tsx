import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body
        className={`${sora.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
