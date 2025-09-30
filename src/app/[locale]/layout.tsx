import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css";

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

const locales = ['tr', 'en', 'de'];

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as 'tr' | 'en' | 'de')) notFound();

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
