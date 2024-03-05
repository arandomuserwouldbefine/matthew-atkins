import type { Metadata } from "next";
import "./globals.css";

import { work_sans, kalnia } from "../font/font";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Matt Attkins",
  description: "Photography Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(kalnia.variable, work_sans.className)}>
        {children}
      </body>
    </html>
  );
}
