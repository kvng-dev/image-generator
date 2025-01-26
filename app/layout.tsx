import type { Metadata } from "next";
import { Roboto, Outfit } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/navbar/ResponsiveNav";
import { Toaster } from "sonner";

const font = Outfit({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Image Generator",
  description: "AI Image Generator using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-gray-900 antialiased`}>
        <ResponsiveNav />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
