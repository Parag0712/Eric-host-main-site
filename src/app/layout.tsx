import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import StoreProvider from "./StoreProvider";
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
      {/* Head Tag */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.png" />
      </head>

      {/* Body */}
      <body className={cn("font-poppins ", inter.className, {
        "debug-screens": process.env.NODE_ENV === "development",
      })}>
        <StoreProvider>
        <header className="sticky-navbar">
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
        </StoreProvider>
      </body>

      {/* Script Tag For Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="ga-script" strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
      });
          `}
      </Script>

      {/* Dev Mode */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_DEV_GOOGLE_ANALYTICS}`}
      />
      <Script id="ga-script" strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_DEV_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
      });
          `}
      </Script>

      {/* Hotjar Tracking Code */}
      <Script id="hotjar-script">
        {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:5005318,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
      </Script>
    </html >
  );
}
