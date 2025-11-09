import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css"; 
import { cn } from "@/lib/utils";


const fontLexend = Lexend({ 
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Eco Zone Club - Home",
  description: "Your Launchpad for Innovation, Code, and Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-lexend antialiased",
          fontLexend.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}