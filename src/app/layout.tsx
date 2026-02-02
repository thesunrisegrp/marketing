import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Sunrise Group | Global Trade Leaders Since 1985",
    template: "%s | The Sunrise Group",
  },
  description: "The Sunrise Group is a government-recognized Star Export House specializing in international and domestic trade of chemicals, textiles, and engineering goods. Operating across 42+ countries with 35+ years of excellence.",
  keywords: [
    "Sunrise Group",
    "Star Export House",
    "international trade",
    "chemical exports",
    "textile exports",
    "engineering goods",
    "global trade",
    "export company India",
    "REACH-Compliant",
    "International-Grade Quality",
    "Export-Ready Specifications",
    "Controlled Batch Consistency",
    "REACH compliant",
    "OEKO-TEX certified",
    "trade solutions",
    "supply chain management",
    "international commerce",
  ],
  authors: [{ name: "The Sunrise Group" }],
  creator: "The Sunrise Group",
  publisher: "The Sunrise Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://trade.thesunrisegrp.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trade.thesunrisegrp.com",
    siteName: "The Sunrise Group",
    title: "The Sunrise Group | Global Trade Leaders Since 1985",
    description: "Government-recognized Star Export House specializing in chemicals, textiles, and engineering goods. Operating across 42+ countries with 35+ years of excellence.",
    images: [
      {
        url: "/company.png",
        width: 1200,
        height: 630,
        alt: "The Sunrise Group Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sunrise Group | Global Trade Leaders Since 1985",
    description: "Government-recognized Star Export House specializing in chemicals, textiles, and engineering goods. Operating across 42+ countries.",
    images: ["/company.png"],
    creator: "@sunrisegroup",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "International Trade & Export",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
