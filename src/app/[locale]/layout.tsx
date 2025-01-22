import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { notFound } from "next/navigation";
import { languages } from "@/locales/config";

import TranslationManager from "@/lib/TranslationManager"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 参考元 https://github.com/toakiryu/nextjs-rich-tpl/blob/main/templates/app/with-i18n-routing/src/app/%5Blocale%5D/layout.tsx#L33C1-L156C2
export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const tm = new TranslationManager(locale);
  const t = tm.t.bind(tm);

  return {
    title: "ScraBot",
    description: `${t("description")}`,
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // 言語が `languages` に存在しない場合、notFound を呼び出す
  if (!languages[locale]) {
    notFound();
  }

  return (
    <html lang={locale} className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
