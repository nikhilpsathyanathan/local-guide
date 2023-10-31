import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const robot = Roboto({
  weight: ["500", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--roboto-font",
});

export const metadata: Metadata = {
  title: "Guide info",
  description: "Search guide by spoken language",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robot.className}>{children}</body>
    </html>
  );
}
