import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The History of Austin Golf | 125 Years of Legacy",
  description:
    "An immersive journey through 125 years of Austin golf history. From Lewis Hancock's vision in 1899 to the modern renaissance of Texas Hill Country courses.",
  keywords: [
    "Austin golf history",
    "Harvey Penick",
    "Austin Country Club",
    "Ben Crenshaw",
    "Tom Kite",
    "Lions Municipal Golf Course",
    "Muny",
    "Texas golf",
    "Hill Country golf",
  ],
  authors: [{ name: "Mackenzie Club" }],
  openGraph: {
    title: "The History of Austin Golf | 125 Years of Legacy",
    description:
      "An immersive journey through 125 years of Austin golf history.",
    url: "https://history.mackenzieclub.com",
    siteName: "The History of Austin Golf",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The History of Austin Golf",
    description:
      "An immersive journey through 125 years of Austin golf history.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
