import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sudokai",
  description: "Sudokai is a modern and minimalistic Color Sudoku web app. Play, challenge yourself, and track your stats.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device.width, initial-scale=1" />
      </head>
      <body
        className="bg-background text-foreground antialiased"
      >
        {children}
      </body>
    </html>
  );
}
