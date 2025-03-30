import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} `}
      >
        <Header />
        <main className="min-h-screen pt-21">{children}</main>
        <footer className="py-4 text-center text-xs text-gray-500 border-t">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-blue-600">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-blue-600">
                Terms & Conditions
              </a>
              <span>•</span>
              <a href="#" className="hover:text-blue-600">
                Support
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
