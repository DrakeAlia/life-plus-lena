import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const jost = Jost({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lifepluslena.com"),
  title: "Life Plus Lena — Interior Design",
  description: "Designing life from the inside out. Interior design that begins with how you want to live.",
  openGraph: {
    title: "Life Plus Lena — Interior Design",
    description: "Designing life from the inside out. Interior design that begins with how you want to live.",
    type: "website",
    locale: "en_US",
    siteName: "Life Plus Lena",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
