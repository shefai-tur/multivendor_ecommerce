import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow } from "next/font/google";
import "./globals.css";

//Theme provider
import { ThemeProvider } from "next-themes";

//fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const barlowFont = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
//clerk Provider
import { ClerkProvider } from '@clerk/nextjs'

//metadata
export const metadata: Metadata = {
  title: "marzax.com",
  description:
    "A multivendor ecommerce website built with Next.js 13, Tailwind CSS, and TypeScript.",
};

//layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${barlowFont.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem  disableTransitionOnChange>
          {children}
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
