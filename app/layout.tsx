import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/Header/HeaderWrapper";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { cookies } from "next/headers";
import WhatsappButton from "@/components/WhatsappButton";
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
  title: "TCA",
  description: "TCA - Creative Agency",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  return (
    <html
      suppressHydrationWarning
      suppressContentEditableWarning
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-white "
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-white`}
      >
        <Providers>
          <div className="hidden">
            list-disc list-decimal list-none text-left rtl:text-right
            text-center text-right
          </div>
          <HeaderWrapper />
          {children}
          <Footer />
          <WhatsappButton />
        </Providers>
      </body>
    </html>
  );
}
