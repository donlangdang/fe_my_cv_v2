import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ProgressBar from "@/components/progressBar/ProgressBar";
import SmoothScrolling from "@/components/smoothScrolling/SmoothScrolling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
export const metadata: Metadata = {
  title: {
    template: "%s | Don Dinh Leathercraft",
    default:
      "Don Dinh | Premium Handmade Leather Goods & Bespoke Craftsmanship",
  },
  description:
    "Exquisite handcrafted leather goods by Don Dinh. Specializing in bespoke wallets, bags, and accessories using traditional hand-stitching techniques and premium leathers.",
  keywords: [
    "Handmade leather goods",
    "Bespoke leather artisan",
    "Traditional hand-stitched leather",
    "Custom leather wallets",
    "Premium leather craftsmanship",
    "Don Dinh Leather",
  ],
  openGraph: {
    title: {
      template: "%s | Don Dinh Leathercraft",
      default:
        "Don Dinh | Premium Handmade Leather Goods & Bespoke Craftsmanship",
    },
    description:
      "Exquisite handcrafted leather goods by Don Dinh. Specializing in bespoke wallets, bags, and accessories using traditional hand-stitching techniques and premium leathers.",
    url: `${baseUrl}`,
    siteName: "Don Dinh Leathercraft",
    images: [
      {
        url: "/bannerHome.jpg",
        width: 1200,
        height: 630,
        alt: "Don Dinh Leather Artisan",
      },
    ],
    locale: "en_US",
    phoneNumbers: "0846414579",
    type: "website",
    emails: "congdondev@gmail.com",
    countryName: "Việt Nam",
  },
  alternates: {
    canonical: `${baseUrl}`,
  },
  metadataBase: new URL(`${baseUrl}`),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SmoothScrolling>
            <Header />
            {children}
            <Footer />
            <ProgressBar />
          </SmoothScrolling>
        </body>
      </html>
    </ViewTransitions>
  );
}
