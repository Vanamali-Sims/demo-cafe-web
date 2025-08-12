import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const heading = Fraunces({ variable: "--font-heading", subsets: ["latin"] });
const body = Work_Sans({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bitter & Bloom — From soil to soul",
  description:
    "Bitter & Bloom is a fictional Fitzroy cafe and roastery serving sustainably sourced, transparently traded coffee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} smooth-scroll`}>
        {children}
      </body>
    </html>
  );
}
