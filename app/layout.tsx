import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/common/header";
const work_Sans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crowdfunding",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={work_Sans.className}>{children}</body>
    </html>
  );
}