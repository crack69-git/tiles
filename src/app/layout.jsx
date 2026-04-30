import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarSection from "@/Components/Shared/NavbarSection";
import HeroSection from "@/Components/Shared/HeroSection";
import FooterSection from "@/Components/Shared/FooterSection";
import MarqueePage from "@/Components/Shared/Marquee";
import ProductSection from "@/Components/Shared/ProductSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tiles Gallery",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-gray-100">
        <div className="w-11/12 mx-auto pt-5 flex flex-col min-h-screen">
          <NavbarSection />
          <main className="flex-1">{children}</main>
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
