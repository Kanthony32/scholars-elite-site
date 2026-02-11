import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "NJ Scholars Elite | Girls Basketball Development",
  description:
    "Elite girls basketball development + exposure built like a program. Over 25 years of grassroots experience. Standards over hype.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg0 font-body text-text1">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
