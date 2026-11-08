import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SCAMSAATHI AI — Safer Digital Life",
  description:
    "An India-focused platform to help identify suspicious messages, phishing links, and digital scams."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
