import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MotionConfig } from "framer-motion";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Matyos Tsegay Kassa | Software Engineer",
  description:
    "Portfolio of Matyos Tsegay Kassa, a Software Engineer focused on backend engineering, cross-platform mobile applications, and intelligent software solutions.",
  keywords: [
    "Matyos Tsegay Kassa",
    "Backend Engineer",
    "AI Engineer",
    "Software Engineer",
    "Django",
    "FastAPI",
    "Flutter",
    "Addis Ababa",
  ],
  authors: [{ name: "Matyos Tsegay Kassa" }],
  openGraph: {
    title: "Matyos Tsegay Kassa | Software Engineer",
    description:
      "Portfolio of Matyos Tsegay Kassa, a Software Engineer focused on backend engineering, cross-platform mobile applications, and intelligent software solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Matyos Tsegay Kassa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matyos Tsegay Kassa | Software Engineer",
    description:
      "Portfolio of Matyos Tsegay Kassa, a Software Engineer focused on backend engineering, cross-platform mobile applications, and intelligent software solutions.",
  },
};

const themeScript = `
(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches);if(d)document.documentElement.classList.add('dark')}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${mono.variable} font-sans`}>
        <ThemeProvider>
          <MotionConfig reducedMotion="user">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
