import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google';
import "./globals.css";
import ResponsiveSidebar from "@/components/ResponsiveSidebar"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
export const metadata = {
  title: "SWAYAMM ACCOUNTING",
  description: "SWAYAMM ACCOUNTING",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <link rel="icon" href="/logo.svg" type="image/svg" />
         
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ResponsiveSidebar></ResponsiveSidebar> */}
        {children}
      </body>
    </html>
  );
}
