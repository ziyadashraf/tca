import "./globals.css";

import AppWrapper from "@/components/AppWrapper";

import type { Metadata } from "next";

import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Cloud Agency",
  description: "The Cloud Agency",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const language = cookieStore.get("lang")?.value || "en"; // Default to English

  return (
    <html
      suppressHydrationWarning
      suppressContentEditableWarning
      lang={language}
      dir={language === "ar" ? "rtl" : "ltr"}
      className="bg-white "
    >
      <body
        suppressHydrationWarning
        suppressContentEditableWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-white`}
      >
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
