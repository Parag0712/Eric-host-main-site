import { Footer } from "@/components/Footer/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Navbar } from "@/components/Navbar/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Best Affordable and Reliable Web Hosting Provider in India | EricHost",
  description: "Best Affordable and Reliable Web Hosting Provider in India | EricHost",
  keywords: "Web Hosting, Affordable Hosting, Reliable Hosting, EricHost, Hosting Provider, India",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={cn("scroll-smooth font-poppins ", inter.className, {
        "debug-screens": process.env.NODE_ENV === "development",
      })}>
        <header className="sticky-navbar">
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
      
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />
    </html>
  );
}
