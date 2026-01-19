import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "@/components/core/Header";
import { ScrollProvider } from "@/components/providers/ScrollProvider";
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
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "The History of Austin Golf | 125 Years of Legacy",
    description:
      "An immersive journey through 125 years of Austin golf history.",
    url: "https://history.mackenzieclub.com",
    siteName: "The History of Austin Golf",
    images: [
      {
        url: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Austin Golf History - Texas Hill Country",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The History of Austin Golf",
    description:
      "An immersive journey through 125 years of Austin golf history.",
    images: ["https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&h=630&q=80"],
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
      <body className="antialiased">
        <ScrollProvider>
          <Header />
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
