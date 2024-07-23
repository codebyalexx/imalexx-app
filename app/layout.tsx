import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ImAlexx - Freelance Web Developer",
  description: "Hi, Im Alex! A French Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full flex items-center justify-center">
          <div className="flex-1 w-full max-w-7xl">{children}</div>
        </div>
      </body>
    </html>
  );
}
